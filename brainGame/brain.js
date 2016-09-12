console.log("!!!!!");
var isAlive = true;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
console.log("~~~~~~");
console.log(document.getElementById('myCanvas').clientWidth);
console.log(document.getElementById('myCanvas').clientHeight);
ctx.canvas.width = document.getElementById('myCanvas').clientWidth;
ctx.canvas.height = document.getElementById('myCanvas').clientHeight;
var hero = new Image();
hero.src = "http://psnprofiles.com/forums/public/style_emoticons/default/tongue.png";
var heroPostionX = 0;
var heroPostionY = 0;
var zombie = new Image();
zombie.src = "http://forum.reapermini.com/public/style_emoticons/default/zombie13.gif";
var ZOMBIE_START_POSITION_X = canvas.width / 2;
var ZOMBIE_START_POSITION_Y = canvas.height - 20;
var zombiePositionX = ZOMBIE_START_POSITION_X;
var zombiePositionY = ZOMBIE_START_POSITION_Y;
var burger = new Image();
burger.src = "http://www.myiconfinder.com/uploads/iconsets/20-20-712c55fa0cd7192cafd33f43fb022ab9-burger.png";
var xb = 100;
var yb = 120;
window.addEventListener('load', function () {
    console.log("!!!!!");
    ctx.drawImage(hero, heroPostionX, heroPostionY);
    ctx.drawImage(burger, xb, yb);
    move();
});
document.addEventListener('keydown', function (e) {
    ctx.clearRect(heroPostionX, heroPostionY, 20, 20);
    console.log(heroPostionX, heroPostionY);
    switch (e.keyCode) {
        case 39:
            heroPostionX += 20;
            hero.style.left = heroPostionX + 'px';
            break;
        case 37:
            heroPostionX -= 20;
            hero.style.left = heroPostionX + 'px';
            break;
        case 40:
            heroPostionY += 20;
            hero.style.left = heroPostionY + 'px';
            break;
        case 38:
            heroPostionY -= 20;
            hero.style.left = heroPostionY + 'px';
            break;
    }
    console.log("hero position: " + heroPostionX + "," + heroPostionY);
    if (Math.abs(heroPostionX - zombiePositionX) <= iconSizeX / 2
        && Math.abs(heroPostionY - zombiePositionY) <= iconSizeY / 2) {
        ctx.drawImage(zombie, zombiePositionX, zombiePositionY);
        console.log("dead");
        alert("You are dead! Game over!");
        isAlive = false;
    }
    else {
        console.log("tmd zombie " + zombiePositionX + "," + zombiePositionY);
        console.log("tmd hero " + heroPostionX + ", " + heroPostionY);
        console.log("tmd");
        if (isAlive) {
            ctx.drawImage(hero, heroPostionX, heroPostionY);
        }
    }
});
var iconSizeX = 20;
var iconSizeY = 20;
function drawZombie() {
    ctx.beginPath();
    ctx.drawImage(zombie, zombiePositionX, zombiePositionY);
    ctx.closePath();
    console.log("drawZombie");
}
function draw() {
    ctx.clearRect(zombiePositionX, zombiePositionY, zombiePositionX + 20, zombiePositionY + 20);
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            if (zombiePositionX + iconSizeX >= canvas.width) {
                zombiePositionX -= iconSizeX;
            }
            else {
                zombiePositionX += iconSizeX;
            }
            break;
        case 1:
            if (zombiePositionX <= 0) {
                zombiePositionX += iconSizeX;
            }
            else {
                zombiePositionX -= iconSizeX;
            }
            break;
        case 2:
            if (zombiePositionY + iconSizeY >= canvas.height) {
                zombiePositionY -= iconSizeY;
            }
            else {
                zombiePositionY += iconSizeY;
            }
            break;
        case 3:
            if (zombiePositionY <= 0) {
                zombiePositionY += iconSizeY;
            }
            else {
                zombiePositionY -= iconSizeY;
            }
            break;
    }
    if (isAlive) {
        drawZombie();
    }
}
function move() {
    draw();
    setInterval(draw, 1000);
    console.log("move");
}
