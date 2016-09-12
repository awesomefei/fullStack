console.log("!!!!!");

// class Character{
//   x:number;
//   y:number;
//   resizeImage(){
//     var imageSize = {width:0, height:0};
//
//   }
// }
// console.log(typeof(Character));
// class Hero extends Character{
//   heroPostionX= this.x;
//   heroPostionY = this.y;
//
// }
// class Zombie extends Character{
//
// }
//
// class Block extends Character{
//
// }
  var isAlive = true;
  let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
  let ctx = canvas.getContext("2d");

  console.log("~~~~~~");
  console.log(document.getElementById('myCanvas').clientWidth);
  console.log(document.getElementById('myCanvas').clientHeight);

  ctx.canvas.width = document.getElementById('myCanvas').clientWidth;
  ctx.canvas.height = document.getElementById('myCanvas').clientHeight;

  // get zombie image
  let hero = new Image();
  hero.src = "http://psnprofiles.com/forums/public/style_emoticons/default/tongue.png";
  var heroPostionX = 0;
  var heroPostionY = 0;

  let zombie = new Image();
  zombie.src = "http://forum.reapermini.com/public/style_emoticons/default/zombie13.gif";
  const ZOMBIE_START_POSITION_X =canvas.width / 2 ;
  const ZOMBIE_START_POSITION_Y = canvas.height-20;
  var zombiePositionX = ZOMBIE_START_POSITION_X;
  var zombiePositionY = ZOMBIE_START_POSITION_Y;

  let burger = new Image();
  burger.src = "http://www.myiconfinder.com/uploads/iconsets/20-20-712c55fa0cd7192cafd33f43fb022ab9-burger.png";
  var xb = 100;
  var yb = 120;
  // when all images loaded, start drawing
  window.addEventListener('load', () => {
    console.log("!!!!!");
    ctx.drawImage(hero, heroPostionX, heroPostionY);
    ctx.drawImage(burger, xb,yb);
    move();
  });

  document.addEventListener('keydown', function (e:any){
    ctx.clearRect(heroPostionX, heroPostionY, 20, 20);
    console.log(heroPostionX, heroPostionY)
    switch(e.keyCode){
      case 39:
        heroPostionX+=20;
        hero.style.left = heroPostionX + 'px';
        break;
      case 37:
        heroPostionX-=20;
        hero.style.left = heroPostionX + 'px';
        break;
      case 40:
        heroPostionY+=20;
        hero.style.left = heroPostionY + 'px';
        break;
      case 38:
        heroPostionY-=20;
        hero.style.left = heroPostionY + 'px';
        break;
    }
    console.log("hero position: " + heroPostionX + "," + heroPostionY);
    if(Math.abs(heroPostionX - zombiePositionX) <= iconSizeX / 2
      && Math.abs(heroPostionY - zombiePositionY) <= iconSizeY / 2) {
      ctx.drawImage(zombie, zombiePositionX, zombiePositionY);
      console.log("dead");
      alert("You are dead! Game over!");
      isAlive = false;

    }else{
     console.log("tmd zombie " + zombiePositionX + "," + zombiePositionY);
     console.log("tmd hero " + heroPostionX + ", " + heroPostionY);

      console.log("tmd");
      if(isAlive){
          ctx.drawImage(hero, heroPostionX, heroPostionY);
      }

    }

  });

  //var x = canvas.width / 2;
  //var y = canvas.height - 20;
  const iconSizeX = 20;
  const iconSizeY = 20;

  function drawZombie() {

      // drawing code
      ctx.beginPath();

      ctx.drawImage(zombie,zombiePositionX,zombiePositionY);
      ctx.closePath();
      console.log("drawZombie");
}

function draw(){
    ctx.clearRect(zombiePositionX, zombiePositionY, zombiePositionX+20, zombiePositionY+20);


     switch(Math.floor(Math.random()*4)){
       case 0:
        if (zombiePositionX + iconSizeX >= canvas.width){
          zombiePositionX -= iconSizeX;
        }else{
            zombiePositionX += iconSizeX;
        }
        break;
      case 1:
        if(zombiePositionX  <= 0){
          zombiePositionX += iconSizeX;
        }else{
          zombiePositionX -= iconSizeX;
        }
        break;
      case 2:
      if(zombiePositionY + iconSizeY >= canvas.height ){
        zombiePositionY -= iconSizeY;
      }else{
        zombiePositionY += iconSizeY;
      }

        break;
      case 3:
      if(zombiePositionY  <= 0){
        zombiePositionY += iconSizeY;
      }else{
        zombiePositionY -= iconSizeY;
      }
        break;

     }
    // console.log("draw");
    if(isAlive){
     drawZombie();
   }
}

function move(){
  draw();
  setInterval(draw, 1000);
  console.log("move");
}
