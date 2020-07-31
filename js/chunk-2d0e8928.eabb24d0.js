(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-2d0e8928'],
    {
        '8a9b': function (t, a, e) {
            'use strict';
            var i = function () {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i(
                        'div',
                        {
                            staticClass: 'card-wrapper',
                            class: [t.tilt ? 'card-wrapper-tilt' : '', t.size ? 'card-wrapper-' + t.size : '', t.overlay ? 'card-wrapper-overlay' : '', t.hover ? 'card-wrapper-hover' : ''],
                            attrs: {id: 'card-' + t.id, 'data-aos': t.animation, 'data-aos-once': 'true'},
                        },
                        [
                            i('router-link', {staticClass: 'card-img-wrapper', attrs: {tag: 'div', to: t.item.Path ? t.item.Path : ''}}, [
                                i('a', {staticClass: 'card-img'}, [
                                    i('div', {staticClass: 'video-wrapper'}, [
                                        t.item.VideoURL
                                            ? i('video', {attrs: {loop: '', muted: '', poster: e('7584')('./' + t.item.ImageURL)}, domProps: {muted: !0}}, [
                                                i('source', {attrs: {src: t.getVideoPath('mp4'), type: 'video/mp4'}}),
                                                i('source', {attrs: {src: t.getVideoPath('webm'), type: 'video/webm'}}),
                                            ])
                                            : t._e(),
                                    ]),
                                    i('div', {staticClass: 'img-shadow'}),
                                    i('div', {staticClass: 'card-overlay'}),
                                    i('img', {attrs: {src: t.getImgPath(t.item.ImageURL), loading: 'lazy'}}),
                                ]),
                                t.overlay
                                    ? i('div', {staticClass: 'card-info'}, [
                                        i('h4', {staticClass: 'font-weight-demi'}, [t._v(t._s(t.item.Title))]),
                                        i('p', {staticClass: 'mb-0 text-muted'}, [t._v(t._s(t.item.Description))]),
                                    ])
                                    : t._e(),
                            ]),
                            t.overlay
                                ? t._e()
                                : i('div', {staticClass: 'card-info'}, [
                                    i('h4', {staticClass: 'font-weight-demi'}, [t._v(t._s(t.item.Title))]),
                                    i('p', {staticClass: 'subtitle'}, [t._v(t._s(t.item.Subtitle))]),
                                ]),
                        ],
                        1
                    );
                },
                s = [],
                r =
                    (e('99af'),
                    e('cd57'),
                    {
                        name: 'ImageCard',
                        props: ['item', 'size', 'overlay', 'animation', 'tilt', 'hover'],
                        data: function () {
                            return {id: null};
                        },
                        methods: {
                            getVideoPath: function (t) {
                                var a = '/assets/'.concat(this.item.VideoURL, '.').concat(t);
                                return a;
                            },
                            getImgPath: function (t) {
                                return e('7584')('./'.concat(t));
                            },
                        },
                        created: function () {
                            this.id = this._uid;
                        },
                        mounted: function () {
                            if ((this.tilt && window.$('.card-img-wrapper').tilt({perspective: 400, maxTilt: 3, scale: 1.05, transition: !1}), this.item.VideoURL)) {
                                var t = document.querySelector('#card-' + this.id + ' video');
                                window.$('#card-' + this.id + ' .card-img').hover(e, i);
                            }
                            var a;
                            function e() {
                                (t.style.display = 'block'), (t.currentTime = 0), (a = t.play());
                            }
                            function i() {
                                (t.style.display = 'none'),
                                void 0 !== a &&
                                        a
                                            .then(function () {
                                                t.pause();
                                            })
                                            .catch(function () {});
                            }
                        },
                    }),
                o = r,
                c = e('2877'),
                d = Object(c['a'])(o, i, s, !1, null, null, null);
            a['a'] = d.exports;
        },
    },
]);
