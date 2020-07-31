(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-2d2299f6'],
    {
        dddd: function (e, t, a) {
            'use strict';
            a.r(t);
            var i = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i(
                        'div',
                        [
                            i('PageCover', {attrs: {'img-url': e.logoUrl, desc: e.pageDesc, 'link-text': e.websiteLinkText, 'link-url': e.websiteLinkUrl}}, [
                                i('div', {attrs: {id: 'cab9Anim', 'data-aos': 'lottie', 'data-aos-id': 'cab9-anim', 'data-aos-mirror': 'true'}}),
                            ]),
                            i(
                                'ImageSection',
                                {
                                    staticClass: 'pt-0 pb-6 pb-lg-0',
                                    attrs: {
                                        title: 'Empowering UK ground transport',
                                        desc:
                                            'After consultation with industry experts, Cab9 was developed from the ground up. Answering real issues facing ground transport companies in the UK. This enabled us to create features, modules and reports that actually provide valuable and actionable information. Integration with other platforms is supported giving you, as a business owner the opportunity for growth and expansion. Each area of the solution is clear to understand and interact with, making it engaging to use, which encourages quick adoption among your work force. With nationwide subscribers to the platform, some running fleets in excess of 400 drivers, Cab9 is quickly becoming best in class',
                                    },
                                },
                                [i('img', {attrs: {src: a('8bbe'), alt: ''}})]
                            ),
                            i(
                                'ImageBlock',
                                {
                                    staticClass: 'mt-lg-6',
                                    attrs: {
                                        height: 60,
                                        'container-class': 'pt-lg-0 pb-lg-0',
                                        'media-align': 'left',
                                        title: 'Innovative way to manage your private hire & taxi business',
                                        desc:
                                            'Cab9 has been designed to allow you to focus on growth and real business, rather than worrying about pricing, record keeping and invoicing. The system offers a range of pricing functions, so no matter what the job, you will get an accurate price at your fingertips. Providing data to local authorities becomes simple, with the array of reports which can be created. Financial tracking including invoicing and driver pay is all taken care of.',
                                    },
                                },
                                [i('div', {staticClass: 'col-10'}, [i('img', {attrs: {src: a('b11c'), alt: ''}})])]
                            ),
                            i(
                                'ImageBlock',
                                {
                                    attrs: {
                                        height: 60,
                                        'media-align': 'right',
                                        title: 'Keeping clients at the heart of your business',
                                        desc:
                                            'Keeping clients happy is always a focus. With our client modules you can set specific parameters to ensure the client always gets what they want. This might be a specific vehicle type at a set rate, only certain drivers or collection from a predetermined location. Whatever your clients’ needs are, you can rest assured Cab9 will help you deliver consistent results. As well as the usual web booking to go on your website, we offer client specific portals, adding that personal touch.',
                                    },
                                },
                                [i('div', {staticClass: 'col-10'}, [i('img', {attrs: {src: a('0cfb2'), alt: ''}})])]
                            ),
                            i(
                                'ImageBlock',
                                {
                                    attrs: {
                                        height: 60,
                                        'media-align': 'left',
                                        title: 'Intuitive driver app with seamless route management',
                                        desc:
                                            'Drivers are at the heart of your business and our driver app reflects this. Simple to use and understand, the driver app keeps Information to hand. Bookings, earnings and navigation are just some of the benefits it offers. If you need to speak to your drivers, we have included Cab9 chat, which allows you to keep in communication with your fleet.',
                                    },
                                },
                                [i('div', {staticClass: 'col-10 col-md-8'}, [i('img', {attrs: {src: a('baa9'), alt: ''}})])]
                            ),
                            i(
                                'ImageBlock',
                                {
                                    staticClass: 'mb-0 mb-xl-8',
                                    attrs: {
                                        height: 60,
                                        'media-align': 'right',
                                        title: 'Integrations and work share',
                                        desc:
                                            'Integration with other platforms and the ability to cover work has been harnessed. Connecting with service providers and aggregators used to be awkward, not with Cab9. We understand the importance of integration and have made it a simple part of your workflow. Our inbuilt workshare platform provides you the ability to make sure bookings are covered with partners you trust.',
                                    },
                                },
                                [i('div', {staticClass: 'col-10'}, [i('img', {attrs: {src: a('3f0e'), alt: ''}})])]
                            ),
                            i('AppScreens', {
                                staticClass: 'bg-primary-light',
                                attrs: {
                                    title: 'And what about…',
                                    desc:
                                        'We didn’t want to go into every detail, but we certainly offer all the other components you would expect in a top-class dispatch system from Google maps integration, flight tracking and call popping. SMS messaging systems and beautifully crafted email templates both with driver tracking. To really learn about Cab9 please visit our dedicated <a href=\'https://cab9.app/\' target=\'_blank\' class=\'font-weight-demi\'>Cab9</a> website.',
                                    imgArray: e.appScreens,
                                },
                            }),
                            i('NextCase', {attrs: {name: 'Cinemas Online', link: '/case-studies/cinemas-online'}}),
                        ],
                        1
                    );
                },
                n = [],
                s = a('9178'),
                o = a('4b12'),
                r = a('5897'),
                c = a('c5cf'),
                l = a('5c62'),
                d = {
                    name: 'Cab9View',
                    components: {PageCover: l['a'], ImageBlock: o['a'], ImageSection: r['a'], AppScreens: s['a'], NextCase: c['a']},
                    data: function () {
                        return {
                            logoUrl: 'products/cab9/logo.png',
                            pageDesc:
                                'e9 has developed a trinity of a high-functioning dispatch system, driver app and passenger app, created to ease the day-to-day functioning of private hire businesses in the UK.',
                            websiteLinkText: 'Visit Website',
                            websiteLinkUrl: 'https://cab9.app/',
                            appScreens: ['products/cab9/flexible.png', 'products/cab9/instant.png', 'products/cab9/on-demand.png'],
                        };
                    },
                    mounted: function () {
                        var e = this.$lottie.loadAnimation({
                            container: document.getElementById('cab9Anim'),
                            renderer: 'svg',
                            loop: !0,
                            autoplay: !1,
                            animationData: a('a34a'),
                            rendererSettings: {progressiveLoad: !0},
                        });
                        e.setSubframe(!1),
                        document.addEventListener('aos:in:cab9-anim', function () {
                            e.play();
                        }),
                        document.addEventListener('aos:out:cab9-anim', function () {
                            e.pause();
                        });
                    },
                    metaInfo: function () {
                        return {
                            title: 'Cab9 | software case study - e9',
                            meta: [
                                {name: 'description', content: 'A world class, powerful, Simple and Innovative way to manage your Private Hire & Taxi Business'},
                                {name: 'keywords', content: 'case, study, cab9,development, software, brand, saas, solutions'},
                            ],
                        };
                    },
                },
                u = d,
                p = a('2877'),
                g = Object(p['a'])(u, i, n, !1, null, null, null);
            t['default'] = g.exports;
        },
    },
]);
