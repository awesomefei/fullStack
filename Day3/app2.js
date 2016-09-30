document.addEventListener('keydown', function (e) {
    if (e.keyCode == 39) {
        ctx.clearRect(xh, yh, 16, 22);
        xh += 4;
        img.style.left = xh + 'px';
        ctx.drawImage(img, xh, yh);
    }
    if (e.keyCode == 37) {
        ctx.clearRect(xh, yh, 16, 22);
        xh -= 4;
        img.style.left = xh + 'px';
        ctx.drawImage(img, xh, yh);
    }
    if (e.keyCode == 40) {
        ctx.clearRect(xh, yh, 16, 22);
        yh += 4;
        img.style.left = yh + 'px';
        ctx.drawImage(img, xh, yh);
    }
    if (e.keyCode == 38) {
        ctx.clearRect(xh, yh, 16, 22);
        yh -= 4;
        img.style.left = yh + 'px';
        ctx.drawImage(img, xh, yh);
    }
});
