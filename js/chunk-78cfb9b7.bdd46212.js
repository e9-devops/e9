(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-78cfb9b7'],
    {
        '011a': function (e, t, s) {
            'use strict';
            var a = s('5fa9'),
                n = s.n(a);
            n.a;
        },
        '5fa9': function (e, t, s) {},
        d196: function (e, t, s) {
            'use strict';
            s.r(t);
            var a = function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'div',
                        [
                            e._m(0),
                            e._m(1),
                            e._m(2),
                            s('div', {staticClass: 'container-fluid'}, [
                                s('div', {staticClass: 'row justify-content-center'}, [
                                    s('div', {staticClass: 'col-xl-10 col-md-11'}, [s('AppScreens', {staticClass: 'brand-light-bg pt-8 pt-lg-9', attrs: {imgArray: e.appScreens}})], 1),
                                ]),
                            ]),
                            s('NextCase', {attrs: {name: 'LPHCA', link: '/case-studies/lphca'}}),
                        ],
                        1
                    );
                },
                n = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            a = e._self._c || t;
                        return a('section', {staticClass: 'pb-0 text-top'}, [
                            a('div', {staticClass: 'container'}, [
                                a('div', {staticClass: 'row mb-4 mb-lg-6 align-items-end'}, [
                                    a('div', {staticClass: 'col-lg-6'}, [
                                        a('img', {staticClass: 'brand-logo mb-1', attrs: {src: s('1736'), alt: ''}}),
                                        a('p', {staticClass: 'mb-4'}, [e._v('Assisting Sherbet drive down carbon emissions')]),
                                    ]),
                                    a('div', {staticClass: 'col-lg-6'}, [
                                        a('p', {staticClass: 'lead'}, [e._v('Sherbet Ride is a 500 strong all-electric taxi fleet which offers a green transport solution in and around London. ')]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            a = e._self._c || t;
                        return a('section', {staticClass: 'imagebg no-content', attrs: {'data-overlay': '1'}}, [
                            a('div', {staticClass: 'background-image-holder'}, [a('img', {attrs: {src: s('5aed'), alt: ''}})]),
                        ]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            a = e._self._c || t;
                        return a('section', {staticClass: 'pb-6 pb-xl-8'}, [
                            a('div', {staticClass: 'container'}, [
                                a('div', {staticClass: 'row justify-content-center'}, [
                                    a('div', {staticClass: 'col-sm-11'}, [
                                        a('img', {attrs: {src: s('33e0'), alt: '', 'data-aos': 'fade-up', 'data-aos-once': 'true', 'data-aos-anchor-placement': 'center-bottom'}}),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                ],
                c = s('9bf5'),
                i = s('9178'),
                r = s('c5cf'),
                o = {
                    name: 'Sherbet',
                    components: {AppScreens: i['a'], NextCase: r['a']},
                    data: function () {
                        return {appScreens: ['services/consultancy/sherbet/booking-1.png', 'services/consultancy/sherbet/booking-2.png', 'services/consultancy/sherbet/booking-3.png']};
                    },
                    mounted: function () {
                        Object(c['setBackgroundImage'])();
                    },
                    metaInfo: function () {
                        return {
                            title: 'Sherbet Ride | consultancy case study - e9',
                            meta: [
                                {
                                    name: 'description',
                                    content:
                                        'Technical consultancy with Sherbet Ride identified the need for a modern and progressive user experience for ride hailing. Business processes were established, a project to develop an intuitive user app experience was scoped to establish Sherbet Ride as market leaders',
                                },
                                {name: 'keywords', content: 'case, study, sherbet, ride, app, development, software, brand, consultancy, services, consultant'},
                            ],
                        };
                    },
                },
                l = o,
                d = (s('011a'), s('2877')),
                u = Object(d['a'])(l, a, n, !1, null, 'e336e204', null);
            t['default'] = u.exports;
        },
    },
]);
