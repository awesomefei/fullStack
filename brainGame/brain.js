var isAlive = true;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var paddleHeight = 20;
var paddleWidth = 85;
var paddlePosX = 200;
var paddlePosY = 230;
function drawBlock() {
    ctx.beginPath();
    ctx.rect(paddlePosX, paddlePosY, paddleWidth, paddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
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
function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}
window.addEventListener('load', function () {
    console.log("!!!!!");
    ctx.drawImage(hero, heroPostionX, heroPostionY);
    ctx.drawImage(burger, xb, yb);
    move();
    drawBlock();
});
document.addEventListener('keydown', function (e) {
    ctx.clearRect(heroPostionX, heroPostionY, 20, 20);
    console.log(heroPostionX, heroPostionY);
    switch (e.keyCode) {
        case 39:
            if (heroPostionX + iconSizeX < canvas.width) {
                heroPostionX += 20;
            }
            hero.style.left = heroPostionX + 'px';
            break;
        case 37:
            if (heroPostionX - iconSizeX >= 0) {
                heroPostionX -= 20;
            }
            hero.style.left = heroPostionX + 'px';
            break;
        case 40:
            if (heroPostionY + iconSizeY < canvas.height) {
                heroPostionY += 20;
            }
            hero.style.left = heroPostionY + 'px';
            break;
        case 38:
            if (heroPostionY - iconSizeY >= 0) {
                heroPostionY -= 20;
            }
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
