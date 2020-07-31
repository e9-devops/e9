(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-961c8896'],
    {
        '16ab': function (e, t, a) {
            'use strict';
            a.r(t);
            var i = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i(
                        'div',
                        [
                            i('PageCover', {attrs: {'img-url': e.logoUrl, desc: e.pageDesc}}, [
                                i('div', {staticClass: 'col-lg-10 offset-lg-1 mt-5 mb-2 mt-lg-0 mb-lg-0'}, [
                                    i('div', {attrs: {id: 'deliveryAnim', 'data-aos': 'lottie', 'data-aos-id': 'delivery-anim', 'data-aos-mirror': 'true'}}),
                                ]),
                            ]),
                            e._m(0),
                            i(
                                'section',
                                {staticClass: 'slider-container'},
                                [
                                    i('VueSlickCarousel', e._b({staticClass: 'slick-center-mode pb-5 pb-xl-6'}, 'VueSlickCarousel', e.settings, !1), [
                                        i('div', [i('img', {attrs: {src: a('9f73'), alt: ''}})]),
                                        i('div', [i('img', {attrs: {src: a('2835'), alt: ''}})]),
                                        i('div', [i('img', {attrs: {src: a('02bb'), alt: ''}})]),
                                    ]),
                                ],
                                1
                            ),
                            i('NextCase', {staticClass: 'pt-5 pt-lg-4', attrs: {name: 'Ontraccs', link: '/case-studies/ontraccs'}}),
                        ],
                        1
                    );
                },
                s = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            i = e._self._c || t;
                        return i('section', {staticClass: 'brand-light-bg height-60 d-flex align-items-center imagebg justify-content-center'}, [
                            i('div', {staticClass: 'col-md-10 col-lg-8'}, [i('img', {staticStyle: {width: '100%'}, attrs: {src: a('a046'), alt: ''}})]),
                        ]);
                    },
                ],
                n = a('c5cf'),
                o = a('5c62'),
                r = a('a7ab'),
                l = a.n(r),
                c = {
                    name: 'CitySprintView',
                    components: {PageCover: o['a'], NextCase: n['a'], VueSlickCarousel: l.a},
                    data: function () {
                        return {
                            logoUrl: 'services/software/citysprint/logo.png',
                            pageDesc: 'e9 worked with CitySprint to develop a live GPS tracking medical patient specimen and samples solution called PathTrak.',
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
                    mounted: function () {
                        var e = this.$lottie.loadAnimation({
                            container: document.getElementById('deliveryAnim'),
                            renderer: 'svg',
                            loop: !0,
                            autoplay: !1,
                            animationData: a('28cd'),
                            rendererSettings: {progressiveLoad: !0},
                        });
                        e.setSpeed(3),
                        e.setSubframe(!1),
                        document.addEventListener('aos:in:delivery-anim', function () {
                            e.play();
                        }),
                        document.addEventListener('aos:out:delivery-anim', function () {
                            e.pause();
                        });
                    },
                    metaInfo: function () {
                        return {
                            title: 'CitySprint | software and app case study - e9',
                            meta: [
                                {
                                    name: 'description',
                                    content:
                                        'The challenges were resolved by e9 via web and app-based solutions, including live GPS tracking and a functional portal with a full audit trail called PathTrak',
                                },
                                {name: 'keywords', content: 'case, study, citysprint, app, development, software'},
                            ],
                        };
                    },
                },
                d = c,
                p = (a('e8e1'), a('2877')),
                u = Object(p['a'])(d, i, s, !1, null, '3a3dd192', null);
            t['default'] = u.exports;
        },
        c268: function (e, t, a) {},
        e8e1: function (e, t, a) {
            'use strict';
            var i = a('c268'),
                s = a.n(i);
            s.a;
        },
    },
]);
