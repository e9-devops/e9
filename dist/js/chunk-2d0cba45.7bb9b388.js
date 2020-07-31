(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-2d0cba45'],
    {
        '4b12': function (t, i, n) {
            'use strict';
            var l = function () {
                    var t = this,
                        i = t.$createElement,
                        n = t._self._c || i;
                    return n('section', {staticClass: 'imageblock d-lg-flex align-items-center', class: 'height-' + t.height}, [
                        n(
                            'div',
                            {staticClass: 'imageblock__content col-lg-6 d-flex align-items-center', class: ['pos-' + t.mediaAlign, 'left' == t.mediaAlign ? 'justify-content-end' : '']},
                            [t._t('default')],
                            2
                        ),
                        n('div', {staticClass: 'container', class: t.containerClass}, [
                            n('div', {staticClass: 'row', class: 'left' == t.mediaAlign ? 'justify-content-end' : ''}, [
                                n('div', {staticClass: 'col-lg-5'}, [
                                    t.title ? n('h3', [t._v(t._s(t.title))]) : t._e(),
                                    n('p', [t._v(' ' + t._s(t.desc) + ' ')]),
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
                    ]);
                },
                e = [],
                s =
                    (n('a9e3'),
                    {
                        name: 'ImageBlock',
                        props: {
                            title: {type: String},
                            mediaAlign: {type: String, default: 'right'},
                            imgUrl: {type: String},
                            desc: {type: String, required: !0},
                            height: {type: Number, default: 60},
                            linkUrl: {type: String},
                            linkText: {type: String},
                            linkAction: {type: Function},
                            containerClass: {type: String},
                        },
                        methods: {
                            getImgPath: function () {
                                return this.imgUrl ? n('7584')('./'.concat(this.imgUrl)) : '';
                            },
                            callAction: function () {
                                this.action ? this.action() : this.linkUrl && (window.location = this.linkUrl);
                            },
                        },
                    }),
                a = s,
                c = n('2877'),
                r = Object(c['a'])(a, l, e, !1, null, null, null);
            i['a'] = r.exports;
        },
    },
]);
