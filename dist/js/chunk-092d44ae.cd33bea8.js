(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-092d44ae'],
    {
        '0767': function (t, e, a) {
            'use strict';
            a.r(e);
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s(
                        'div',
                        [
                            s('PageCover', {attrs: {title: t.pageTitle, desc: t.pageDesc}}, [
                                s('div', {attrs: {id: 'teamAnim', 'data-aos': 'lottie', 'data-aos-id': 'team-anim', 'data-aos-mirror': 'true'}}),
                            ]),
                            t._m(0),
                            t._m(1),
                            s('section', {staticClass: 'pt-4 mt-4 pt-md-4'}, [
                                t._m(2),
                                s('div', {staticClass: 'container-fluid mb-6 mb-xl-8'}, [
                                    s(
                                        'div',
                                        {staticClass: 'row people justify-content-between'},
                                        t._l(t.people, function (t, e) {
                                            return s(
                                                'div',
                                                {
                                                    directives: [{name: 'show', rawName: 'v-show', value: 'Tech' == t.Category, expression: 'item.Category == \'Tech\''}],
                                                    key: e,
                                                    staticClass: 'col-6 col-lg-4 px-md-4 px-xl-6 mb-4 mb-md-5 mb-xl-6',
                                                    class: e % 2 ? 'even-card' : 'odd-card',
                                                },
                                                [s('ImageCard', {attrs: {item: t, size: 'medium', animation: 'fade-up'}})],
                                                1
                                            );
                                        }),
                                        0
                                    ),
                                ]),
                                t._m(3),
                                s('div', {staticClass: 'container'}, [
                                    s(
                                        'div',
                                        {staticClass: 'row people justify-content-between'},
                                        t._l(t.people, function (t, e) {
                                            return s(
                                                'div',
                                                {
                                                    directives: [{name: 'show', rawName: 'v-show', value: 'Management' == t.Category, expression: 'item.Category == \'Management\''}],
                                                    key: e,
                                                    staticClass: 'col-lg-6 px-xl-6 mb-xl-6 px-md-4 mb-md-6 mb-4 col-6',
                                                    class: e % 2 ? 'even-card' : 'odd-card',
                                                },
                                                [s('ImageCard', {attrs: {item: t, size: 'medium', animation: 'fade-up'}})],
                                                1
                                            );
                                        }),
                                        0
                                    ),
                                ]),
                                s(
                                    'div',
                                    {staticClass: 'slider-container pt-6 pt-xl-8'},
                                    [
                                        s(
                                            'VueSlickCarousel',
                                            t._b(
                                                {
                                                    staticClass: 'team-slider',
                                                    scopedSlots: t._u([
                                                        {
                                                            key: 'prevArrow',
                                                            fn: function () {
                                                                return [s('div', {staticClass: 'slick-arrow slick-prev'}, [s('i', {staticClass: 'fa fa-angle-left', attrs: {'aria-hidden': 'true'}})])];
                                                            },
                                                            proxy: !0,
                                                        },
                                                        {
                                                            key: 'nextArrow',
                                                            fn: function () {
                                                                return [
                                                                    s('div', {staticClass: 'slick-arrow slick-next'}, [s('i', {staticClass: 'fa fa-angle-right', attrs: {'aria-hidden': 'true'}})]),
                                                                ];
                                                            },
                                                            proxy: !0,
                                                        },
                                                    ]),
                                                },
                                                'VueSlickCarousel',
                                                t.settings,
                                                !1
                                            ),
                                            [
                                                s('div', [s('img', {attrs: {src: a('b92e'), alt: ''}})]),
                                                s('div', [s('img', {attrs: {src: a('f58e'), alt: ''}})]),
                                                s('div', [s('img', {attrs: {src: a('5325'), alt: ''}})]),
                                                s('div', [s('img', {attrs: {src: a('12e5'), alt: ''}})]),
                                                s('div', [s('img', {attrs: {src: a('98c4'), alt: ''}})]),
                                                s('div', [s('img', {attrs: {src: a('637e'), alt: ''}})]),
                                                s('div', [s('img', {attrs: {src: a('e2ec'), alt: ''}})]),
                                                s('div', [s('img', {attrs: {src: a('17ba'), alt: ''}})]),
                                                s('div', [s('img', {attrs: {src: a('5a4c'), alt: ''}})]),
                                            ]
                                        ),
                                    ],
                                    1
                                ),
                            ]),
                            s('section', {staticClass: 'pt-0 pt-lg-6'}, [
                                s(
                                    'div',
                                    {staticClass: 'container'},
                                    [
                                        t._m(4),
                                        t._l(t.groupedJobs, function (e, i, n) {
                                            return s('div', {key: n, staticClass: 'row mt-3 mt-md-5 justify-content-center'}, [
                                                s('div', {staticClass: 'col-lg-5 col-md-6'}, [s('h2', {staticClass: 'font-weight-demi text-center text-md-left mt-4'}, [t._v(t._s(i))])]),
                                                s('div', {staticClass: 'col-lg-5 col-md-6'}, [
                                                    s(
                                                        'ul',
                                                        {staticClass: 'list-unstyled job-list'},
                                                        t._l(e, function (e) {
                                                            return s('li', {key: e.JobId}, [
                                                                s(
                                                                    'a',
                                                                    {
                                                                        attrs: {href: ''},
                                                                        on: {
                                                                            click: function (a) {
                                                                                a.preventDefault(), (t.selectedJob = e);
                                                                            },
                                                                        },
                                                                    },
                                                                    [t._v(t._s(e.Title))]
                                                                ),
                                                                s('img', {attrs: {src: a('2ab9'), alt: ''}}),
                                                            ]);
                                                        }),
                                                        0
                                                    ),
                                                ]),
                                            ]);
                                        }),
                                        s('div', {staticClass: 'row'}, [
                                            s(
                                                'div',
                                                {staticClass: 'col-lg-10 offset-lg-1 text-center'},
                                                [
                                                    s('p', {staticClass: 'lead emphasis mt-6 mt-lg-8 mb-5'}, [
                                                        t._v(
                                                            ' Our work provides meaning, it solves problems, it engages people. We work with industry leaders, SME’s and startups who have vision and passion, about what they do. If you\'re interested in working with creative people, engaged with solving challenging solutions, then we want to hear from you, today! '
                                                        ),
                                                    ]),
                                                    s('router-link', {staticClass: 'btn btn-primary', attrs: {to: '/contact', tag: 'a'}}, [t._v('Get in touch')]),
                                                ],
                                                1
                                            ),
                                        ]),
                                    ],
                                    2
                                ),
                            ]),
                            s('div', {staticClass: 'offscreen-job-container', class: t.selectedJob ? 'show' : ''}, [
                                s(
                                    'a',
                                    {
                                        staticClass: 'close',
                                        attrs: {href: ''},
                                        on: {
                                            click: function (e) {
                                                e.preventDefault(), (t.selectedJob = null);
                                            },
                                        },
                                    },
                                    [s('img', {attrs: {src: a('0572')}})]
                                ),
                                t.selectedJob
                                    ? s('div', [
                                        s('div', {staticClass: 'd-md-flex justify-content-between align-items-center mt-4 mb-6'}, [
                                            s('div', [
                                                s('h3', [t._v(t._s(t.selectedJob.Title))]),
                                                s('p', {staticClass: 'd-inline-block mr-6 mb-0'}, [
                                                    s('i', {staticClass: 'fa fa-map-marker mr-2', attrs: {'aria-hidden': 'true'}}),
                                                    t._v(t._s(t.selectedJob.Location)),
                                                ]),
                                                s('p', {staticClass: 'd-inline-block mb-0'}, [
                                                    s('i', {staticClass: 'fa fa-briefcase mr-2', attrs: {'aria-hidden': 'true'}}),
                                                    t._v(t._s(t.selectedJob.Hours)),
                                                ]),
                                            ]),
                                            s('a', {staticClass: 'btn btn-primary mt-4 mt-md-0', attrs: {href: 'mailto:hr@e9ine.com?subject=Job application - ' + t.selectedJob.Title}}, [
                                                t._v('Apply Now'),
                                            ]),
                                        ]),
                                        s('div', {domProps: {innerHTML: t._s(t.selectedJob.Description)}}),
                                        s('div', {staticClass: 'd-md-flex justify-content-between align-items-end mb-4'}, [
                                            s('a', {staticClass: 'btn btn-primary mt-4', attrs: {href: 'mailto:hr@e9ine.com?subject=Job application - ' + t.selectedJob.Title}}, [t._v('Apply Now')]),
                                            s('div', {staticClass: 'mt-4 mt-md-0'}, [t._v('Posted on: ' + t._s(t.selectedJob.Date))]),
                                        ]),
                                    ])
                                    : t._e(),
                            ]),
                        ],
                        1
                    );
                },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a(
                            'section',
                            {
                                staticClass: 'bg-primary imagebg height-90 d-flex align-items-center',
                                attrs: {'data-aos': 'anim', 'data-aos-id': 'we-believe', 'data-aos-once': 'true', 'data-aos-anchor-placement': 'center-bottom', id: 'we-believe'},
                            },
                            [
                                a('div', {staticClass: 'container'}, [
                                    a('div', {staticClass: 'row justify-content-center'}, [
                                        a('div', {staticClass: 'col-md-10 text-center'}, [
                                            a('h2', {staticClass: 'mb-4 text-light font-weight-demi'}, [t._v('We believe')]),
                                            a('h1', {staticClass: 'mb-5'}, [
                                                t._v('“Strive for perfection in everything you do. Take the best that exists and make it better. When it does not exist, design it.”'),
                                            ]),
                                            a('p', {staticClass: 'lead text-light mb-0'}, [t._v('Sir Henry Royce')]),
                                        ]),
                                    ]),
                                ]),
                            ]
                        );
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a(
                            'section',
                            {attrs: {id: 'particleAnimCover', 'data-aos': 'anim', 'data-aos-id': 'particle-anim', 'data-aos-once': 'true', 'data-aos-anchor-placement': 'top-bottom'}},
                            [
                                a('div', {staticClass: 'container-fluid'}, [
                                    a('h2', {staticClass: 'd-block d-lg-none'}, [t._v('Our Culture & Values')]),
                                    a('div', {staticClass: 'row'}, [
                                        a('div', {staticClass: 'col-lg-7'}, [a('div', {staticClass: 'particle-animation-container', attrs: {id: 'particleAnim'}})]),
                                        a('div', {staticClass: 'col-lg-4'}, [
                                            a('h2', {staticClass: 'd-none d-lg-block'}, [t._v('Our Culture & Values')]),
                                            a('h5', {staticClass: 'mt-4 mb-2 mt-lg-8'}, [t._v('Visionary Creators')]),
                                            a('p', {staticClass: 'mb-5 mb-lg-6'}, [
                                                t._v('Our excellence lies not only in solving today’s problems, but ensuring that tomorrow is smooth sailing too.'),
                                            ]),
                                            a('h5', {staticClass: 'mb-2'}, [t._v('Challenge Smashers')]),
                                            a('p', {staticClass: 'mb-5 mb-lg-6'}, [t._v('We love a challenge. What’s the fun if the job isn\'t striving to make the best, better?')]),
                                            a('h5', {staticClass: 'mb-2'}, [t._v('Mates, not colleagues')]),
                                            a('p', {staticClass: 'mb-5 mb-lg-6'}, [
                                                t._v('We bicker just as much as we enjoy laughs and drinks together – after all, we’re family. That\'s what makes e9 unique.'),
                                            ]),
                                            a('h5', {staticClass: 'mb-2'}, [t._v('Limitless, not limited')]),
                                            a('p', {staticClass: 'mb-5 mb-lg-6'}, [
                                                t._v(
                                                    ' We aren\'t limited to using certain software. We are always on the hunt for the latest technological advances, so that both company and client are able to grow. Inform to enlighten. The sky\'s the limit. '
                                                ),
                                            ]),
                                            a('h5', {staticClass: 'mb-2'}, [t._v('Entertainers')]),
                                            a('p', [
                                                t._v(
                                                    ' Work is work, but it\'s a part of us too. Our aim to make clients\' products entertaining extends into the office too. We love what we do, and we have fun doing it. That\'s why there\'s only one e9. '
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]
                        );
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a('div', {staticClass: 'container'}, [
                            a('div', {staticClass: 'row justify-content-center mb-4 mb-md-6 mb-lg-6'}, [
                                a('div', {staticClass: 'col-md-10 text-center'}, [
                                    a('h2', [t._v('The e9-ers')]),
                                    a('p', [
                                        t._v(
                                            ' We like to think our team is a little bit out of the ordinary. We are responsible, ethical, diverse and inclusive – people you can trust to build a better digital future, one that will work for everyone. '
                                        ),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a('div', {staticClass: 'container'}, [
                            a('div', {staticClass: 'row justify-content-center mb-4 mb-md-6 mb-lg-6'}, [a('div', {staticClass: 'col-md-10 text-center'}, [a('h2', [t._v('Partners')])])]),
                        ]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a('div', {staticClass: 'row justify-content-center mb-4 mb-lg-6'}, [
                            a('div', {staticClass: 'col-sm-10 text-center'}, [
                                a('h2', [t._v('Join Our Team')]),
                                a('p', [
                                    t._v(
                                        ' We are always on the lookout for excellent people to join our team. You need to demonstrate talent, flexibility, teamworking, a passion for customer satisfaction and above all else, having fun. '
                                    ),
                                ]),
                            ]),
                        ]);
                    },
                ],
                n = (a('4160'), a('159b'), a('9bf5')),
                o = a('8a9b'),
                r = a('448f'),
                l = a('5c62'),
                c = a('2c7f'),
                d = a('b8aa'),
                m = a('a7ab'),
                u = a.n(m),
                v = new c['a'](),
                p = {
                    components: {PageCover: l['a'], ImageCard: o['a'], VueSlickCarousel: u.a},
                    data: function () {
                        return {
                            pageTitle: 'Technically excellent, socially engaged',
                            pageDesc:
                                'We are a group of individuals, from around the world. We have different tastes, styles and personalities. Some love cricket, others love dancing. There is a cat, a dog and a few fish scattered in as well. <br /><br />Despite all these differences, we all have one thing in common, one thing we all love and that is to be able to express ourselves through our skills and attributes. Whether a developer, creative or strategist we all pull together to build amazing and engaging solutions.',
                            people: d,
                            jobs: r,
                            selectedJob: null,
                            settings: {
                                centerMode: !0,
                                centerPadding: '20px',
                                dots: !0,
                                dotsClass: 'slick-dots white-dots',
                                edgeFriction: 0.35,
                                infinite: !0,
                                variableWidth: !0,
                                speed: 800,
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                cssEase: 'ease-in-out',
                                responsive: [
                                    {breakpoint: 1366, settings: {slidesToShow: 2, slidesToScroll: 2, centerPadding: '60px'}},
                                    {breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1, centerMode: !1, centerPadding: '0'}},
                                ],
                            },
                        };
                    },
                    methods: {
                        initParticles: function () {
                            v.init(), Object(n['scrollFix'])('#particleAnim', '#particleAnimCover', 64);
                        },
                        playCarousel: function (t) {
                            t ? this.$refs.teamCarousel.play() : this.$refs.teamCarousel.pause();
                        },
                        groupBy: function (t, e) {
                            var a = {};
                            return (
                                t.forEach(function (t) {
                                    a[t[e]] || (a[t[e]] = []), a[t[e]].push(t);
                                }),
                                a
                            );
                        },
                    },
                    computed: {
                        groupedJobs: function () {
                            return this.groupBy(this.jobs, 'Location');
                        },
                    },
                    mounted: function () {
                        var t = this.$lottie.loadAnimation({
                            container: document.getElementById('teamAnim'),
                            renderer: 'svg',
                            loop: !0,
                            autoplay: !1,
                            animationData: a('d8e1'),
                            rendererSettings: {progressiveLoad: !0},
                        });
                        t.setSubframe(!1),
                        document.addEventListener('aos:in:team-anim', function () {
                            t.play();
                        }),
                        document.addEventListener('aos:out:team-anim', function () {
                            t.pause();
                        }),
                        document.addEventListener('aos:in:particle-anim', this.initParticles),
                        document.addEventListener('aos:in:we-believe', this.typeQuote);
                    },
                    beforeDestroy: function () {
                        document.removeEventListener('aos:in:particle-anim', this.initParticles);
                    },
                    metaInfo: function () {
                        return {
                            title: 'Meet the team and and opportunities at e9',
                            meta: [
                                {name: 'description', content: 'Meet our team of engaged software developers and talented individuals, job vacancies and opportunities'},
                                {name: 'keywords', content: 'team, , job, vacancies, openings, offerings, design, software, development, website, desiging'},
                            ],
                        };
                    },
                },
                h = p,
                b = (a('8b1e'), a('2877')),
                g = Object(b['a'])(h, s, i, !1, null, '8c8513c0', null);
            e['default'] = g.exports;
        },
        '6c20': function (t, e, a) {},
        '8b1e': function (t, e, a) {
            'use strict';
            var s = a('6c20'),
                i = a.n(s);
            i.a;
        },
    },
]);
