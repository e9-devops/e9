(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-6cc003d8'],
    {
        '3f80': function (t, i, n) {},
        5897: function (t, i, n) {
            'use strict';
            var e = function () {
                    var t = this,
                        i = t.$createElement,
                        n = t._self._c || i;
                    return n(
                        'section',
                        {class: t.height ? 'height-' + t.height : ''},
                        [
                            n('div', {staticClass: 'container'}, [
                                n('div', {staticClass: 'row justify-content-center mb-4 mb-lg-6'}, [
                                    n('div', {staticClass: 'col-lg-10 text-center'}, [
                                        n('h2', [t._v(t._s(t.title))]),
                                        n('p', [t._v(t._s(t.desc))]),
                                        t.linkUrl
                                            ? n(
                                                'div',
                                                {staticClass: 'mt-5'},
                                                [
                                                    t.linkUrl.indexOf('http') > -1 || t.linkUrl.indexOf('http') > -1
                                                        ? n('a', {staticClass: 'btn btn-primary', on: {click: t.callAction}}, [t._v(t._s(t.linkText))])
                                                        : n('router-link', {staticClass: 'btn btn-primary', attrs: {to: t.linkUrl}}, [t._v(t._s(t.linkText))]),
                                                ],
                                                1
                                            )
                                            : t._e(),
                                    ]),
                                ]),
                            ]),
                            t._t('default'),
                        ],
                        2
                    );
                },
                s = [],
                l =
                    (n('a9e3'),
                    {
                        name: 'ImageSection',
                        props: {title: {type: String}, desc: {type: String, required: !0}, height: {type: Number}, linkUrl: {type: String}, linkText: {type: String}, linkAction: {type: Function}},
                        methods: {
                            callAction: function () {
                                this.action ? this.action() : this.linkUrl && (window.location = this.linkUrl);
                            },
                        },
                    }),
                c = l,
                a = (n('ffba'), n('2877')),
                r = Object(a['a'])(c, e, s, !1, null, '74347812', null);
            i['a'] = r.exports;
        },
        ffba: function (t, i, n) {
            'use strict';
            var e = n('3f80'),
                s = n.n(e);
            s.a;
        },
    },
]);
