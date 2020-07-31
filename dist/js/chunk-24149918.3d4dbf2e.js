(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-24149918'],
    {
        eace: function (e, t, a) {
            'use strict';
            var s = a('fc29'),
                i = a.n(s);
            i.a;
        },
        fadd: function (e, t, a) {
            'use strict';
            a.r(t);
            var s = function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'div',
                        [
                            s('PageCover', {attrs: {title: e.pageTitle, desc: e.pageDesc}}, [
                                s('div', {attrs: {id: 'productAnim', 'data-aos': 'lottie', 'data-aos-id': 'product-anim', 'data-aos-mirror': 'true'}}),
                            ]),
                            s('section', {staticClass: 'bg-dark video-background', attrs: {id: 'products'}}, [
                                s('div', {staticClass: 'video-wrapper'}, [
                                    s('video', {attrs: {loop: '', autoplay: '', muted: '', playsinline: ''}, domProps: {muted: !0}}, [s('source', {attrs: {src: a('d93e'), type: 'video/webm'}})]),
                                ]),
                                e._m(0),
                            ]),
                            s('section', {staticClass: 'pt-xl-8'}, [
                                s('div', {staticClass: 'container'}, [
                                    s('div', {staticClass: 'row'}, [
                                        s('div', {staticClass: 'col-lg-10 offset-lg-1'}, [
                                            e._m(1),
                                            s(
                                                'div',
                                                {staticClass: 'row justify-content-between mt-5 mt-xl-8'},
                                                e._l(e.products, function (e, t) {
                                                    return s(
                                                        'div',
                                                        {key: e._id, staticClass: 'col-xl-5 col-md-6 mt-0 mb-5 mb-md-2 mb-xl-5', class: {'mt-xl-6 mt-md-5': t % 2 === 0}},
                                                        [s('ImageCard', {staticClass: 'p-lg-3 p-xl-0', attrs: {item: e, animation: 'fade-up', tilt: !0}})],
                                                        1
                                                    );
                                                }),
                                                0
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ],
                        1
                    );
                },
                i = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('div', {staticClass: 'container'}, [
                            s('div', {staticClass: 'row justify-content-center mb-6 mb-lg-8'}, [
                                s('div', {staticClass: 'col-md-10 text-center'}, [
                                    s('h2', [e._v('We take pride in our products')]),
                                    s('p', {staticClass: 'lead'}, [
                                        e._v(
                                            ' We use our development expertise to build strong frameworks and empower our clients to create, maintain and consistently scale their products and services. Technology advances every day, so why shouldn’t we? Our developers are constantly searching for the latest updates in software, because why not make the best, better? '
                                        ),
                                    ]),
                                ]),
                            ]),
                            s('div', {staticClass: 'row'}, [
                                s('div', {staticClass: 'col-sm-4'}, [
                                    s('div', {staticClass: 'h-card mb-6 mb-lg-0'}, [
                                        s('img', {staticClass: 'h-card-img', attrs: {src: a('a6da'), alt: ''}}),
                                        s('div', {staticClass: 'h-card-text'}, [
                                            s('h4', {staticClass: 'mt-4 font-weight-demi'}, [e._v('Increasing your efficiency')]),
                                            s('p', [
                                                e._v(
                                                    ' With our products we bring new technologies to the mass market in an affordable way, which in turn provides efficiency and effectiveness in day-to-day performance. '
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                s('div', {staticClass: 'col-sm-4'}, [
                                    s('div', {staticClass: 'h-card mb-6 mb-lg-0'}, [
                                        s('img', {staticClass: 'h-card-img', attrs: {src: a('1063'), alt: ''}}),
                                        s('div', {staticClass: 'h-card-text'}, [
                                            s('h4', {staticClass: 'mt-4 font-weight-demi'}, [e._v('Advanced Tech Affordable Price')]),
                                            s('p', [
                                                e._v(
                                                    ' New technologies exist for businesses but usually turn out to be much more expensive generally making it more exclusive to enterprise customers with big budgets. We want to change that. '
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                s('div', {staticClass: 'col-sm-4'}, [
                                    s('div', {staticClass: 'h-card mb-6 mb-lg-0'}, [
                                        s('img', {staticClass: 'h-card-img', attrs: {src: a('ed78'), alt: ''}}),
                                        s('div', {staticClass: 'h-card-text'}, [
                                            s('h4', {staticClass: 'mt-4 font-weight-demi'}, [e._v('Helping you grow your business')]),
                                            s('p', [
                                                e._v(
                                                    ' Our SaaS and B2C cloud based products help businesses achieve goals. We are heavily invested in customer success, hence we provide amazing support, cost efficiency and reliability. '
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            a = e._self._c || t;
                        return a('div', {staticClass: 'text-center'}, [
                            a('h2', [e._v('Our Products')]),
                            a('p', {staticClass: 'lead'}, [
                                e._v(
                                    ' We have over six years of established experience creating digital products under our belt, with each and every one of them having been handcrafted with passion. With happy employees and customers alike, we are proud of what we have made. So below is a showcase of our creations for you explore what e9 is capable of, and more than that: what we are passionate about. '
                                ),
                            ]),
                        ]);
                    },
                ],
                o = (a('4de4'), a('c975'), a('8a9b')),
                r = a('5c62'),
                n = a('7ba0'),
                c = {
                    name: 'Products',
                    components: {PageCover: r['a'], ImageCard: o['a']},
                    data: function () {
                        return {
                            pageTitle: 'We develop, so that you develop 🚀',
                            pageDesc:
                                'e9’s diverse range of products are focused on delivering valuable information straight to the user, through pixel perfect design and agile technologies. <br /><br />We use our development expertise to build strong frameworks and empower our clients to create, maintain and consistently scale their products and services.',
                            products: n.filter(function (e) {
                                return e.Subtitle.indexOf('Product') > -1;
                            }),
                        };
                    },
                    mounted: function () {
                        var e = this.$lottie.loadAnimation({
                            container: document.getElementById('productAnim'),
                            renderer: 'svg',
                            loop: !0,
                            autoplay: !1,
                            animationData: a('7ef3'),
                            rendererSettings: {progressiveLoad: !0},
                        });
                        e.setSubframe(!1),
                        document.addEventListener('aos:in:product-anim', function () {
                            e.play();
                        }),
                        document.addEventListener('aos:out:product-anim', function () {
                            e.pause();
                        });
                    },
                    metaInfo: function () {
                        return {
                            title: 'Software Development and Saas solutions - e9',
                            meta: [
                                {name: 'description', content: 'See our range of software as a service (SaaS) products developed in house by e9'},
                                {name: 'keywords', content: 'app, design, software, development, saas, solution, service'},
                            ],
                        };
                    },
                },
                d = c,
                l = (a('eace'), a('2877')),
                u = Object(l['a'])(d, s, i, !1, null, '710e2e69', null);
            t['default'] = u.exports;
        },
        fc29: function (e, t, a) {},
    },
]);
