(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-3205b56a'],
    {
        '0075': function (e, t, a) {
            var s = {
                './accountable.svg': '42e4',
                './animat-customize.gif': 'fdd4',
                './animat-customize.png': 'daf3',
                './animat-lightbulb.gif': 'f3f4',
                './animat-lightbulb.png': 'e9e1',
                './animat-linechart.gif': 'faab',
                './animat-linechart.png': '0a9a',
                './close.svg': '0572',
                './deployment.png': 'ad71',
                './design.png': 'cb40',
                './development.png': 'd2f1',
                './discovery.png': '9da5',
                './e9-marker.png': 'c2a3',
                './e9-marker.svg': 'cfc6',
                './facebook.svg': '8b07',
                './fire.svg': '8a93',
                './instagram.svg': '07fb',
                './laugh.svg': 'a4e5',
                './learning.svg': '25a0',
                './left-arrow.png': '9bbb',
                './linkedin.svg': '277b',
                './question.svg': '40d9',
                './right-arrow.png': '2ab9',
                './right.svg': '8055',
                './testing.png': '37ac',
                './tumblr.svg': '8ea1',
                './typing.svg': '25ef',
            };
            function i(e) {
                var t = n(e);
                return a(t);
            }
            function n(e) {
                if (!a.o(s, e)) {
                    var t = new Error('Cannot find module \'' + e + '\'');
                    throw ((t.code = 'MODULE_NOT_FOUND'), t);
                }
                return s[e];
            }
            (i.keys = function () {
                return Object.keys(s);
            }),
            (i.resolve = n),
            (e.exports = i),
            (i.id = '0075');
        },
        '7d6e': function (e, t, a) {
            'use strict';
            a.r(t);
            var s,
                i = function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'div',
                        [
                            s('PageCover', {attrs: {title: e.pageTitle, desc: e.pageDesc}}, [
                                s('div', {attrs: {id: 'appAnim', 'data-aos': 'lottie', 'data-aos-id': 'app-anim', 'data-aos-mirror': 'true'}}),
                            ]),
                            s('section', {staticClass: 'text-center pt-0 pb-0'}, [
                                s('div', {staticClass: 'container'}, [
                                    e._m(0),
                                    s('div', {attrs: {'data-aos': 'fade', 'data-aos-id': 'devProcess', 'data-aos-once': 'true'}}, [
                                        s('div', {staticClass: 'row justify-content-between'}, [
                                            s('div', {staticClass: 'col-xl-6 d-lg-flex justify-content-start'}, [
                                                s('div', {staticClass: 'process'}, [
                                                    s('div', {staticClass: 'process-wrapper'}, [
                                                        s('svg', {attrs: {width: '150px', height: '300px', viewBox: '0 0 150 300'}}, [
                                                            s('g', {attrs: {id: 'Page-1', stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd'}}, [
                                                                s('path', {
                                                                    attrs: {d: 'M0,1 C82.2904277,1 149,67.7095723 149,150 C149,232.290428 82.2904277,299 0,299', id: 'Shape', stroke: '#979797'},
                                                                }),
                                                            ]),
                                                        ]),
                                                        e._m(1),
                                                        s('ul', {staticClass: 'features'}, [
                                                            s('li', {staticClass: 'start'}),
                                                            s(
                                                                'li',
                                                                {
                                                                    staticClass: 'feature',
                                                                    class: 0 == e.curSlide ? 'active-slide' : '',
                                                                    on: {
                                                                        click: function (t) {
                                                                            return e.goToSlide(0);
                                                                        },
                                                                    },
                                                                },
                                                                [e._m(2)]
                                                            ),
                                                            s(
                                                                'li',
                                                                {
                                                                    staticClass: 'feature',
                                                                    class: 1 == e.curSlide ? 'active-slide' : '',
                                                                    on: {
                                                                        click: function (t) {
                                                                            return e.goToSlide(1);
                                                                        },
                                                                    },
                                                                },
                                                                [e._m(3)]
                                                            ),
                                                            s(
                                                                'li',
                                                                {
                                                                    staticClass: 'feature',
                                                                    class: 2 == e.curSlide ? 'active-slide' : '',
                                                                    on: {
                                                                        click: function (t) {
                                                                            return e.goToSlide(2);
                                                                        },
                                                                    },
                                                                },
                                                                [e._m(4)]
                                                            ),
                                                            s(
                                                                'li',
                                                                {
                                                                    staticClass: 'feature',
                                                                    class: 3 == e.curSlide ? 'active-slide' : '',
                                                                    on: {
                                                                        click: function (t) {
                                                                            return e.goToSlide(3);
                                                                        },
                                                                    },
                                                                },
                                                                [e._m(5)]
                                                            ),
                                                            s(
                                                                'li',
                                                                {
                                                                    staticClass: 'feature',
                                                                    class: 4 == e.curSlide ? 'active-slide' : '',
                                                                    on: {
                                                                        click: function (t) {
                                                                            return e.goToSlide(4);
                                                                        },
                                                                    },
                                                                },
                                                                [e._m(6)]
                                                            ),
                                                            s('li', {staticClass: 'end'}),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]),
                                            s('div', {staticClass: 'col-xl-5 offset-xl-0 col-sm-10 offset-sm-1'}, [
                                                s(
                                                    'div',
                                                    {attrs: {id: 'process-stages-slider'}},
                                                    [
                                                        s(
                                                            'VueSlickCarousel',
                                                            e._b(
                                                                {ref: 'carousel', staticClass: 'mb-10 mb-xl-0', on: {beforeChange: e.beforeSlideChange, afterChange: e.afterSlideChange}},
                                                                'VueSlickCarousel',
                                                                e.sliderSettings,
                                                                !1
                                                            ),
                                                            e._l(e.processSlides, function (e, t) {
                                                                return s('div', {key: e.name, staticClass: 'process-stage-text', style: {'background-image': 'url(' + a('0075')('./' + e.img) + ')'}}, [
                                                                    s('p', {staticClass: 'emphasis text-xl-center', attrs: {id: 'process-' + t}}),
                                                                ]);
                                                            }),
                                                            0
                                                        ),
                                                    ],
                                                    1
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            s('section', {staticClass: 'pt-0 pt-xl-10'}, [
                                s('div', {staticClass: 'container text-center'}, [
                                    s(
                                        'div',
                                        {staticClass: 'row justify-content-center'},
                                        [
                                            s('router-link', {staticClass: 'd-flex align-items-center justify-content-center next-arrow', attrs: {to: '/case-studies'}}, [
                                                s('h3', {staticClass: 'font-weight-demi'}, [e._v('Case Studies')]),
                                                s('p', {staticClass: 't-xl pl-3'}, [s('i', {staticClass: 'fa fa-angle-right', attrs: {'aria-hidden': 'true'}})]),
                                            ]),
                                        ],
                                        1
                                    ),
                                ]),
                            ]),
                        ],
                        1
                    );
                },
                n = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            a = e._self._c || t;
                        return a('div', {staticClass: 'row justify-content-center mb-0 mb-md-6 mb-lg-8'}, [
                            a('div', {staticClass: 'col-lg-10 offset-lg-1 text-center'}, [
                                a('h2', [e._v('e9\'s Development Approach')]),
                                a('p', [
                                    e._v(
                                        ' The approach of E9 towards app and software development lays strong emphasis on scoping and understanding both the functional and non-functional specifications of the project. The form of our applications is highly derived from the functionality they serve which controls the overall design of the application.'
                                    ),
                                    a('br'),
                                    a('br'),
                                    e._v(
                                        ' Back-end and front-end developers work together so that development runs smoothly from start to finish, and we push boundaries to the brink in order to build the optimal software your business requires. '
                                    ),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('div', {staticClass: 'center'}, [
                            s('div', {staticClass: 'circle circle-1'}, [s('img', {attrs: {src: a('9d64')}})]),
                            s('div', {staticClass: 'circle circle-2'}),
                            s('div', {staticClass: 'circle circle-3'}),
                        ]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('div', [s('div', {staticClass: 'feature-icon'}, [s('img', {attrs: {src: a('9da5')}})]), s('div', {staticClass: 'feature-text'}, [e._v('Discovery')])]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('div', [s('div', {staticClass: 'feature-icon'}, [s('img', {attrs: {src: a('cb40')}})]), s('div', {staticClass: 'feature-text'}, [e._v('Design')])]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('div', [s('div', {staticClass: 'feature-icon'}, [s('img', {attrs: {src: a('d2f1')}})]), s('div', {staticClass: 'feature-text'}, [e._v('Development')])]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('div', [s('div', {staticClass: 'feature-icon'}, [s('img', {attrs: {src: a('37ac')}})]), s('div', {staticClass: 'feature-text'}, [e._v('Testing')])]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('div', [s('div', {staticClass: 'feature-icon'}, [s('img', {attrs: {src: a('ad71')}})]), s('div', {staticClass: 'feature-text'}, [e._v('Deployment')])]);
                    },
                ],
                r = a('a7ab'),
                o = a.n(r),
                c = a('1209'),
                l = a('5c62'),
                d = null,
                u = {
                    name: 'SoftwareApp',
                    components: {VueSlickCarousel: o.a, PageCover: l['a']},
                    data: function () {
                        return {
                            pageTitle: 'Software and App Development',
                            pageDesc:
                                'Whether it be building from scratch or remodelling something pre-existing, our development team are here to create something extraordinary. <br /><br />We offer a wide range of development services so as to achieve maximum outreach potential and take your business further, which include mobile app development, web development, digital product design and much more.',
                            processSlides: [
                                {
                                    name: 'Discovery',
                                    img: 'discovery.png',
                                    text: 'We always start with building a relationship with you. With a user centric approach, we then learn about your business challenges, goals and needs.',
                                },
                                {
                                    name: 'Design',
                                    img: 'design.png',
                                    text: 'We leverage user stories, required business outcomes and a wealth of technology expertise, to design modern and capable systems for you. ',
                                },
                                {
                                    name: 'Development',
                                    img: 'development.png',
                                    text: 'Our development teams focus heavily on the beauty of the architecture, ensuring the overall solution is robust, efficient and pleasurable.',
                                },
                                {
                                    name: 'Testing',
                                    img: 'testing.png',
                                    text: 'End to end testing is carried out by our handpicked project managers and their team. Each module is reviewed in detail, from function to form. ',
                                },
                                {
                                    name: 'Deployment',
                                    img: 'deployment.png',
                                    text: ' We predictably deploy our applications to the chosen environment, at any scale, on time, with our team supporting you at every step.',
                                },
                            ],
                            sliderSettings: {
                                dots: !1,
                                arrows: !1,
                                fade: !0,
                                infinite: !1,
                                speed: 500,
                                autoplay: !1,
                                autoplaySpeed: 1e4,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                focusOnSelect: !1,
                                responsive: [{breakpoint: 1366, settings: {dots: !0}}],
                            },
                            curSlide: null,
                        };
                    },
                    methods: {
                        beforeSlideChange: function (e, t) {
                            (this.curSlide = t), this.processSlides[t].typed || (document.getElementById('process-' + t).innerHTML = ''), clearInterval(s);
                        },
                        afterSlideChange: function (e) {
                            var t = document.getElementById('process-' + e),
                                a = this.processSlides[e].text;
                            if (this.processSlides[e].typed) t.innerHTML = a;
                            else {
                                this.processSlides[e].typed = !0;
                                var i = 0;
                                s = setInterval(function () {
                                    i < a.length && ((t.innerHTML += a.charAt(i)), i++);
                                }, 10);
                            }
                        },
                        goToSlide: function (e) {
                            this.$refs.carousel.goTo(e);
                        },
                    },
                    mounted: function () {
                        var e = this,
                            t = this.$lottie.loadAnimation({
                                container: document.getElementById('appAnim'),
                                renderer: 'svg',
                                loop: !0,
                                autoplay: !0,
                                animationData: a('22b8'),
                                rendererSettings: {progressiveLoad: !0},
                            });
                        t.setSubframe(!1),
                        document.addEventListener('aos:in:app-anim', function () {
                            t.play();
                        }),
                        document.addEventListener('aos:out:app-anim', function () {
                            t.pause();
                        }),
                        c['a'].set('.features .end', {opacity: 0}),
                        (d = c['a'].timeline({autoplay: !1, duration: 500, easing: 'linear'})),
                        d.add({targets: '.features .feature', opacity: [0, 1], delay: 1e3}),
                        d.add({targets: '.features .start', opacity: [0, 1]}),
                        d.add({
                            targets: '.process-wrapper path',
                            strokeDashoffset: [c['a'].setDashoffset, 0],
                            duration: 2e3,
                            complete: function () {
                                Object(c['a'])({targets: '.features .end', opacity: [0, 1]});
                            },
                        }),
                        d.add({targets: '.feature .feature-text', opacity: [0, 1], delay: c['a'].stagger(285)}, '-=1715'),
                        d.add({
                            targets: '#process-stages-slider',
                            opacity: [0, 1],
                            complete: function () {
                                e.$refs.carousel.play(), (e.curSlide = 0), e.afterSlideChange(0);
                            },
                        }),
                        document.addEventListener('aos:in:devProcess', function () {
                            d.play();
                        });
                    },
                    beforeDestroy: function () {
                        clearInterval(s), (s = null), d.pause();
                    },
                    metaInfo: function () {
                        return {
                            title: 'Software Development and Application design - e9',
                            meta: [
                                {
                                    name: 'description',
                                    content: 'Engage us with your bespoke software development and native mobile application design requirements for results that exceed expectations',
                                },
                                {name: 'keywords', content: 'software, app, design, bespoke, software, development, website, desiging'},
                            ],
                        };
                    },
                },
                p = u,
                f = a('2877'),
                g = Object(f['a'])(p, i, n, !1, null, null, null);
            t['default'] = g.exports;
        },
    },
]);
