(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['app~092f1c9c'],
    {
        '23c3': function (t, e, a) {
            'use strict';
            var o = a('8144'),
                r = a.n(o);
            r.a;
        },
        '3dfd': function (t, e, a) {
            'use strict';
            var o = function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o('div', {attrs: {id: 'app'}}, [
                        t.$store.state.showStartupAnimation
                            ? o('div', {staticClass: 'video-container'}, [
                                o('video', {attrs: {playsinline: '', autoplay: '', muted: '', id: 'startup-video', controls: !1}, domProps: {muted: !0}}, [
                                    o('source', {attrs: {src: a('67c4'), type: 'video/mp4'}}),
                                    o('source', {attrs: {src: a('9a95'), type: 'video/webm'}}),
                                ]),
                            ])
                            : t._e(),
                        t.$store.state.showStartupAnimation || t.$store.state.loading
                            ? t._e()
                            : o(
                                'div',
                                {staticClass: 'content-wrapper'},
                                [o('AppHeader'), o('Breadcrumbs'), o('router-view', {key: t.$route.fullPath}), o('AppFooter'), o('div', {attrs: {id: 'back-to-top'}})],
                                1
                            ),
                    ]);
                },
                r = [],
                n = a('5530'),
                s = a('9bf5'),
                i = a('2f62'),
                c = a('ec0b'),
                p = a('3f6f'),
                d = a('c6d2'),
                u = {
                    name: 'App',
                    components: {AppHeader: p['a'], Breadcrumbs: d['a'], AppFooter: c['a']},
                    methods: Object(n['a'])({}, Object(i['b'])(['toggleStartupAnimation'])),
                    mounted: function () {
                        var t = this;
                        if (this.$store.state.showStartupAnimation) {
                            var e = document.getElementById('startup-video');
                            e.onended = function () {
                                t.toggleStartupAnimation(), (localStorage.videoSeen = !0);
                            };
                        }
                        Object(s['greet'])();
                    },
                },
                l = u,
                m = (a('23c3'), a('2877')),
                v = Object(m['a'])(l, o, r, !1, null, '02de78f1', null);
            e['a'] = v.exports;
        },
        8144: function (t, e, a) {},
    },
]);
