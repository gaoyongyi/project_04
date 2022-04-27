window.addEventListener('load', function () {
    var arrowl = document.querySelector('.main .focus .arrow-l');
    var arrowr = document.querySelector('.main .focus .arrow-r');
    var ol = document.querySelector('.main .focus ol');
    var focus = document.querySelector('.focus');
    var ul = document.querySelector('.main .focus ul');
    var main = document.querySelector('.main');
    var aside = document.querySelector('.aside');
    var top = document.querySelector('.top');
    var recom = document.querySelector('.recom');
    var live = document.querySelector('.live');
    var interest = document.querySelector('.interest');
    var floor = document.querySelector('.floor');
    var footer = document.querySelector('.footer');
    var itemss = document.querySelectorAll('.itemss');
    var al2 = document.querySelectorAll('.aside .fix ul a');
    var index = 0;
    var num = 0;
    var circle = 0;
    var srcoll = setInterval(function () {
        arrowr.click();
    }, 2000);
    focus.addEventListener('mouseenter', function () {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        ol.style.display = 'block';
        clearInterval(srcoll);
    })
    focus.addEventListener('mouseleave', function () {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        ol.style.display = 'none';
        srcoll = setInterval(function () {
            arrowr.click();
        }, 2000);
    })
    for (var i = 0; i < ul.children.length; i++) {
        var oli = document.createElement('li');
        ol.appendChild(oli);
    }
    // 左下角小圆圈功能
    ol.children[0].className = 'current';
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].setAttribute('data-index', i);
        ol.children[i].addEventListener('click', function () {
            for (j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
            }
            this.className = 'current';
            index = this.getAttribute('data-index');
            num = index;
            circle = index;
            animate(ul, -index * ul.children[0].offsetWidth);
        });
    }
    //动态的克隆第一张图片，这样小圆圈才不会因此而增加
    var lil = document.createElement('li');
    lil.innerHTML = '<a href="#"><img src="upload/图层179.png" alt=""></a>';
    ul.appendChild(lil);
    var flag = true;
    //右侧按钮的功能实现
    arrowr.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 3) {
                ul.style.left = 0 + 'px';
                num = 0;
            }
            num++;
            animate(ul, -num * ul.children[0].offsetWidth, function () {
                flag = true;
            });
            //按钮与小圆圈的互动
            circle++;
            if (circle == 3) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })
    var nasc = -ul.children.length * ul.children[0].offsetWidth; //这个为值为第四张图片到focus中所要的left值
    //左侧按钮的功能实现
    arrowl.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                ul.style.left = nasc + 'px';
                num = 3;
            }
            num--;
            animate(ul, -num * ul.children[0].offsetWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = 2;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    });
    //range为侧边栏为固定定位时距离浏览器可视区的上边距;注意固定定位的元素的left和top是参照浏览器的可视区的
    var range = $(".aside").offset().top - $(".main").offset().top;
    var flag2 = true;
    var footerset = $(".footer").offset().top - 2500;
    $(window).on('scroll', function () {
        //实现侧边栏随着页面滚动一段距离后不再滚动
        console.log($(document).scrollTop());
        if ($(document).scrollTop() >= $(".main").offset().top) {
            aside.style.position = 'fixed';//fixed以浏览器可视区为参照点
            aside.style.top = range + 'px';
        } else {
            aside.style.position = 'absolute';
            aside.style.top = range + $(".main").offset().top + 'px';
        }
        //页面滚动到一定位置对应的侧边栏应用的样式发生变化
        if ($(document).scrollTop() >= ($(".floor").offset().top)) {
            $(".top").css("display", "block");
        } else {
            $(".top").hide();
        }
        if (flag2) {
            $(".fix ul a").removeClass();
            $(".footers .itemss").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top - 300) {
                    $(".fix ul a").eq(i).addClass("bgc").parent().siblings().children().removeClass();
                }
            })
        }
        if ($(document).scrollTop() >= 2500) { 
            $(".fix ul a").eq(4).addClass("bgc").parent().siblings().children().removeClass();
        }
    });
    //点击侧边栏中的某个应用可实现页面滚动到该应用对应的区域
    $(".top").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        });
    })
    $(".fix ul li").on("click", function () {
        flag2 = false;
        $(this).children().addClass("bgc").parent().siblings().children().removeClass();
        var sums = $(".footers .itemss").eq($(this).index()).offset().top;
        $("html, body").stop().animate({
            scrollTop: sums - 299
        }, function () {
            flag2 = true;
        });
    })
});