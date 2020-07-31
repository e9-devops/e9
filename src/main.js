import App from './App.vue';
import Vue from 'vue';
import VueMeta from 'vue-meta';

import AOS from '@/assets/js/aos';
import jQuery from 'jquery';
import lottie from 'lottie-web';
import router from './router';
import store from './store';

import './registerServiceWorker';
import '@/scss/main.scss';

Vue.prototype.$lottie = lottie;
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
    router,
    store,
    mounted() {
        AOS.init();
    },
    render: (h) => h(App),
}).$mount('#app');
