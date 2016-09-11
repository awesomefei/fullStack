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
  const ZOMBIE_START_POSITION_X = 100;
  const ZOMBIE_START_POSITION_Y = 100;
  var zombiePositionX = ZOMBIE_START_POSITION_X;
  var zombiePositionY = ZOMBIE_START_POSITION_Y;

  let burger = new Image();
  burger.src = "http://www.myiconfinder.com/uploads/iconsets/20-20-712c55fa0cd7192cafd33f43fb022ab9-burger.png";
  var xb = 100;
  var yb = 120;
  // when all images loaded, start drawing
  window.addEventListener('load', () => {
    console.log("!!!!!");
    move();
    ctx.drawImage(hero, heroPostionX, heroPostionY);
    ctx.drawImage(burger, xb,yb);
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
    if(heroPostionX == zombiePositionX &&  heroPostionY == zombiePositionY){
      ctx.drawImage(zombie, zombiePositionX, zombiePositionY);
      console.log("dead");
      alert("You are dead! Game over!");
      isAlive = false;

    }else{
      if(isAlive){
          ctx.drawImage(hero, heroPostionX, heroPostionY);
      }

    }

  });

  //var x = canvas.width / 2;
  //var y = canvas.height - 20;
  var dx = 20;
  var dy = -20;

  function drawZombie() {

      // drawing code
      ctx.beginPath();

      ctx.drawImage(zombie,zombiePositionX,zombiePositionY);
      ctx.closePath();
      console.log("drawZombie");
}

function draw(){
    ctx.clearRect(zombiePositionX, zombiePositionY, zombiePositionX+20, zombiePositionY+20);

     if(zombiePositionX + dx > canvas.width - 20 || zombiePositionX + dx < 20){
       dx = -dx;
     }
     if(zombiePositionY + dy > canvas.height - 20 || zombiePositionY + dy < 20){
       dy = -dy;
     }
     zombiePositionX += dx;
     zombiePositionY += dy;
    // console.log("draw");
     drawZombie();
}

function move(){
  draw();
  setInterval(draw, 1000);
  console.log("move");
}
