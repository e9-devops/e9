(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-2d0d0017'],
    {
        '65ac': function (e, t, s) {
            'use strict';
            s.r(t);
            var n = function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'div',
                        [
                            s('PageCover', {attrs: {title: e.pageTitle, desc: e.pageDesc}}, [
                                s('div', {attrs: {id: 'servicesAnim', 'data-aos': 'lottie', 'data-aos-id': 'services-anim', 'data-aos-mirror': 'true'}}),
                            ]),
                            s('section', {staticClass: 'pt-0 pt-lg-6 pt-xl-0'}, [
                                s('div', {staticClass: 'container'}, [
                                    e._m(0),
                                    s('div', {staticClass: 'row justify-content-between align-items-center'}, [
                                        e._m(1),
                                        s(
                                            'div',
                                            {staticClass: 'col-sm-5'},
                                            [
                                                s('h3', [e._v('Software & App Development')]),
                                                s('p', {staticClass: 'mb-5'}, [
                                                    e._v(
                                                        ' We adhere to a user-centric design ethic to make sure our systems provide real value. Our software solutions have been adopted across many business verticals, allowing companies to evolve and hit business objectives in style. '
                                                    ),
                                                ]),
                                                s('router-link', {staticClass: 'btn btn-primary', attrs: {tag: 'a', to: '/services/software-app'}}, [e._v(' Learn More ')]),
                                            ],
                                            1
                                        ),
                                    ]),
                                    s('div', {staticClass: 'row justify-content-between align-items-center mt-8'}, [
                                        e._m(2),
                                        s(
                                            'div',
                                            {staticClass: 'col-sm-5'},
                                            [
                                                s('h3', [e._v('Technical Consultancy')]),
                                                s('p', {staticClass: 'mb-5'}, [
                                                    e._v(
                                                        ' e9’s technical experts have built relationships and assisted global business, with their knowledge and understanding of complex infrastructure. We advise on how our solutions help you hit business objectives. '
                                                    ),
                                                ]),
                                                s('router-link', {staticClass: 'btn btn-primary', attrs: {tag: 'a', to: '/services/technical-consultancy'}}, [e._v(' Learn More ')]),
                                            ],
                                            1
                                        ),
                                    ]),
                                    s('div', {staticClass: 'row justify-content-between align-items-center mt-8'}, [
                                        e._m(3),
                                        s(
                                            'div',
                                            {staticClass: 'col-sm-5'},
                                            [
                                                s('h3', [e._v('Website & Branding')]),
                                                s('p', {staticClass: 'mb-5'}, [
                                                    e._v(
                                                        ' We believe the true definition of design is limitless creativity and an uncompromising eye for detail. Combine that with our tailored-to-you business strategy and you get outstanding solutions, with modern contemporary design elements. '
                                                    ),
                                                ]),
                                                s('router-link', {staticClass: 'btn btn-primary', attrs: {tag: 'a', to: '/services/website-branding'}}, [e._v(' Learn More ')]),
                                            ],
                                            1
                                        ),
                                    ]),
                                ]),
                            ]),
                        ],
                        1
                    );
                },
                a = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s('div', {staticClass: 'row'}, [
                            s('div', {staticClass: 'col-lg-10 offset-lg-1'}, [
                                s('div', {staticClass: 'text-center mb-6 mb-xl-8'}, [
                                    s('h2', {}, [e._v('Business transformation')]),
                                    s('p', [
                                        e._v(
                                            ' The services we offer include software and app solutions that are capable of transforming your business, turning your vision into a well constructed, considered reality. Our technical consulting services offer exceptional value in exploring new, web based business and brand strategies. '
                                        ),
                                        s('br'),
                                        s('br'),
                                        e._v('e9 also offers compelling website design and branding, created with an acute eye for detail while making sure your message is clear. '),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n('div', {staticClass: 'col-sm-6 mb-4 mb-md-0'}, [n('img', {attrs: {src: s('7aa7'), alt: ''}})]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n('div', {staticClass: 'col-sm-6 order-md-2 mb-4 mb-md-0'}, [n('img', {attrs: {src: s('3890'), alt: ''}})]);
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n('div', {staticClass: 'col-sm-6 mb-4 mb-md-0'}, [n('img', {attrs: {src: s('40fc'), alt: ''}})]);
                    },
                ],
                i = s('5c62'),
                o = {
                    name: 'Services',
                    components: {PageCover: i['a']},
                    data: function () {
                        return {
                            pageTitle: 'Transforming complexity into simplicity. <span class="text-primary">Beautifully.</span>',
                            pageDesc:
                                'We put our clients at the center of everything we do. Understanding their challenges, we craft solutions with pride and passion.<br /><br />e9’s competence in app development pans across industries such as transportation, telecommunication, construction and entertainment to name a few. We have a track record of providing quality mobile solutions to complex and diverse problems on both an agile short-term and long-term basis.',
                        };
                    },
                    mounted: function () {
                        var e = this.$lottie.loadAnimation({
                            container: document.getElementById('servicesAnim'),
                            renderer: 'svg',
                            loop: !0,
                            autoplay: !1,
                            animationData: s('56bd'),
                            rendererSettings: {progressiveLoad: !0},
                        });
                        e.setSubframe(!1),
                        document.addEventListener('aos:in:services-anim', function () {
                            e.play();
                        }),
                        document.addEventListener('aos:out:services-anim', function () {
                            e.pause();
                        });
                    },
                    metaInfo: function () {
                        return {
                            title: 'Software Development, consultancy and brand development - e9',
                            meta: [
                                {
                                    name: 'description',
                                    content: 'Software development, consultancy and brand development solutions, allowing you to meet business outcomes. Fast, functional and future proof',
                                },
                                {name: 'keywords', content: 'consultancy, branding, marketing, app, design, software, development, mobile, application, ios, android'},
                            ],
                        };
                    },
                },
                r = o,
                c = s('2877'),
                l = Object(c['a'])(r, n, a, !1, null, null, null);
            t['default'] = l.exports;
        },
    },
]);
