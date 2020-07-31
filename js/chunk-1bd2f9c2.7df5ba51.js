(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-1bd2f9c2'],
    {
        '98b6': function (e, t, s) {
            'use strict';
            s.r(t);
            var n = function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n(
                        'div',
                        [
                            n('PageCover', {attrs: {'img-url': e.logoUrl, desc: e.pageDesc}}, [n('img', {staticClass: 'mt-6 mt-lg-0', attrs: {src: s('3e84'), alt: ''}})]),
                            e._m(0),
                            n(
                                'section',
                                {staticClass: 'slider-container'},
                                [
                                    n('VueSlickCarousel', e._b({staticClass: 'slick-center-mode pb-5 pb-xl-6'}, 'VueSlickCarousel', e.settings, !1), [
                                        n('div', [n('img', {attrs: {src: s('4858'), alt: ''}})]),
                                        n('div', [n('img', {attrs: {src: s('9156'), alt: ''}})]),
                                        n('div', [n('img', {attrs: {src: s('edb8'), alt: ''}})]),
                                    ]),
                                ],
                                1
                            ),
                            n('NextCase', {attrs: {name: 'Sherbet Ride', link: '/case-studies/sherbet-ride'}}),
                        ],
                        1
                    );
                },
                a = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n('section', {staticClass: 'p-0 pt-lg-6 pt-xl-0'}, [n('img', {staticClass: 'w-100', attrs: {src: s('85d2'), alt: ''}})]);
                    },
                ],
                i = s('c5cf'),
                r = s('5c62'),
                o = s('a7ab'),
                c = s.n(o),
                l = {
                    name: 'Ontraccs',
                    components: {PageCover: r['a'], NextCase: i['a'], VueSlickCarousel: c.a},
                    data: function () {
                        return {
                            logoUrl: 'services/software/reps-uk/logo.png',
                            pageDesc:
                                'Working with airport concierge partners, e9 has developed a secure, flexible, and easy to use operational platform to manage and ensure VIP air traveller requirements are met.',
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
                    metaInfo: function () {
                        return {
                            title: 'Reps UK | software and app case study - e9',
                            meta: [
                                {
                                    name: 'description',
                                    content:
                                        'Reps UK needed to store vital and sensitive booking information on a powerful system which included tracking finances and different levels of service offering in their concierge service',
                                },
                                {name: 'keywords', content: 'case, study, repsuk, reps, uk, development, software, financial, finances, data, sensitive'},
                            ],
                        };
                    },
                },
                d = l,
                p = (s('fe6b'), s('2877')),
                u = Object(p['a'])(d, n, a, !1, null, '1c060332', null);
            t['default'] = u.exports;
        },
        c6bc: function (e, t, s) {},
        fe6b: function (e, t, s) {
            'use strict';
            var n = s('c6bc'),
                a = s.n(n);
            a.a;
        },
    },
]);
