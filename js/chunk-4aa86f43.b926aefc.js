(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-4aa86f43'],
    {
        '31ff': function (t, e, a) {
            'use strict';
            var n = a('55f4'),
                r = a.n(n);
            r.a;
        },
        '55f4': function (t, e, a) {},
        6590: function (t, e, a) {
            'use strict';
            a.r(e);
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a('div', [
                        a('section', {staticClass: 'text-top'}, [
                            a('div', {staticClass: 'container'}, [
                                a('div', {staticClass: 'row'}, [
                                    a('div', {staticClass: 'col-lg-10 offset-lg-1'}, [
                                        a('h1', {staticClass: 'mb-lg-4'}, [t._v('Case Studies')]),
                                        a('p', {staticClass: 'lead emphasis'}, [
                                            t._v(
                                                ' e9’s competence in app development pans across sectors such as transportation, telecommunication, construction, entertainment and entertainment to name a few. '
                                            ),
                                        ]),
                                        a('p', {staticClass: 'mb-6'}, [
                                            t._v(
                                                ' We have a track record of providing quality mobile solutions to complex and diverse problems on both an agile short-term and long-term basis. Below are examples of some of our work. '
                                            ),
                                        ]),
                                        a('div', {staticClass: 'work-filters-wrapper mb-6 mt-3'}, [
                                            a('div', {staticClass: 'work-filter', class: t.expand ? 'expand' : ''}, [
                                                a('p', [
                                                    t._v('Show me '),
                                                    a(
                                                        'a',
                                                        {
                                                            attrs: {href: ''},
                                                            on: {
                                                                click: function (e) {
                                                                    e.preventDefault(), (t.expand = !t.expand);
                                                                },
                                                            },
                                                        },
                                                        [a('strong', [t._v(t._s(t.currentCategory || 'Featured'))]), a('i', {staticClass: 'fa fa-angle-down', attrs: {'aria-hidden': 'true'}})]
                                                    ),
                                                ]),
                                                a('div', {staticClass: 'work-filter-options'}, [
                                                    a('br'),
                                                    a('br'),
                                                    a('ul', {staticClass: 'list-unstyled'}, [
                                                        a('li', [
                                                            a(
                                                                'a',
                                                                {
                                                                    class: {selected: !t.currentCategory},
                                                                    attrs: {href: ''},
                                                                    on: {
                                                                        click: function (e) {
                                                                            return e.preventDefault(), t.setCurrentCategory();
                                                                        },
                                                                    },
                                                                },
                                                                [t._v('Featured')]
                                                            ),
                                                        ]),
                                                        a('li', [
                                                            a(
                                                                'a',
                                                                {
                                                                    class: {selected: 'Software & App' == t.currentCategory},
                                                                    attrs: {href: ''},
                                                                    on: {
                                                                        click: function (e) {
                                                                            return e.preventDefault(), t.setCurrentCategory('Software & App');
                                                                        },
                                                                    },
                                                                },
                                                                [t._v('Software & App')]
                                                            ),
                                                        ]),
                                                        a('li', [
                                                            a(
                                                                'a',
                                                                {
                                                                    class: {selected: 'Technical Consultancy' == t.currentCategory},
                                                                    attrs: {href: ''},
                                                                    on: {
                                                                        click: function (e) {
                                                                            return e.preventDefault(), t.setCurrentCategory('Technical Consultancy');
                                                                        },
                                                                    },
                                                                },
                                                                [t._v('Technical Consultancy')]
                                                            ),
                                                        ]),
                                                        a('li', [
                                                            a(
                                                                'a',
                                                                {
                                                                    class: {selected: 'Website & Branding' == t.currentCategory},
                                                                    attrs: {href: ''},
                                                                    on: {
                                                                        click: function (e) {
                                                                            return e.preventDefault(), t.setCurrentCategory('Website & Branding');
                                                                        },
                                                                    },
                                                                },
                                                                [t._v('Website & Branding')]
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]),
                                        ]),
                                        a(
                                            'div',
                                            {staticClass: 'row justify-content-between'},
                                            t._l(t.filteredWork, function (t, e) {
                                                return a(
                                                    'div',
                                                    {key: t.Category + t._id, staticClass: 'col-xl-5 col-md-6 mt-0 mb-5 mb-md-2 mb-xl-5', class: {'mt-xl-6 mt-md-5': e % 2 === 0}},
                                                    [a('ImageCard', {staticClass: 'p-lg-3 p-xl-0', attrs: {item: t, animation: 'fade-up', tilt: !0}})],
                                                    1
                                                );
                                            }),
                                            0
                                        ),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]);
                },
                r = [],
                s = (a('4de4'), a('c975'), a('8a9b')),
                o = a('7ba0'),
                i = {
                    name: 'Cases',
                    components: {ImageCard: s['a']},
                    data: function () {
                        return {work: o, currentCategory: null, expand: !1};
                    },
                    methods: {
                        setCurrentCategory: function (t) {
                            this.currentCategory = t;
                        },
                    },
                    computed: {
                        filteredWork: function () {
                            var t = this;
                            return this.currentCategory
                                ? this.work.filter(function (e) {
                                    return e.Category.indexOf(t.currentCategory) > -1;
                                })
                                : this.work;
                        },
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
                c = i,
                l = (a('31ff'), a('2877')),
                u = Object(l['a'])(c, n, r, !1, null, '621e8b5e', null);
            e['default'] = u.exports;
        },
    },
]);
