(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-73799d4b'],
    {
        '09e6': function (e, t, s) {
            'use strict';
            s.r(t);
            var a = function () {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a(
                        'div',
                        [
                            a('PageCover', {attrs: {'img-url': e.logoUrl, desc: e.pageDesc}}, [a('img', {staticClass: 'mt-6 mt-lg-0', attrs: {src: s('277b0'), alt: ''}})]),
                            a(
                                'section',
                                {staticClass: 'brand-light-bg slider-container'},
                                [
                                    a('VueSlickCarousel', e._b({staticClass: 'slick-center-mode pb-5 pb-xl-6'}, 'VueSlickCarousel', e.settings, !1), [
                                        a('div', [a('img', {attrs: {src: s('a233'), alt: ''}})]),
                                        a('div', [a('img', {attrs: {src: s('c902'), alt: ''}})]),
                                        a('div', [a('img', {attrs: {src: s('c36d'), alt: ''}})]),
                                    ]),
                                ],
                                1
                            ),
                            a('NextCase', {staticClass: 'pt-5 pt-lg-6', attrs: {name: 'Cab9', link: '/case-studies/cab9'}}),
                        ],
                        1
                    );
                },
                n = [],
                o = s('c5cf'),
                i = s('5c62'),
                r = s('a7ab'),
                c = s.n(r),
                l = {
                    name: 'Ontraccs',
                    components: {PageCover: i['a'], NextCase: o['a'], VueSlickCarousel: c.a},
                    data: function () {
                        return {
                            logoUrl: 'services/software/itv/logo.png',
                            pageDesc:
                                'Working with ITV on the reboot of the ‘Dancing on Ice’ production, e9 developed a seamless interface to connect taxi requirements with a range of ground transportation service providers. An easy-to-use platform and range of booking, passenger and driver apps were created to ensure talent and staff movements were tracked to avoid production delay costs.',
                            settings: {
                                centerMode: !0,
                                centerPadding: '400px',
                                dots: !0,
                                dotsClass: 'slick-dots',
                                infinite: !0,
                                speed: 800,
                                slidesToShow: 1,
                                responsive: [
                                    {breakpoint: 1367, settings: {slidesToShow: 1, centerPadding: '250px'}},
                                    {breakpoint: 1024, settings: {slidesToShow: 1, centerPadding: '60px'}},
                                    {breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1, centerPadding: '10px'}},
                                    {breakpoint: 375, settings: {slidesToShow: 1, slidesToScroll: 1, centerPadding: '10px'}},
                                ],
                            },
                        };
                    },
                },
                d = l,
                g = (s('c8ac'), s('2877')),
                p = Object(g['a'])(d, a, n, !1, null, '2b4b249a', null);
            t['default'] = p.exports;
        },
        a103: function (e, t, s) {},
        c8ac: function (e, t, s) {
            'use strict';
            var a = s('a103'),
                n = s.n(a);
            n.a;
        },
    },
]);
