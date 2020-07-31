(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-054728bb'],
    {
        9178: function (t, e, n) {
            'use strict';
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n('section', [
                        n(
                            'div',
                            {staticClass: 'container'},
                            [
                                t.title || t.desc
                                    ? n('div', {staticClass: 'row justify-content-center mb-4 mb-lg-6'}, [
                                        n('div', {staticClass: 'col-sm-10 text-center'}, [n('h2', [t._v(t._s(t.title) + ' ')]), n('p', {domProps: {innerHTML: t._s(t.desc)}})]),
                                    ])
                                    : t._e(),
                                t._l(t.imgChunks, function (e, a) {
                                    return n(
                                        'div',
                                        {key: a, staticClass: 'row'},
                                        t._l(e, function (e, a) {
                                            return n(
                                                'div',
                                                {
                                                    key: a,
                                                    staticClass: 'col-sm-4',
                                                    attrs: {'data-aos': 0 == a ? 'fade-left' : 2 == a ? 'fade-right' : '', 'data-aos-once': 'true', 'data-aos-anchor-placement': 'center-bottom'},
                                                },
                                                [n('img', {attrs: {src: t.getImgPath(e)}})]
                                            );
                                        }),
                                        0
                                    );
                                }),
                            ],
                            2
                        ),
                    ]);
                },
                c = [],
                s = n('9bf5'),
                r = {
                    name: 'AppScreens',
                    props: {title: {type: String}, desc: {type: String}, imgArray: {type: Array, required: !0}},
                    methods: {
                        getImgPath: function (t) {
                            return n('7584')('./'.concat(t));
                        },
                    },
                    computed: {
                        imgChunks: function () {
                            return Object(s['chunk'])(this.imgArray, 3);
                        },
                    },
                },
                i = r,
                o = (n('c05a'), n('2877')),
                u = Object(o['a'])(i, a, c, !1, null, 'c26d3a22', null);
            e['a'] = u.exports;
        },
        a3c5: function (t, e, n) {},
        c05a: function (t, e, n) {
            'use strict';
            var a = n('a3c5'),
                c = n.n(a);
            c.a;
        },
    },
]);
