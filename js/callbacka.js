function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}

function animateY(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
        console.log(window.pageYOffset);
    }, 15)
}