//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let startimg, alleyimg, helpimg;
let chillb, merow, purr, mew;
let bf, lf
let songplay = false
let hoverState = {};
let hasCollided = false;




var mgr;

var cat;
var catSprites;
var catAnis = {
    idle: {row: 0, frames:10},
    idle2: {row: 1, frames:10},
    sleep: {row: 2, frames:4},
    dance: {row: 3, frames:4},
    meow: {row: 4, frames:8},
    beg: {row: 5, frames:12},
    loaf: {row: 6, frames:12},
    lean: {row: 7, frames:9},
    cry: {row: 8, frames:4},
    boxpop: {row: 9, frames:12},
    boxlook: {row: 10, frames:4},
    boxblink: {row: 11, frames:4},
    suprised: {row: 12, frames:12},
    eat: {row: 13, frames:15},
    sit: {row: 14, frames:6}
}
var catc;
var catcSprites;

var catb;
var catbSprites;

var catg;
var catgSprites;

var catt;
var cattSprites;

var cato;
var catoSprites;

var catw;
var catwSprites;

var allcatAnis = {
    sit: {row: 0, frames:6},
    stand: {row: 1, frames:3},
    lay: {row: 2, frames:1},
    sleep: {row: 3, frames:4},
    down: {row: 4, frames:10},
    walk: {row: 5, frames:6},
    run: {row: 6, frames:12},
    boxpop: {row: 7, frames:12},
    boxpeep: {row: 8, frames:10},
    boxuwu: {row: 9, frames:12},
    cry: {row: 10, frames:4},
    dance: {row: 11, frames:4},
    sleepysat: {row: 12, frames:8},
    suprised: {row: 13, frames:2},
    eeping: {row: 14, frames:4},
    dead: {row: 15, frames:6},
    smoosh: {row: 16, frames:5},
    hurt: {row: 17, frames:8},
    hit: {row: 18, frames:7}
}

var cat2;
var cat2Sprites;
var cat2Anis = {
    idle: {row: 0, frames:4},
    idle2: {row: 1, frames:4},
    lick: {row: 2, frames:4},
    clean: {row: 3, frames:4},
    walk: {row: 4, frames:8},
    run: {row: 5, frames:8},
    sleep: {row: 6, frames:4},
    paw: {row: 7, frames:6},
    pounce: {row: 8, frames:7},
    hiss: {row: 9, frames:8},
}


function preload() {
    // sound should be loaded so its available for all places.
   chillb = loadSound("assets/simplemusic.mp3");
   merow = loadSound("assets/merow.mp3");
   purr = loadSound("assets/catpurr.mp3");
   mew = loadSound("assets/cutemew.mp3");
   btnhover = loadSound("assets/hoversound.mp3");
   select = loadSound("assets/select.mp3");
   softmew = loadSound("assets/softmew.mp3");

   bf = loadFont("assets/fluffygichi_regular.ttf");
   lf = loadFont("assets/PatrickHandSC-Regular.ttf");

   startimg = loadImage("assets/startscreen.jpeg");
   roomimg = loadImage("assets/cozyroom.avif");
   kitchenimg = loadImage("assets/kitchen.jpeg");
   helpimg = loadImage("assets/cozyh.webp");
   livingroomimg = loadImage("assets/cozylivingroom.jpeg");
   endingimg = loadImage("assets/hurray.gif");

   catSprites = loadImage('assets/AllCats.png');
   cat2Sprites = loadImage('assets/cat2sheet.png');
   catbSprites = loadImage('assets/AllCatsBlack.png');
   catcSprites = loadImage('assets/AllCatsCream.png');
   catgSprites = loadImage('assets/AllCatsGrey.png');
   cattSprites = loadImage('assets/AllCatsGreyWhite.png');
   catoSprites = loadImage('assets/AllCatsOrange.png');
   catwSprites = loadImage('assets/AllCatsWhite.png');


}

function setup() {
    let canvas = createCanvas(626, 351);

    canvas.parent("canvas-container");
    //console.log(hello);
    mgr = new SceneManager();

   cat = new Sprite();
   cat.anis.frameDelay = 10;
   cat.spriteSheet = catSprites;
   cat.anis.w = 32
   cat.anis.h = 32
   cat.addAnis(catAnis);
   cat.changeAni('idle2');
   cat.rotationLock = true;

//    cat.removeColliders();
//    cat.debug=true;

   cat2 = new Sprite();
   cat2.anis.frameDelay = 8;
   cat2.spriteSheet = cat2Sprites;
   cat2.anis.w = 32
   cat2.anis.h = 32
   cat2.addAnis(cat2Anis);
   cat2.changeAni('walk');
   cat2.removeColliders();
   cat2.rotationLock = true;

//    cat2.debug = true;

   catc = new Sprite();
   catc.anis.frameDelay = 8;
   catc.spriteSheet = catcSprites;
   catc.anis.w = 64
   catc.anis.h = 64
   catc.addAnis(allcatAnis);
   catc.changeAni('sit');
//    catc.removeColliders();
   catc.rotationLock = true;

//    catc.debug = true;

   catt = new Sprite();
   catt.anis.frameDelay = 8;
   catt.spriteSheet = cattSprites;
   catt.anis.w = 64
   catt.anis.h = 64
   catt.addAnis(allcatAnis);
   catt.changeAni('sit');
   catt.removeColliders();
   catt.rotationLock = true;

//    catt.debug = true;

   catw = new Sprite();
   catw.anis.frameDelay = 8;
   catw.spriteSheet = catwSprites;
   catw.anis.w = 64
   catw.anis.h = 64
   catw.addAnis(allcatAnis);
   catw.changeAni('sit');
   catw.removeColliders();
   catw.rotationLock = true;

//    catw.debug = true;

   cat.visible = false;
   cat2.visible = false; 
   catc.visible = false;
   catt.visible = false;
   catw.visible = false;

    mgr.addScene (start);
    mgr.addScene (room);
    mgr.addScene (kitchen);
    mgr.addScene (livingroom);
    mgr.addScene (shelp);
    mgr.addScene (rhelp);
    mgr.addScene (khelp);
    mgr.addScene (lrhelp);
    mgr.addScene (ending);
    mgr.showNextScene();

    textFont(bf);
    // textFont(lf);

}
    // function update() {
//     clear();
//     animation(pot, 100, 100);
  
//     image(pot.spriteSheet, width/2, height/2);
//   }


function draw()
{

    mgr.draw();
}

function mousePressed()
{
      mgr.mousePressed();
}

function keyPressed()
{
    switch(key)
    {
        case '1':
            mgr.showScene( start );
            break;
        case '2':
            mgr.showScene( room );
            break;
        case '3':
            mgr.showScene( kitchen );
            break;
        case '4':
            mgr.showScene( livingroom );
            break;
        case '5':
            mgr.showScene( shelp );
            break;
        case '6':
            mgr.showScene( rhelp );
            break;
        case '7':
            mgr.showScene( khelp );
            break;
        case '8':
            mgr.showScene( lrhelp );
            break;
        case '9':
            mgr.showScene( ending );
            break;
        case 'h':
            mgr.showScene( shelp );
            break;
    }

    mgr.keyPressed();
}
