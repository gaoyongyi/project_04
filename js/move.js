function move(obj, objparent) {
    var startX = 0,
        startY = 0;
    var moveX = 0,
        moveY = 0;
    var x = 0,
        y = 0;
    obj.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
        x = this.offsetLeft;
        y = this.offsetTop;
    });
    obj.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        moveY = e.targetTouches[0].pageY - startY;
        var leftX = moveX + x;
        var topY = moveY + y;
        if (leftX < 0) {
            leftX = 0;
        } else if (leftX > objparent.clientWidth - obj.clientWidth) {
            leftX = objparent.clientWidth - obj.clientWidth;
        }
        if (topY < 0) {
            topY = 0;
        } else if (topY > objparent.clientHeight - obj.clientHeight) {
            topY = objparent.clientHeight - obj.clientHeight;
        }
        div.style.left = leftX + 'px';
        div.style.top = topY + 'px';
        e.preventDefault();
    })
}