
////////////////////////////// STARTPAGE /////////////////
function start()  {
    var speedx
    var speedy
    let btnevent1 =false;
    let btnevent2 =false;


    this.setup = function() {
      console.log("We are at setup for start");

      outputVolume(.15);  
    }

    this.enter = function()  {
        console.log("We are at entering start");
        background("grey");
        textAlign(CENTER);
        textSize(60);
        noStroke();
        // speedx = random(-2, 2);
        // speedy = random(-2,2);
        catc.changeAni("sleep")
        catc.position.x = width - 79
        catc.position.y = height - 85
        catc.scale = .8
        catc.visible= true;
        cat2.visible = false;
        cat.visible = false;
        catt.visible = false;
        catw.visible = false;

        mouse.visible = true;

        catt.removeColliders();
        catw.removeColliders();
        cat.removeColliders();
        catc.addCollider();
        // catc.addColliders();

       

       
        if ( !chillb.isPlaying() ) {
          chillb.play();
      }


    }


    


    this.draw = function(){
    push();
    translate(-100,0);
    scale(.25)
    image(startimg,0,0);
    pop();

    strokeWeight(5);
    fill(55, 140, 85);
    text('Life of CAT', width/2, (height/2)+25);
      
    if ( !chillb.isPlaying() ) {
      chillb.play();
  }
    

  if (catc.mouse.hovering() ) {
    console.log('hovering');
    catc.changeAnimation('eeping');
    // mew.play();
  } else {
    catc.changeAnimation('sleep');

  }

  let mouseOverCat = (mouseX > catc.position.x - catc.width / 2 &&
    mouseX < catc.position.x + catc.width / 2 &&
    mouseY > catc.position.y - catc.height / 2 &&
    mouseY < catc.position.y + catc.height / 2);


    if (mouseOverCat) {
      if (!wasHoveringCat) {
        merow.play();           
        wasHoveringCat = true;
      }
    } else {
      wasHoveringCat = false; 
    }



      //-----------------------------------------------bounce cat code
      //   push();
        
      //   scale(6);
      //   cat2.position.x =  lox;
      //   cat2.position.y =  loy;



      //   if (lox < 0) {
      //     lox = width;
      // }
      // if (lox > width) {
      //     lox = 0;
      // }
      // if (loy < 0) {
      //     loy = height;
      // }
      // if (loy > height) {
      //     loy = 0;
      // }

      // lox += speedx;
      // loy += speedy;


      //   // if (loy > height-140) {
      //   //   loy = 0;
      //   // }
      //   //  loy++;

      //   pop();

      //----------------------------------------sleep button  
    
        // cat2.changeAnimation('walk');

        // if (kb.pressing('s')) {
        // cat2.scale = 2, 
        // cat2.position.x =  width/2,
        // cat2.position.y =  height/2,
        // cat2.changeAnimation('sleep');
        // } else {
        //   cat2.scale = 1.5;
        //   // cat2.changeAni('walk');
        // }
        //----------------------------------------cat pounce
        // if (kb.pressing('q')) {
        //   cat2.scale = 5;
        //   cat2.changeAnimation('pounce');
        // }  else {
        // // cat2.scale = 1.5;
        // //  cat2.changeAnimation('walk');
        // }
    
   
                             // title,textc, texthoverc, textpressedc,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = lmverscheckButtonPress("How it Works", color(255),color(250, 163, 255),color(255),width/16,height-70,100,40,color(250, 163, 255),color(252, 225, 252),color(143, 49, 148));  
      if (btnevent1) { // help
        btnevent1 = false;
        this.sceneManager.showScene( shelp );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = lmverscheckButtonPress("Enter",color(255),color(120,180,100),color(255),width/16,height-120,120,40,color(120,180,100),color(193, 247, 206),color(8, 92, 28));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         lmmew();
         this.sceneManager.showNextScene(room);
      }

    }


}

///////////////////////  BEDROOM  ////////////////////////

function room()  {

   let btnevent1 = false;
   let btnevent3 =false;

  this.setup = function() {
      console.log("We are at setup for the room");
  }

  this.enter = function()
  {
    console.log("We are at entering the room");

    cat.position.x =  width-200;
    cat.position.y =  height-100;
    cat.visible = true;
    cat.scale = 1.5

    cat2.visible = false;
    catc.visible = false;
    catt.visible = false;
    catw.visible = false;

    catt.removeColliders();
    catw.removeColliders();
    cat.addCollider();
    catc.removeColliders();

    mouse.visible = true;


    if ( !chillb.isPlaying() ) {
      chillb.play();
   }


  }


//x = 113 y = 76

    this.draw = function() {

      let mouseOverCat = (mouseX > cat.position.x - cat.width / 2 &&
        mouseX < cat.position.x + cat.width / 2 &&
        mouseY > cat.position.y - cat.height / 2 &&
        mouseY < cat.position.y + cat.height / 2);



    image(roomimg,0,0);

    
    if ( cat.position.x == 426 && cat.position.y == 251 ) {
  
    cat.changeAnimation("loaf");
      
    }

    // console.log(cat.position.x , cat.position.y)
    //cat.changeAnimation("loaf");


    if (cat.mouse.hovering() ) {
      console.log('hovering');
      cat.changeAnimation('meow');
      // mew.play();

    }

    push();
    if (cat.mouse.pressing()) {
      cat.position.x =  width-380;
      cat.position.y =  height-40;
      cat.changeAnimation('eat');
      purr.play();
      purr.setVolume(4);


    }
    pop();



    if (kb.pressed('b')) {
    cat.changeAni('boxpop');
    cat.position.x =  random(235, 480);
    cat.position.y =  random(240,325);
    mew.play(); 
  }

    if (kb.pressing('s')) {
    cat.changeAni('sleep');
    cat.position.x =  width-201;
    cat.position.y =  height-100;}




    if (mouseOverCat) {
      if (!wasHoveringCat) {
        mew.play();           
        wasHoveringCat = true;
      }
    } else {
      wasHoveringCat = false; 
    }
  
    // else cat2.scale = 1.5, cat2.changeAni('walk');




    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = lmverscheckButtonPress("Tasks", color(255),color(250, 163, 255),color(255),width/16,height-70,100,40,color(250, 163, 255),color(252, 225, 252),color(143, 49, 148));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( rhelp );
    }

    btnevent3 = lmverscheckButtonPress("Kitchen",color(255),color(120,180,100),color(255),width - width/4,height-70,120,40,color(120,180,100),color(193, 247, 206),color(8, 92, 28));
    if (btnevent3) {   
      btnevent3 = false;
       lmmew();
       this.sceneManager.showNextScene(kitchen);
    }

    }  //end

    this.mousePressed = function()
    {

    }


}



////////////////////////////// KITCHEN /////////////////

function kitchen() {
  var d;
  let btnevent1 = false;
  let btnevent4 =false;
  let btnevent5 =false;



    this.setup = function()  {
        console.log("We are at setup for help");

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     catc.position.x =  width/2;
     catc.position.y =  (height/2)+15;
     catc.visible = true;
     catc.scale = 1
     catc.addCollider();

     cat.visible = true;
     cat.position.x =  427;
     cat.position.y =  199;
     cat.scale = 1.5
     
     catt.removeColliders();
     catw.removeColliders();
     cat.addCollider();
     catc.addCollider();

     cat2.visible = false;
     catt.visible = false;
     catw.visible = false;

     mouse.visible = true;
    
     
     if ( purr.isPlaying() ) {
      purr.stop();
   }
   if ( !chillb.isPlaying() ) {
    chillb.play();
 }

    }

    this.draw = function() {

      push();
      scale(1.04);
      image(kitchenimg,0,0);
      pop();


      //------------------------------------movable cat
      catc.speed = 3;
	
      if (kb.pressing('up')) {
        catc.direction = -90;
        catc.changeAni("walk");
      } else if (kb.pressing('down')) {
        catc.direction = 90;
        catc.changeAni("walk");
      } else if (kb.pressing('left')) {
        catc.direction = 180;
        catc.changeAni("walk");
        catc.scale.x = -1

      } else if (kb.pressing('right')) {
        catc.direction = 0;
        catc.changeAni("walk");
        catc.scale.x = 1

      } else {
        catc.changeAni("sit");
        catc.speed = 0;
      }

      // if (cat2.collide(cat)) {
      //   console.log("Touching!")
      //   cat2.changeAnimation("paw");
      // } else {
      //   // cat2.changeAni("idle");
      // }
    


      // console.log(cat.position.x , cat.position.y)

      //-------------------------------------------------cat moving towards counter
      cat.moveTowards(427, 199, .023);
    
      d = dist(cat.position.x, cat.position.y, 427, 199);

       if (d < 5) {
       cat.changeAni("idle2");
        } else {
       cat.changeAni("dance"); 
       }
       //-------------------------------------------------grab cat
       if (cat.mouse.hovering()) mouse.cursor = 'grab';
	    else mouse.cursor = 'default';

    	if (cat.mouse.dragging()) {
	  	cat.moveTowards(
			mouse.x + cat.mouse.x,
			mouse.y + cat.mouse.y,
			1
		);
	}

  let mouseOverCat = (mouseX > cat.position.x - cat.width / 2 &&
    mouseX < cat.position.x + cat.width / 2 &&
    mouseY > cat.position.y - cat.height / 2 &&
    mouseY < cat.position.y + cat.height / 2);

    if (mouseOverCat) {
      if (!wasHoveringCat) {
        mew.play();           
        wasHoveringCat = true;
      }
    } else {
      wasHoveringCat = false; 
    }

  let mouseOverCCat = (mouseX > catc.position.x - catc.width / 2 &&
    mouseX < catc.position.x + catc.width / 2 &&
    mouseY > catc.position.y - catc.height / 2 &&
    mouseY < catc.position.y + catc.height / 2);

    if (mouseOverCCat) {
      if (!wasHoveringCat2) {
        merow.play();           
        wasHoveringCat2 = true;
      }
    } else {
      wasHoveringCat2 = false; 
    }
  


    btnevent1 = lmverscheckButtonPress("Tasks", color(255),color(250, 163, 255),color(255),width/16,height-70,100,40,color(250, 163, 255),color(252, 225, 252),color(143, 49, 148));  
    if (btnevent1) { 
      btnevent1 = false;
      this.sceneManager.showScene( khelp );
    }

    btnevent4 = lmverscheckButtonPress("Bedroom",color(255),color(120,180,100),color(255),width/16,height-120,120,40,color(120,180,100),color(193, 247, 206),color(8, 92, 28));

 
    if (btnevent4) {   
      btnevent4 = false;
       this.sceneManager.showScene(room);
    }

    btnevent5 = lmverscheckButtonPress("Living Room",color(255),color(120,180,100),color(255),width - width/4,height-70,120,40,color(120,180,100),color(193, 247, 206),color(8, 92, 28));
    if (btnevent5) {   
      btnevent5 = false;
       lmmew();
       this.sceneManager.showNextScene(livingroom);
    }

    }




  }



////////////////////////////// LIVINGROOM /////////////////

function livingroom() {
  let btnevent1 = false;
  let btnevent4 =false;
  let distance

  let apartStartTime = null; 
  let apartTimerActive = false;
  let transitionTriggered = false;



    this.setup = function()  {
        console.log("We are at setup for livingroom");

    }

    this.enter = function()
    {
     console.log("We are at entering for livingroom");
     catt.position.x =  width/2;
     catt.position.y =  (height/2)+15;
     catt.visible = true;
     catt.scale = 1.2
     catt.addCollider();


     catw.position.x =  width/2;
     catw.position.y =  height/2;
     catw.visible = true;
     catw.scale = .6
     catw.addCollider();
     
     cat.removeColliders();
     catc.removeColliders();
    
    
    mouse.visible = false;

     cat2.visible = false;
     cat.visible = false;
     catc.visible = false;
    
     
     if ( purr.isPlaying() ) {
      purr.stop();
   }
   if ( !chillb.isPlaying() ) {
    chillb.play();
 }

    }

    this.draw = function() {

      push();
      scale(1.035);
      image(livingroomimg,0,0);
      pop();

      //--------------------------------------------cats moving from mouse-eachother

   
      catt.moveTowards(mouse);

      distance = dist(catt.position.x, catt.position.y, catw.position.x, catw.position.y);

      if (distance > 59) {
		    catw.direction = catw.angleTo(catt);
		    catw.speed = 1.5;
        catw.changeAni('walk');

	    } else if (distance < 50) {
        catw.speed = 0;
        catw.changeAni('sit');
      }

      if (catw.speed > 0) {
        if (catw.direction < 90 && catw.direction > -90) {
          catw.scale = .6;
          catw.changeAni('walk');
        } else {
          catw.scale.x = -.6;
          catw.changeAni('walk');

      }
    }
    
      if (catt.direction < 90 && catt.direction > -90) {
        catt.scale = 1;
        catt.changeAni('walk');
      } else {
        catt.scale.x = -1;
        catt.changeAni('walk');
      }


      if (catt.speed == 0) {
        catt.changeAni('down');
      }
    
    

      if (catw.overlap(catt)) {
        if (!hasCollided) {
          softmew.play(); 
          hasCollided = true; 
        }
      } else {
        hasCollided = false; 
      }

      // //---------------------------------------------- timer!!

      if (!catt.overlap(catw)) {
        if (!apartTimerActive) {
          apartStartTime = millis(); 
          apartTimerActive = true;
        } else {
          let timeElapsed = (millis() - apartStartTime) / 1000; 
          if (timeElapsed >= 15 && !transitionTriggered) {
         
            transitionTriggered = true;
            this.sceneManager.showScene(ending); 
          }
        }
      } else {
        apartTimerActive = false;
        apartStartTime = null;
        transitionTriggered = false;
      }
     


//-------------------------------------------------------------buttons

    btnevent1 = lmverscheckButtonPress("Tasks", color(255),color(250, 163, 255),color(255),width/16,height-70,100,40,color(250, 163, 255),color(252, 225, 252),color(143, 49, 148));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( lrhelp );
    }

    btnevent4 = lmverscheckButtonPress("Kitchen",color(255),color(120,180,100),color(255),width/16,height-120,120,40,color(120,180,100),color(193, 247, 206),color(8, 92, 28));


    if (btnevent4) {   // main or next scene
      btnevent4 = false;
       this.sceneManager.showScene(kitchen);
    }

      
    }




  }

////////////////////////////// ENDING /////////////////

function ending() {
  let btnevent1 = false;
  let btnevent4 =false;

    this.setup = function()  {
        console.log("We are at setup for livingroom");

    }

    this.enter = function()
    {
     console.log("We are at entering for livingroom");
     
     cat.removeColliders();
     catc.removeColliders();
     catt.removeColliders();
     catw.removeColliders();
    
    
    mouse.visible = true;

     cat2.visible = false;
     cat.visible = false;
     catc.visible = false;
     catt.visible = false;
     catw.visible = false;
    
     
     if ( purr.isPlaying() ) {
      purr.stop();
   }
   if ( !chillb.isPlaying() ) {
    chillb.play();
 }

    }

    this.draw = function() {

      push();
      scale(1.1);
      image(endingimg,0,0);
      pop();

    push();
    textSize(45);
     strokeWeight(5);
     fill(12, 10, 87);
     text("and thats a glimpse into the life of CAT", width/2, 50);
     push();
     textFont(lf);
     stroke(12, 10, 87);
     textAlign(LEFT);
     textSize(24)
     fill(255);
     text("but that was only 4 different cats with 4 different quirks,", 30, 80);
     text("There are still many more cats out there to learn and love!", 30, 120);
     text("you just need to find them ;3", 30, 160);
    //  text("you will learn all the tricks of being a cat ;)", 30, 170);

     pop();



//-------------------------------------------------------------buttons

    btnevent1 = lmverscheckButtonPress("Replay", color(255),color(250, 163, 255),color(255),width/3,height-70,100,40,color(250, 163, 255),color(252, 225, 252),color(143, 49, 148));  
   
    if (btnevent1) { 
      btnevent1 = false;
      this.sceneManager.showScene( start );
    }


  }
}



  ///////////////////////////START PAGE HELP BUTTON///////////////////////////////////


function shelp() {

    this.setup = function()  {
        console.log("We are at setup for help");

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     cat.position.x =  width-50;
     cat.position.y =  height-50;
     cat.visible = true;
     cat.scale = 1.8
     cat2.visible = false;
     catc.visible = false;
     catt.visible = false;
     catw.visible = false;

     cat.addCollider();


    if ( !chillb.isPlaying() ) {
      chillb.play();
    }

      if ( purr.isPlaying() ) {
            purr.stop();
         }
   
    }

    this.draw = function() {

      if ( !chillb.isPlaying() ) {
        chillb.play();
      }
      push();
      scale(.33);
      image(helpimg,0,-140);
      pop();

      if ( cat.position.x == 576 ) {
        if ( cat.position.y == 301 ) {
      cat.changeAnimation("beg");
        }
      }

      if ( cat.mouse.hovering() ) {
        console.log("hover");
        cat.changeAnimation("dance");

      
     }  
     strokeWeight(5);
     fill(55, 140, 85);
     text("WELCOME TO life of CAT", width/2, 50);
     push();
     textFont(lf);
     stroke(55, 140, 85);
     textAlign(LEFT);
     textSize(24)
     fill(255);
     text("life of CAT is a chill simulation game where you learn cat quirks.", 30, 80);
     text("Each cat you meet will be different, some helpful, some naughty.", 30, 120);
     text("By the end of your time spent in this cozy house,", 30, 150);
     text("you will learn all the tricks of being a cat ;)", 30, 170);

     pop();
      
    



     if (cat.mouse.pressed()) {
      select.play();
    

       this.sceneManager.showScene( start );

     }  



        
    }
  }

  ////////////////////////////////////ROOM TASKS////////////////////////////////
function rhelp() {

    this.setup = function()  {
        console.log("We are at setup for help");

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     cat.position.x =  width-50;
     cat.position.y =  height-50;
     cat.visible = true;
     cat.scale = 1.8
     cat2.visible = false;
     catc.visible = false;
     catw.visible = false;
     catt.visible = false;

     cat.addCollider();


    if ( !chillb.isPlaying() ) {
      chillb.play();
    }

      if ( purr.isPlaying() ) {
            purr.stop();
         }
   
    }

    this.draw = function() {

      if ( !chillb.isPlaying() ) {
        chillb.play();
      }
      push();
      scale(.33);
      image(helpimg,0,-140);
      pop();

      if ( cat.position.x == 576 ) {
        if ( cat.position.y == 301 ) {
      cat.changeAnimation("beg");
        }
      }

      if ( cat.mouse.hovering() ) {
        console.log("hover");
        cat.changeAnimation("dance");

      
     }  
     strokeWeight(5);
     fill(55, 140, 85);
     text("WELCOME TO life of CAT", width/2, 50);
     push();
     textFont(lf);
     stroke(55, 140, 85);
     textAlign(LEFT);
     textSize(24)
     fill(255);
     text("life of CAT is a chill simulation game where you learn cat quirks.", 30, 80);
     text("Welcome to the Bedroom, to start:", 30, 120);
     text("+ Click on Dango to feed him!", 30, 150);
     text("+ Press the S key to let Dango rest on the bed,", 30, 170);
     text("and press the B key to have Dango play around in his favorite box.", 30, 190);
     pop();
      

     if (cat.mouse.pressed()) {
      select.play();
    

       this.sceneManager.showScene( room );

     }  



        
    }
  }

  /////////////////////////KITCHEN TASKS/////////////////////////////////////

function khelp() {

    this.setup = function()  {
        console.log("We are at setup for help");

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     cat.position.x =  width-50;
     cat.position.y =  height-50;
     cat.visible = true;
     cat.scale = 1.8
     cat2.visible = false;
     catc.visible = false;
     catt.visible = false;
     catw.visible = false;

     cat.addCollider();


    if ( !chillb.isPlaying() ) {
      chillb.play();
    }

      if ( purr.isPlaying() ) {
            purr.stop();
         }
   
    }

    this.draw = function() {

      if ( !chillb.isPlaying() ) {
        chillb.play();
      }
      push();
      scale(.33);
      image(helpimg,0,-140);
      pop();

      if ( cat.position.x == 576 ) {
        if ( cat.position.y == 301 ) {
      cat.changeAnimation("beg");
        }
      }

      if ( cat.mouse.hovering() ) {
        console.log("hover");
        cat.changeAnimation("dance");

      
     }  
     strokeWeight(5);
     fill(55, 140, 85);
     text("WELCOME TO life of CAT", width/2, 50);
     push();
     textFont(lf);
     stroke(55, 140, 85);
     textAlign(LEFT);
     textSize(24)
     fill(255);
     text("life of CAT is a chill simulation game where you learn cat quirks.", 30, 80);
     text("Welcome to the Kitchen. Keep Dango off the counter!.", 30, 120);
     text("+ Click and drag to move Dango away.", 30, 150);
     text("+ Use the Penelope to try and push him off the counter.", 30, 170);
     text("+ Penelope can be controlled using the arrow keys.", 30, 190);

     pop();
      
    

    //console.log(cat.position.x , cat.position.y)
    //cat.changeAnimation("loaf");

     if (cat.mouse.pressed()) {

      select.play();
    

       this.sceneManager.showScene( kitchen );

     }  



        
    }
  }

  /////////////////////////LIVING ROOM TASKS/////////////////////////////////////

function lrhelp() {

    this.setup = function()  {
        console.log("We are at setup for lm");

    }

    this.enter = function()
    {
     console.log("We are at entering for lm");
     cat.position.x =  width-50;
     cat.position.y =  height-50;
     cat.visible = true;
     cat.scale = 1.8
     cat2.visible = false;
     catc.visible = false;
     catt.visible = false;
     catw.visible = false;
     

     catt.removeColliders();
     catw.removeColliders();
     cat.addCollider();
     catc.removeColliders();

     mouse.visible = true;

    if ( !chillb.isPlaying() ) {
      chillb.play();
    }

      if ( purr.isPlaying() ) {
            purr.stop();
         }
   
    }

    this.draw = function() {

      if ( !chillb.isPlaying() ) {
        chillb.play();
      }
      push();
      scale(.33);
      image(helpimg,0,-140);
      pop();

      if ( cat.position.x == 576 ) {
        if ( cat.position.y == 301 ) {
      cat.changeAnimation("beg");
        }
      }

      if ( cat.mouse.hovering() ) {
        console.log("hover");
        cat.changeAnimation("dance");

      
     }  
     strokeWeight(5);
     fill(55, 140, 85);
     text("WELCOME TO life of CAT", width/2, 50);
     push();
     textFont(lf);
     stroke(55, 140, 85);
     textAlign(LEFT);
     textSize(24)
     fill(255);
     text("life of CAT is a chill simulation game where you learn cat quirks.", 30, 80);
     text("Welcome to the Living Room:", 30, 120);
     text("Looks like Lilly is feeling lonely, and Harry is feeling devious.", 30, 150);
     text("+ Keep Harry from coming into contact with Lilly for at 15 seconds.", 30, 170);
     text("+ The timer resets when you hear Lilly's meow.", 30, 190);

     pop();
      


    //console.log(cat.position.x , cat.position.y)
    //cat.changeAnimation("loaf");

     if (cat.mouse.pressed()) {

      select.play();
    

       this.sceneManager.showScene( livingroom );

     }  



        
    }
  }
   

  function lmverscheckButtonPress(str, tc, thc, dntc, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {
    let btnc = "";
    let textcolor = "";
  
    let isHovering = (mouseX > bx && mouseX < bx + boxW &&
                      mouseY > by && mouseY < by + boxH);
  
    if (!(str in hoverState)) {
      hoverState[str] = {
        hovered: false,
        wasPressed: false,
        clicked: false
      };
    }
  
    let btnState = hoverState[str];
  
    if (isHovering) {
      if (!btnState.hovered) {
        btnhover.play();
        btnState.hovered = true;
      }
    } else {
      btnState.hovered = false;
    }
  
    if (isHovering) {
      if (mouseIsPressed) {
        if (!btnState.wasPressed) {
          btnState.wasPressed = true;
        }
      } else {
        if (btnState.wasPressed) {
          btnState.clicked = true;
        }
        btnState.wasPressed = false;
      }
    } else {
      btnState.wasPressed = false;
    }
  
    if (isHovering) {
      stroke(255);
      if (mouseIsPressed) {
        btnc = dncolor;
        textcolor = dntc;
      } else {
        btnc = ovcolor;
        textcolor = thc;
      }
    } else {
      stroke(255);
      btnc = upcolor;
      textcolor = tc;
    }
  
    push();
    translate(bx, by);
    fill(btnc);
    rect(0, 0, boxW, boxH, 10);
    fill(textcolor);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    text(str, boxW / 2, 28);
    pop();
  
   
    if (btnState.clicked) {
      btnState.clicked = false;
      select.play(); 
      return true;
    }
  
    return false;
  }
 

function lmmew() {
  if ( !merow.isPlaying() ) {
    merow.play();
  } else {
     merow.stop();
 }


}