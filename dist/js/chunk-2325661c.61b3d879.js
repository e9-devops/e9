(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-2325661c'],
    {
        '4cbe': function (e, t, i) {
            'use strict';
            var a = i('8287'),
                s = i.n(a);
            s.a;
        },
        8287: function (e, t, i) {},
        b7ed: function (e, t, i) {
            'use strict';
            i.r(t);
            var a = function () {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a(
                        'div',
                        [
                            a('PageCover', {attrs: {'img-url': e.logoUrl, desc: e.pageDesc}}, [
                                a('div', {attrs: {id: 'infi9ityAnim', 'data-aos': 'lottie', 'data-aos-id': 'infi9ity-anim', 'data-aos-mirror': 'true'}}),
                            ]),
                            a(
                                'ImageSection',
                                {
                                    staticClass: 'pt-0 pb-lg-0',
                                    attrs: {
                                        title: 'Integrations for seamless booking management',
                                        desc:
                                            'Integrations via API to 3rd party management systems and portals, create a seamless transition for the digital booking experience. Fewer touchpoints, greater transactional security and true visibility for the consumer and all service providers involved in the journey.',
                                    },
                                },
                                [
                                    a('div', {staticClass: 'container'}, [
                                        a('div', {staticClass: 'row justify-content-center'}, [a('div', {staticClass: 'col-lg-10 col-md-12 col-11'}, [a('img', {attrs: {src: i('4757'), alt: ''}})])]),
                                    ]),
                                ]
                            ),
                            a(
                                'ImageBlock',
                                {
                                    attrs: {
                                        height: 60,
                                        'media-align': 'right',
                                        title: 'Complete booking visibility',
                                        desc:
                                            'The visibility Infi9ity provides is essential to its success. It allows continuity in service standards across countries. Completed journey legs can be seen at specific predetermined levels depending on the user\'s access, this gives peace of mind to all involved, knowing passengers are being looked after every step of the way.',
                                    },
                                },
                                [a('div', {staticClass: 'col-lg-10 col-md-12 col-11'}, [a('img', {attrs: {src: i('4d6d'), alt: ''}})])]
                            ),
                            a(
                                'ImageBlock',
                                {
                                    attrs: {
                                        height: 60,
                                        'container-class': 'pt-lg-6 pb-lg-6',
                                        'media-align': 'left',
                                        title: 'Tailor the journey to your needs',
                                        desc:
                                            'Our ever growing network offers massive value to fleet owners, with more work opportunities in a disrupted marketplace. Also with a large network, many different levels of service provider are available, so it is easy to match passengers with the service they want - we do not fit round pegs in square holes.',
                                    },
                                },
                                [a('div', {staticClass: 'col-lg-10 col-md-12 col-11'}, [a('img', {attrs: {src: i('2873'), alt: ''}})])]
                            ),
                            a(
                                'ImageBlock',
                                {
                                    attrs: {
                                        height: 60,
                                        'media-align': 'right',
                                        title: 'Prebooked or on demand',
                                        desc:
                                            'The platform has been developed to supply on demand transportation solutions as well as pre-booked travel. Industry and corporate clients use infi9ity at short notice to move people, in comfort and safety to and from events, gatherings and meetings via our individualised user portals.',
                                    },
                                },
                                [a('div', {staticClass: 'col-lg-10 col-md-12 col-11'}, [a('img', {attrs: {src: i('5a57'), alt: ''}})])]
                            ),
                            e._m(0),
                            a('NextCase', {attrs: {name: 'Reps UK', link: '/case-studies/reps-uk'}}),
                        ],
                        1
                    );
                },
                s = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            a = e._self._c || t;
                        return a('section', {staticClass: 'bg-primary-light'}, [
                            a('div', {staticClass: 'container'}, [
                                a('div', {staticClass: 'row'}, [
                                    a('div', {staticClass: 'col-lg-10 offset-lg-1'}, [
                                        a('div', {staticClass: 'text-center mb-6'}, [
                                            a('h2', {}, [e._v('Stay ahead with the management suite.')]),
                                            a('p', [
                                                e._v(
                                                    'Infi9inty is built with a comprehensive suite of billing and management functions, with insightful reports, policy tools and cost tracking. This allows you to stay in control at all times. With flexible billing options, fully automated expense reports and invoicing, you can now focus on what’s important. '
                                                ),
                                            ]),
                                        ]),
                                        a('img', {attrs: {src: i('5b59'), alt: ''}}),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                ],
                n = i('4b12'),
                o = i('5897'),
                r = i('c5cf'),
                l = i('5c62'),
                c = {
                    name: 'Cab9View',
                    components: {PageCover: l['a'], ImageBlock: n['a'], ImageSection: o['a'], NextCase: r['a']},
                    data: function () {
                        return {
                            logoUrl: 'products/infi9ity/logo.png',
                            pageDesc:
                                'Infi9ity makes end to end ground transportation solutions easy to manage for customers and service providers. Connecting people to the services they deserve is important to us, allowing everyone to harness the personal, high quality service they expect from local transportation companies. Passengers can travel in style, with the confidence that Infi9ity partners are trustworthy and professional.',
                        };
                    },
                    mounted: function () {
                        var e = this.$lottie.loadAnimation({
                            container: document.getElementById('infi9ityAnim'),
                            renderer: 'svg',
                            loop: !0,
                            autoplay: !1,
                            animationData: i('6a93'),
                            rendererSettings: {progressiveLoad: !0},
                        });
                        e.setSubframe(!1),
                        document.addEventListener('aos:in:infi9ity-anim', function () {
                            e.play();
                        }),
                        document.addEventListener('aos:out:infi9ity-anim', function () {
                            e.pause();
                        });
                    },
                    metaInfo: function () {
                        return {
                            title: 'Infi9ity | software case study - e9',
                            meta: [
                                {
                                    name: 'description',
                                    content:
                                        'Infi9ity makes end to end ground transportation solutions easy to manage for customers and service providers. Connecting people to the high quality service they expect from local transportation companies',
                                },
                                {name: 'keywords', content: 'case, study, infi9ity, software, brand, saas, solutions'},
                            ],
                        };
                    },
                },
                d = c,
                m = (i('4cbe'), i('2877')),
                g = Object(m['a'])(d, a, s, !1, null, '4950d209', null);
            t['default'] = g.exports;
        },
    },
]);
