(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['app~b88f4497'],
    {
        '3a28': function (t, e, a) {},
        '3f6f': function (t, e, a) {
            'use strict';
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s('div', [
                        s(
                            'nav',
                            {staticClass: 'navbar navbar-expand-lg navbar-light fixed-top'},
                            [
                                s('router-link', {staticClass: 'navbar-brand animated slideInDown fast', attrs: {tag: 'a', to: '/', 'active-class': 'active'}}, [
                                    s('img', {attrs: {src: a('9d64'), alt: ''}}),
                                ]),
                                t._m(0),
                                s('div', {staticClass: 'collapse navbar-collapse justify-content-end', attrs: {id: 'navbarNav'}}, [
                                    s(
                                        'div',
                                        {staticClass: 'navbar-nav'},
                                        [
                                            s('router-link', {staticClass: 'nav-item nav-link', attrs: {tag: 'a', to: '/products', 'active-class': 'active'}}, [t._v(' Products ')]),
                                            s('router-link', {staticClass: 'nav-item nav-link', attrs: {tag: 'a', to: '/services', 'active-class': 'active'}}, [t._v(' Services ')]),
                                            s('router-link', {staticClass: 'nav-item nav-link', attrs: {tag: 'a', to: '/about', 'active-class': 'active'}}, [t._v(' About ')]),
                                            s('router-link', {staticClass: 'nav-item nav-link', attrs: {tag: 'a', to: '/case-studies', 'active-class': 'active'}}, [t._v(' Case Studies ')]),
                                            s('router-link', {staticClass: 'nav-item nav-link', attrs: {tag: 'a', to: '/team', 'active-class': 'active'}}, [t._v(' Team ')]),
                                            s('router-link', {staticClass: 'nav-item nav-link', attrs: {tag: 'a', to: '/contact', 'active-class': 'active'}}, [t._v(' Contact ')]),
                                        ],
                                        1
                                    ),
                                    t._m(1),
                                ]),
                            ],
                            1
                        ),
                    ]);
                },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a(
                            'button',
                            {
                                staticClass: 'navbar-toggler',
                                attrs: {
                                    type: 'button',
                                    'data-toggle': 'collapse',
                                    'data-target': '#navbarNav',
                                    'aria-controls': 'navbarNav',
                                    'aria-expanded': 'false',
                                    'aria-label': 'Toggle navigation',
                                },
                            },
                            [a('div', {attrs: {id: 'line-1'}}), a('div', {attrs: {id: 'line-2'}})]
                        );
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a('div', {staticClass: 'navbar-footer'}, [
                            a('h2', {staticClass: 'mb-1'}, [t._v('Get in touch')]),
                            a('a', {attrs: {href: 'mailto:hello@e9.co.uk'}}, [t._v('hello@e9.co.uk')]),
                        ]);
                    },
                ],
                r = a('1209'),
                l = {
                    name: 'AppHeader',
                    mounted: function () {
                        var t = 0,
                            e = 5,
                            a = window.$('nav').outerHeight();
                        function s() {
                            var s = window.$(window).scrollTop();
                            0 == s && window.$('nav').removeClass('scrolled'),
                            Math.abs(t - s) <= e ||
                                    (s > t && s > a
                                        ? (window.$('nav').addClass('scrolled'), window.$('nav').addClass('scrolled-down'))
                                        : s + window.$(window).height() < window.$(document).height() && window.$('nav').removeClass('scrolled-down'),
                                    (t = s));
                        }
                        window.$(window).scroll(function () {
                            s();
                        }),
                        window.$('.navbar-toggler').click(function () {
                            window.$('.navbar').toggleClass('reveal-nav'), Object(r['a'])({targets: '.nav-item', opacity: [0, 1], translateY: [-10, 0], delay: r['a'].stagger(100)});
                        });
                    },
                },
                n = l,
                o = a('2877'),
                c = Object(o['a'])(n, s, i, !1, null, '13f788c6', null);
            e['a'] = c.exports;
        },
        '4e1c': function (t, e, a) {
            'use strict';
            var s = a('3a28'),
                i = a.n(s);
            i.a;
        },
        '5c62': function (t, e, a) {
            'use strict';
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a('section', {staticClass: 'height-100 imageblock cover d-lg-flex align-items-center'}, [
                        a('div', {staticClass: 'imageblock__content col-lg-6 pos-right d-flex align-items-center justify-content-center'}, [a('div', {staticClass: 'col-11'}, [t._t('default')], 2)]),
                        a('div', {staticClass: 'container'}, [
                            a('div', {staticClass: 'row'}, [
                                a(
                                    'div',
                                    {staticClass: 'col-lg-6'},
                                    [
                                        t.slides
                                            ? a(
                                                'VueSlickCarousel',
                                                t._b({staticClass: 'pb-3 pb-lg-5 mb-5 mb-lg-0'}, 'VueSlickCarousel', t.sliderSettings, !1),
                                                t._l(t.slides, function (e) {
                                                    return a('div', {key: e.id}, [
                                                        e.title ? a('h1', {staticClass: 'mb-lg-4', domProps: {innerHTML: t._s(e.title)}}) : t._e(),
                                                        a('p', {staticClass: 'lead', domProps: {innerHTML: t._s(e.desc)}}),
                                                    ]);
                                                }),
                                                0
                                            )
                                            : a('div', [
                                                t.title ? a('h1', {staticClass: 'mb-lg-4', domProps: {innerHTML: t._s(t.title)}}) : t._e(),
                                                a('img', {
                                                    directives: [{name: 'show', rawName: 'v-show', value: t.imgUrl, expression: 'imgUrl'}],
                                                    staticClass: 'logo mb-4',
                                                    attrs: {src: t.getImgPath(), alt: ''},
                                                }),
                                                a('p', {staticClass: 'lead', domProps: {innerHTML: t._s(t.desc)}}),
                                                t.linkUrl
                                                    ? a(
                                                        'div',
                                                        {staticClass: 'mt-5 mb-4 mb-xl-0'},
                                                        [
                                                            t.linkUrl.indexOf('http') > -1 || t.linkUrl.indexOf('http') > -1
                                                                ? a(
                                                                    'a',
                                                                    {
                                                                        staticClass: 'btn btn-primary',
                                                                        attrs: {href: ''},
                                                                        on: {
                                                                            click: function (e) {
                                                                                return e.preventDefault(), t.callAction(e);
                                                                            },
                                                                        },
                                                                    },
                                                                    [t._v(t._s(t.linkText))]
                                                                )
                                                                : a('router-link', {staticClass: 'btn btn-primary', attrs: {to: t.linkUrl}}, [t._v(t._s(t.linkText))]),
                                                        ],
                                                        1
                                                    )
                                                    : t._e(),
                                            ]),
                                    ],
                                    1
                                ),
                            ]),
                        ]),
                        t.scroller
                            ? a(
                                'a',
                                {
                                    staticClass: 'font-weight-demi d-lg-flex align-items-center scroller d-none',
                                    attrs: {href: ''},
                                    on: {
                                        click: function (e) {
                                            return e.preventDefault(), t.callScrollTo();
                                        },
                                    },
                                },
                                [a('span', [t._v('Scroll down to explore')]), t._m(0)]
                            )
                            : t._e(),
                    ]);
                },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a('div', {staticClass: 'mouse ml-2'}, [a('div', {staticClass: 'scroller'})]);
                    },
                ],
                r = a('9bf5'),
                l = a('a7ab'),
                n = a.n(l),
                o = {
                    name: 'PageCover',
                    props: {
                        title: {type: String},
                        imgUrl: {type: String},
                        desc: {type: String},
                        slides: {type: Array},
                        linkUrl: {type: String},
                        linkText: {type: String},
                        linkAction: {type: Function},
                        scroller: {type: Boolean, default: !1},
                        scrollToSection: {type: String},
                    },
                    components: {VueSlickCarousel: n.a},
                    data: function () {
                        return {
                            sliderSettings: {dots: !0, edgeFriction: 0.35, infinite: !0, speed: 500, autoplaySpeed: 7e3, slidesToShow: 1, slidesToScroll: 1, fade: !0, autoplay: !0, focusOnSelect: !1},
                        };
                    },
                    methods: {
                        getImgPath: function () {
                            return this.imgUrl ? a('7584')('./'.concat(this.imgUrl)) : '';
                        },
                        callAction: function () {
                            this.action ? this.action() : this.linkUrl && (window.location = this.linkUrl);
                        },
                        callScrollTo: function () {
                            Object(r['scrollTo'])(this.scrollToSection);
                        },
                    },
                },
                c = o,
                d = (a('4e1c'), a('2877')),
                u = Object(d['a'])(c, s, i, !1, null, '49231549', null);
            e['a'] = u.exports;
        },
        '67ed': function (t, e, a) {
            'use strict';
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s(
                        'div',
                        [
                            s(
                                'VueSlickCarousel',
                                t._b({attrs: {id: 'logo-carousel-' + t.id}}, 'VueSlickCarousel', t.clientSliderSettings, !1),
                                t._l(t.logoChunks, function (e, a) {
                                    return s(
                                        'div',
                                        {key: a, staticClass: 'logos-wrapper'},
                                        t._l(e, function (e, a) {
                                            return s('a', {key: a, staticClass: 'logo-wrapper', attrs: {href: ''}}, [
                                                s('div', {staticClass: 'logo'}, [s('img', {attrs: {src: t.getImgPath(e.ImageURL)}})]),
                                            ]);
                                        }),
                                        0
                                    );
                                }),
                                0
                            ),
                            t.showTestimonials
                                ? s('div', {staticClass: 'row mt-8 mt-lg-9 mt-xl-10'}, [
                                    s(
                                        'div',
                                        {staticClass: 'col-sm-8'},
                                        [
                                            s(
                                                'VueSlickCarousel',
                                                t._b({ref: 'testimonialCarousel', staticClass: 'single-slide-slick-carousel pb-4 pb-lg-0'}, 'VueSlickCarousel', t.testimonialSliderSettings, !1),
                                                [
                                                    s('div', [
                                                        s('p', {staticClass: 'lead emphasis mb-4'}, [
                                                            t._v(
                                                                ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iusto explicabo, ipsum necessitatibus distinctio in cupiditate? Dolor esse porro pariatur facere dolorem modi, odio placeat, deleniti obcaecati voluptatem cum aliquam!" '
                                                            ),
                                                        ]),
                                                        s('p', [t._v('Gregory Hoy '), s('br'), s('small', {staticClass: 'text-primary'}, [t._v('CEO, Excel Executive Ltd')])]),
                                                    ]),
                                                    s('div', [
                                                        s('p', {staticClass: 'lead emphasis mb-4'}, [
                                                            t._v(' "Our team aims to deliver engaging brand messages and craft outstanding work in every pixel!" '),
                                                        ]),
                                                        s('p', [t._v('Gregory Hoy '), s('br'), s('small', {staticClass: 'text-primary'}, [t._v('CEO, Excel Executive Ltd')])]),
                                                    ]),
                                                ]
                                            ),
                                        ],
                                        1
                                    ),
                                    s('div', {staticClass: 'col-sm-4 mt-3'}, [
                                        s('ol', {staticClass: 'slick-slider-arrows'}, [
                                            s('li', {on: {click: t.showPrevious}}, [s('img', {attrs: {src: a('9bbb'), alt: ''}})]),
                                            s('li', {attrs: {'data-target': 'testimonial-carousel-' + t.id, 'data-slide-to': '1'}, on: {click: t.showNext}}, [
                                                s('img', {attrs: {src: a('2ab9'), alt: ''}}),
                                            ]),
                                        ]),
                                    ]),
                                ])
                                : t._e(),
                        ],
                        1
                    );
                },
                i = [],
                r = a('9bf5'),
                l = a('2e93'),
                n = a('a7ab'),
                o = a.n(n),
                c = {
                    name: 'ClientsSlider',
                    props: {showTestimonials: {type: Boolean, default: !1}},
                    components: {VueSlickCarousel: o.a},
                    data: function () {
                        return {
                            id: null,
                            logos: l,
                            clientSliderSettings: {slidesToShow: 1, slidesToScroll: 1, dots: !0, dotsClass: 'slick-dots line-dots', arrows: !1},
                            testimonialSliderSettings: {slidesToShow: 1, slidesToScroll: 1, dots: !1, arrows: !1, fade: !0, speed: 500},
                        };
                    },
                    methods: {
                        showPrevious: function () {
                            this.$refs.testimonialCarousel.prev();
                        },
                        showNext: function () {
                            this.$refs.testimonialCarousel.next();
                        },
                        getImgPath: function (t) {
                            return a('7584')('./'.concat(t));
                        },
                    },
                    computed: {
                        logoChunks: function () {
                            return Object(r['chunk'])(this.logos, 8);
                        },
                    },
                    created: function () {
                        this.id = this._uid;
                    },
                },
                d = c,
                u = (a('8803'), a('2877')),
                m = Object(u['a'])(d, s, i, !1, null, '0076a238', null);
            e['a'] = m.exports;
        },
        8803: function (t, e, a) {
            'use strict';
            var s = a('bd1f'),
                i = a.n(s);
            i.a;
        },
        bb93: function (t, e, a) {
            'use strict';
            var s = a('bba9'),
                i = a.n(s);
            i.a;
        },
        bba9: function (t, e, a) {},
        bd1f: function (t, e, a) {},
        c6d2: function (t, e, a) {
            'use strict';
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a('div', {staticClass: 'breadcrumbs d-none d-xl-flex', attrs: {id: 'breadcrumbs'}}, [
                        t.currentRoutes.length > 1
                            ? a(
                                'ul',
                                [
                                    t._l(t.currentRoutes.slice(0, t.currentRoutes.length - 1), function (e, s) {
                                        return a('li', {key: s}, [a('router-link', {attrs: {to: e.path, tag: 'a'}}, [t._v(' ' + t._s(e.name) + ' ')]), t._m(0, !0)], 1);
                                    }),
                                    a('li', [t._v(' ' + t._s(t.$route.name) + ' ')]),
                                ],
                                2
                            )
                            : t._e(),
                    ]);
                },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a('span', [a('i', {staticClass: 'fa fa-angle-right', attrs: {'aria-hidden': 'true'}})]);
                    },
                ],
                r =
                    (a('7db0'),
                    a('d81d'),
                    a('fb6a'),
                    a('ac1f'),
                    a('1276'),
                    {
                        name: 'Breadcrumbs',
                        data: function () {
                            return {currentRoutes: []};
                        },
                        created: function () {
                            var t = this;
                            this.currentRoutes = this.$route.matched[0].path
                                .split('/')
                                .slice(1)
                                .map(function (e) {
                                    return t.$router.options.routes.find(function (t) {
                                        var a = t.path.split('/');
                                        return a[a.length - 1] == e;
                                    });
                                });
                        },
                    }),
                l = r,
                n = (a('bb93'), a('2877')),
                o = Object(n['a'])(l, s, i, !1, null, 'a1e7b28c', null);
            e['a'] = o.exports;
        },
        ec0b: function (t, e, a) {
            'use strict';
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a('footer', {attrs: {id: 'footer'}}, [
                        a('div', [
                            a('div', {staticClass: 'container'}, [
                                ['Home'].includes(t.$route.name) ? a('div', {staticClass: 'row justify-content-center text-center mb-6'}, [t._m(0)]) : t._e(),
                                a('div', {staticClass: 'row justify-content-center text-center'}, [
                                    a('div', {staticClass: 'col-ld-10 col-sm-12'}, [
                                        a('ul', {staticClass: 'list-group list-group-horizontal list-unstyled justify-content-center'}, [
                                            a('li', {staticClass: 'mr-3 mr-md-5 mb-3 mb-md-0'}, [a('router-link', {attrs: {tag: 'a', to: '/products'}}, [t._v(' Products ')])], 1),
                                            a('li', {staticClass: 'mr-3 mr-md-5 mb-3 mb-md-0'}, [a('router-link', {attrs: {tag: 'a', to: '/services'}}, [t._v(' Services ')])], 1),
                                            a('li', {staticClass: 'mr-3 mr-md-5 mb-3 mb-md-0'}, [a('router-link', {attrs: {tag: 'a', to: '/about'}}, [t._v(' About ')])], 1),
                                            a('li', {staticClass: 'mr-3 mr-md-5 mb-3 mb-md-0'}, [a('router-link', {attrs: {tag: 'a', to: '/case-studies'}}, [t._v(' Case Studies ')])], 1),
                                            a('li', {staticClass: 'mr-3 mr-md-5 mb-3 mb-md-0'}, [a('router-link', {attrs: {tag: 'a', to: '/team'}}, [t._v(' Team ')])], 1),
                                            a('li', [a('router-link', {attrs: {tag: 'a', to: '/contact'}}, [t._v(' Contact ')])], 1),
                                        ]),
                                        t._m(1),
                                    ]),
                                ]),
                                a('div', {staticClass: 'row align-items-center justify-content-center justify-content-sm-between mt-6 mt-lg-8'}, [
                                    t._m(2),
                                    a('div', {staticClass: 'col-lg-6 col-sm-6 text-center text-sm-right mt-3 mt-sm-0'}, [
                                        a('p', {staticClass: 'text-dark mb-0'}, [t._v('© '), a('span', [t._v(t._s(t.currentYear))]), t._v(' e9')]),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]);
                },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a('div', {staticClass: 'col-sm-8'}, [
                            a('h2', [t._v('Get notified about our latest updates')]),
                            a('p', {staticClass: 'mb-5'}, [t._v('Please add you email address to get our latest news, products and success stories delivered directly to your inbox. ')]),
                            a('div', [
                                a('div', {attrs: {id: 'mc_embed_signup'}}, [
                                    a(
                                        'form',
                                        {
                                            staticClass: 'validate',
                                            attrs: {
                                                action: 'https://app.us4.list-manage.com/subscribe/post?u=631c6a227be0fb88b0e0726cd&id=75d0e2a776',
                                                method: 'post',
                                                id: 'mc-embedded-subscribe-form',
                                                name: 'mc-embedded-subscribe-form',
                                                target: '_blank',
                                                novalidate: '',
                                            },
                                        },
                                        [
                                            a('div', {attrs: {id: 'mc_embed_signup_scroll'}}, [
                                                a('div', {staticClass: 'form-group'}, [
                                                    a('input', {
                                                        staticClass: 'email form-control form-control-lg',
                                                        attrs: {type: 'email', value: '', name: 'EMAIL', id: 'mce-EMAIL', placeholder: 'Email', required: ''},
                                                    }),
                                                    a('div', {staticStyle: {position: 'absolute', left: '-5000px'}, attrs: {'aria-hidden': 'true'}}, [
                                                        a('input', {attrs: {type: 'text', name: 'b_631c6a227be0fb88b0e0726cd_75d0e2a776', tabindex: '-1', value: ''}}),
                                                    ]),
                                                    a('div', {staticClass: 'clear'}, [
                                                        a('input', {staticClass: 'button shadow', attrs: {type: 'submit', value: '', name: 'subscribe', id: 'mc-embedded-subscribe'}}),
                                                    ]),
                                                ]),
                                            ]),
                                        ]
                                    ),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a('ul', {staticClass: 'list-group list-group-horizontal social-list list-unstyled justify-content-center mt-5'}, [
                            a('li', {staticClass: 'mr-4 mr-md-5'}, [
                                a('a', {attrs: {href: 'https://www.facebook.com/e9.co.uk', target: '_blank', rel: 'noopener'}}, [
                                    a('i', {staticClass: 'fa fa-facebook', attrs: {'aria-hidden': 'true'}}),
                                ]),
                            ]),
                            a('li', {staticClass: 'mr-4 mr-md-5'}, [
                                a('a', {attrs: {href: 'https://twitter.com/e9_co_uk', target: '_blank', rel: 'noopener'}}, [a('i', {staticClass: 'fa fa-tumblr', attrs: {'aria-hidden': 'true'}})]),
                            ]),
                            a('li', {staticClass: 'mr-4 mr-md-5'}, [
                                a('a', {attrs: {href: 'https://www.linkedin.com/company/e9ine/', target: '_blank', rel: 'noopener'}}, [
                                    a('i', {staticClass: 'fa fa-linkedin', attrs: {'aria-hidden': 'true'}}),
                                ]),
                            ]),
                            a('li', [
                                a('a', {attrs: {href: 'https://www.instagram.com/e9.co.uk', target: '_blank', rel: 'noopener'}}, [
                                    a('i', {staticClass: 'fa fa-instagram', attrs: {'aria-hidden': 'true'}}),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            s = t._self._c || e;
                        return s('div', {staticClass: 'col-lg-4  col-sm-6 col-8'}, [
                            s('img', {staticClass: 'w-25 d-inline-block mr-3', attrs: {src: a('9d64'), alt: ''}}),
                            s('p', {staticClass: 'text-dark d-inline-block'}, [t._v('All Rights Reserved.')]),
                        ]);
                    },
                ],
                r = {
                    name: 'AppFooter',
                    data: function () {
                        return {currentYear: new Date().getFullYear()};
                    },
                    mounted: function () {
                        setTimeout(function () {
                            var t = window.$('#breadcrumbs'),
                                e = window.$('#footer'),
                                a = e.outerHeight(),
                                s = e.offset().top,
                                i = window.$('#nextCase').outerHeight() || 0;
                            window.$(window).width() > 768 &&
                                window.$(window).scroll(function () {
                                    var e = window.$(window).height() + window.$(window).scrollTop();
                                    e > s - i ? t.css({position: 'absolute', bottom: a + i + 48}) : t.css({position: 'fixed', bottom: 48});
                                });
                        }, 100);
                    },
                },
                l = r,
                n = a('2877'),
                o = Object(n['a'])(l, s, i, !1, null, null, null);
            e['a'] = o.exports;
        },
    },
]);
