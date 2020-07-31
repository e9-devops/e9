(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-2d0db836'],
    {
        '6fd4': function (e, t, a) {
            'use strict';
            a.r(t);
            var s = function () {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a(
                        'div',
                        [
                            a('PageCover', {attrs: {title: e.pageTitle, desc: e.pageDesc}}, [
                                a('div', {attrs: {id: 'webAnim', 'data-aos': 'lottie', 'data-aos-id': 'web-anim', 'data-aos-mirror': 'true'}}),
                            ]),
                            e._m(0),
                            e._m(1),
                            e._m(2),
                            a('section', [
                                a('div', {staticClass: 'container'}, [
                                    a('div', {staticClass: 'row'}, [
                                        a(
                                            'div',
                                            {staticClass: 'col-lg-10 offset-lg-1'},
                                            [
                                                e._m(3),
                                                a('router-link', {staticClass: 'd-flex align-items-center justify-content-center next-arrow', attrs: {to: '/case-studies'}}, [
                                                    a('h3', {staticClass: 'font-weight-demi'}, [e._v('Case Studies')]),
                                                    a('p', {staticClass: 't-xl pl-3'}, [a('i', {staticClass: 'fa fa-angle-right', attrs: {'aria-hidden': 'true'}})]),
                                                ]),
                                            ],
                                            1
                                        ),
                                    ]),
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
                            s = e._self._c || t;
                        return s('section', {staticClass: 'imageblock d-lg-flex align-items-center height-60'}, [
                            s('div', {staticClass: 'imageblock__content col-lg-6 offset-lg-0 col-sm-10 offset-sm-1 d-flex align-items-center pos-right'}, [
                                s('img', {attrs: {src: a('5e6b'), alt: ''}}),
                            ]),
                            s('div', {staticClass: 'container'}, [
                                s('div', {staticClass: 'row'}, [
                                    s('div', {staticClass: 'col-lg-5'}, [
                                        s('h2', [e._v('Your brand is at the core')]),
                                        s('p', [
                                            e._v(
                                                'Our user led approach leads us to identify the best way to project your brand, while staying functional and emotionally connected. We tell a story with visuals and design elements, painting the picture of what you offer and how you offer it. This engages the user and gives them an experience. It’s our aim to help you grow and develop a long-term relationship with you.'
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('section', {staticClass: 'imageblock d-lg-flex align-items-center height-80'}, [
                            s('div', {staticClass: 'imageblock__content col-lg-6 d-flex align-items-center justify-content-end pos-left'}, [
                                s('div', {staticClass: 'col-lg-10'}, [s('img', {attrs: {src: a('cd59'), alt: ''}})]),
                            ]),
                            s('div', {staticClass: 'container'}, [
                                s('div', {staticClass: 'row justify-content-end'}, [
                                    s('div', {staticClass: 'col-lg-5'}, [
                                        s('h2', [e._v('More than words on a page')]),
                                        s('p', [
                                            e._v(
                                                'To help with telling the story, we make maximum use of rich media, animations and movement to give life to the page. Elements become more compelling with subtle changes and effects. Our work has a contemporary and fresh edge, using trends and new design features where appropriate and only if they add true value to the overall concept.'
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('section', {staticClass: 'imageblock d-lg-flex align-items-center height-80 pt-0'}, [
                            s('div', {staticClass: 'imageblock__content col-lg-6 offset-lg-0 col-sm-10 offset-sm-1 d-flex align-items-center pos-right'}, [
                                s('img', {attrs: {src: a('9a9f'), alt: ''}}),
                            ]),
                            s('div', {staticClass: 'container'}, [
                                s('div', {staticClass: 'row'}, [
                                    s('div', {staticClass: 'col-lg-5'}, [
                                        s('h2', [e._v('Designed with purpose')]),
                                        s('p', [
                                            e._v(
                                                'Every element will have a purpose and be easy to use, clear and logical. Navigation must easily help the user to find exactly what they are looking for, simply and effectively. The finished site will be one you are proud of and want to show your customers.'
                                            ),
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
                        return a('div', {staticClass: 'text-center mb-6 mb-lg-8'}, [
                            a('h2', [e._v('Working together')]),
                            a('p', [
                                e._v(
                                    'Our work has led us to develop websites for global brands and industry leaders. We have worked with these companies through the process of consultation, designing, building, and testing. We have developed these relationships and worked with these clients on many levels throughout our business offerings. '
                                ),
                            ]),
                        ]);
                    },
                ],
                i = a('5c62'),
                o = {
                    name: 'WebProjects',
                    components: {PageCover: i['a']},
                    data: function () {
                        return {
                            pageTitle: 'Understanding your brand',
                            pageDesc:
                                'By keeping your brand at the very heart of our designs, e9’s solutions will compliment your tone and amplify your brand message. Our team of creatives will develop stunning, engaging and intuitive designs that will lead your visitors on a memorable journey with your business.',
                        };
                    },
                    mounted: function () {
                        var e = this.$lottie.loadAnimation({
                            container: document.getElementById('webAnim'),
                            renderer: 'svg',
                            loop: !0,
                            autoplay: !0,
                            animationData: a('dfc9'),
                            rendererSettings: {progressiveLoad: !0},
                        });
                        e.setSubframe(!1),
                        document.addEventListener('aos:in:web-anim', function () {
                            e.play();
                        }),
                        document.addEventListener('aos:out:web-anim', function () {
                            e.pause();
                        });
                    },
                    metaInfo: function () {
                        return {
                            title: 'Website design and creative branding solutions - e9',
                            meta: [
                                {name: 'description', content: 'Our web design and branding solutions are engaging, focused on projecting your brand image'},
                                {name: 'keywords', content: 'brand, branding, marketing, design, software, development, website, desiging'},
                            ],
                        };
                    },
                },
                r = o,
                l = a('2877'),
                c = Object(l['a'])(r, s, n, !1, null, null, null);
            t['default'] = c.exports;
        },
    },
]);