(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['app~abba0c8d'],
    {
        ddb8: function (o, e, n) {
            'use strict';
            var r,
                i = n('9483');
            Object(i['a'])(''.concat('/', 'service-worker.js'), {
                ready: function () {
                    console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB');
                },
                registered: function () {
                    console.log('Service worker has been registered.');
                },
                cached: function () {
                    console.log('Content has been cached for offline use.');
                },
                updatefound: function () {
                    console.log('New content is downloading.');
                },
                updated: function () {
                    console.log('New content is available; please refresh.');
                    var o = confirm('New content found! Do you want to reload the app?');
                    if (o) {
                        if (r) return;
                        window.location.reload(), (r = !0);
                    }
                },
                offline: function () {
                    console.log('No internet connection found. App is running in offline mode.');
                },
                error: function (o) {
                    console.error('Error during service worker registration:', o);
                },
            });
        },
    },
]);