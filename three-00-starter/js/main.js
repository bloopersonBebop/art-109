let scene, camera, renderer, cube, torusKnot;

// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene



//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~

function init(){
    scene = new THREE.Scene({antialias: true});
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    

    const geometry = new THREE.TorusKnotGeometry( 25, 1, 1000, 36 ); 
    // const material = new THREE.MeshBasicMaterial({color: 0x0000ff}); 

    const texture = new THREE.TextureLoader().load('textures/crate.gif');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material); 
    scene.add(cube);
    
    camera.position.z = 5;

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models
}





// →→→→→→ Follow next steps in tutorial: 
// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene



function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}


window.addEventListener('resize', onWindowResize, false);
init();
animate();