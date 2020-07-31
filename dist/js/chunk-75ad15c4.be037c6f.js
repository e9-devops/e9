(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-75ad15c4'],
    {
        '1a67': function (t, e, i) {},
        6650: function (t, e, i) {},
        7182: function (t, e, i) {
            'use strict';
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i('div', {staticClass: 'brand-img-wrapper', style: t.style()}, [
                        i('img', {attrs: {src: t.getImgPath(), width: t.imgWidth, alt: '', 'data-aos': t.animation, 'data-aos-once': 'true', 'data-aos-anchor-placement': 'center-bottom'}}),
                    ]);
                },
                s = [],
                r = {
                    name: 'BrandImageBlock',
                    props: {
                        color: {type: String, default: '#D21D1C'},
                        imgUrl: {type: String, required: !0},
                        imgAlign: {type: String, default: 'center'},
                        imgWidth: {type: String},
                        animation: {type: String},
                        height: {type: String},
                    },
                    methods: {
                        style: function () {
                            var t = {};
                            return (
                                (t['background-color'] = this.color),
                                (t['height'] = this.height),
                                'center' == this.imgAlign ? (t['justify-content'] = 'center') : 'right' == this.imgAlign && (t['justify-content'] = 'flex-end'),
                                t
                            );
                        },
                        getImgPath: function () {
                            return this.imgUrl ? i('7584')('./'.concat(this.imgUrl)) : '';
                        },
                    },
                },
                a = r,
                o = (i('8c56'), i('2877')),
                c = Object(o['a'])(a, n, s, !1, null, '07de44cc', null);
            e['a'] = c.exports;
        },
        8715: function (t, e, i) {
            'use strict';
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i(
                        'div',
                        {staticClass: 'slider-container'},
                        [
                            i('div', {staticClass: 'container slider-bg'}, [i('div', {staticClass: 'brand-images-wrapper', style: {'background-color': t.color}})]),
                            i(
                                'VueSlickCarousel',
                                t._b({}, 'VueSlickCarousel', t.settings, !1),
                                t._l(t.imgArray, function (e, n) {
                                    return i('div', {key: n, staticClass: 'slider-img-wrapper'}, [i('img', {attrs: {src: t.getImgPath(e), alt: ''}}), i('div', {staticClass: 'img-shadow'})]);
                                }),
                                0
                            ),
                        ],
                        1
                    );
                },
                s = [],
                r = i('a7ab'),
                a = i.n(r),
                o = {
                    name: 'BrandImageSlider',
                    props: {color: {type: String, default: '#D21D1C'}, imgArray: {type: Array, required: !0}},
                    components: {VueSlickCarousel: a.a},
                    data: function () {
                        return {
                            settings: {
                                centerMode: !0,
                                centerPadding: '20px',
                                dots: !0,
                                dotsClass: 'slick-dots white-dots',
                                edgeFriction: 0.35,
                                infinite: !0,
                                speed: 800,
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                cssEase: 'ease-in-out',
                                responsive: [
                                    {breakpoint: 1366, settings: {slidesToShow: 1, slidesToScroll: 1, centerPadding: '60px'}},
                                    {breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1, centerPadding: '50px'}},
                                    {breakpoint: 375, settings: {slidesToShow: 1, slidesToScroll: 1, centerPadding: '20px'}},
                                ],
                            },
                        };
                    },
                    methods: {
                        getImgPath: function (t) {
                            return t ? i('7584')('./'.concat(t)) : '';
                        },
                    },
                },
                c = o,
                l = (i('eb4e'), i('2877')),
                d = Object(l['a'])(c, n, s, !1, null, 'ec19cb6e', null);
            e['a'] = d.exports;
        },
        '8c56': function (t, e, i) {
            'use strict';
            var n = i('1a67'),
                s = i.n(n);
            s.a;
        },
        eb4e: function (t, e, i) {
            'use strict';
            var n = i('6650'),
                s = i.n(n);
            s.a;
        },
    },
]);
