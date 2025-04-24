let scene, camera, renderer, cube;

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

    const light = new THREE.DirectionalLight(0x4169E1, 3);
    light.position.set(-3,4,5);
    scene.add(light);

    

    // const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    // scene.add( light );
    const helper = new THREE.DirectionalLightHelper( light, 5 );
scene.add( helper );

    const lightb = new THREE.DirectionalLight(0xff0000, 3);
    lightb.position.set(1,3,5);
    scene.add(lightb);

    

    // const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    // scene.add( light );
    const helperb = new THREE.DirectionalLightHelper( lightb, 5 );
scene.add( helperb );

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    

    

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models

    loader.load('assets/leafeon/scene.gltf', function (gltf) {

        const pokemon = gltf.scene;
        scene.add(pokemon);
        pokemon.scale.set(1.5,1.5,1.5)
    })

    
    const geometry = new THREE.BoxGeometry( .3, .3, .3 ); 
    // const material = new THREE.MeshBasicMaterial({color: 0x0000ff}); 

    const texture = new THREE.TextureLoader().load('textures/crate.gif');
    const material = new THREE.MeshStandardMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material); 
    scene.add(cube);
    
    camera.position.z = 5;

    const geometry2 = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 
    const texture2 = new THREE.TextureLoader().load('textures/lavatile.jpg');
    const material2 = new THREE.MeshStandardMaterial({ map: texture2 });
    
    const torusKnot = new THREE.Mesh( geometry2, material2 ); 
    scene.add( torusKnot );
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
