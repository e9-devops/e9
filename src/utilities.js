function setBackgroundImage() {
    window.$('.background-image-holder').each(function () {
        var imgSrc = window.$(this).children('img').attr('src');
        window.$(this).css('background', 'url("' + imgSrc + '")');
        window.$(this).children('img').hide();
        window.$(this).css('background-position', 'initial');
    });

    setTimeout(function () {
        window.$('.background-image-holder').each(function () {
            window.$(this).addClass('animated fadeIn');
        });
    }, 200);
}

function scrollTo(section) {
    $('html, body').animate({scrollTop: $(section).offset().top}, 1000);
}

function scrollFix(objId, containerId, offset) {
    let obj = window.$(objId);
    let objTop = obj.offset().top;
    let objHeight = obj.height();
    let containerHeight = window.$(containerId).height();
    obj.width(obj.width());

    if (window.$(window).width() > 992) {
        window.$(window).scroll(function () {
            let currentScroll = window.$(window).scrollTop();
            if (currentScroll > objTop) {
                if (currentScroll > objTop + containerHeight - objHeight + offset) {
                    obj.css({
                        position: 'absolute',
                        top: containerHeight - objHeight + offset,
                    });
                } else {
                    obj.css({
                        position: 'fixed',
                        top: '0',
                    });
                }
            } else {
                obj.css({
                    position: 'static',
                });
            }
        });
    }
}

const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr];
    if (chunkSize <= 0) return cache;
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
};

function greet() {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c Made with ♥ by e9 %c \n', 'color: #fff; background: #D21D1C; padding:5px;border-radius:4px;font-family:"Avenir Next",sans-serif', ''];
        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('Made with love ♥ by e9');
    }
}

module.exports = {
    setBackgroundImage,
    scrollTo,
    scrollFix,
    chunk,
    greet,
};
