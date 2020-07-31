import '@/assets/js/revealer';
import Home from '../views/Home.vue';
import store from '../store';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/products/Products.vue'),
    },
    {
        path: '/case-studies/cab9',
        name: 'Cab9',
        component: () => import('../views/products/Cab9.vue'),
    },
    {
        path: '/case-studies/cinemas-online',
        name: 'Cinemas Online',
        component: () => import('../views/products/CinemasOnline.vue'),
    },
    {
        path: '/case-studies/infi9ity',
        name: 'Infi9ity',
        component: () => import('../views/products/Infi9ity.vue'),
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../views/services/Services.vue'),
    },
    {
        path: '/services/website-branding',
        name: 'Website & Branding',
        component: () => import('../views/services/WebsiteBranding.vue'),
    },
    {
        path: '/case-studies/iclondon-theo2',
        name: 'InterContinental London - The O2',
        component: () => import('../views/services/websites/ICL.vue'),
        meta: {
            color: '#c8ba8c',
        },
    },
    {
        path: '/case-studies/o2-wifi',
        name: 'O2 Wifi',
        component: () => import('../views/services/websites/O2Wifi.vue'),
        meta: {
            color: '#032b5a',
        },
    },
    {
        path: '/case-studies/lphca-website',
        name: 'LPHCA ',
        component: () => import('../views/services/websites/LPHCA.vue'),
        meta: {
            color: '#214291',
        },
    },
    {
        path: '/case-studies/arora-group',
        name: 'Arora Group',
        component: () => import('../views/services/websites/AroraGroup.vue'),
        meta: {
            color: '#163E7B',
        },
    },
    {
        path: '/case-studies/excel-exec',
        name: 'Excel Executive',
        component: () => import('../views/services/websites/ExcelExec.vue'),
        meta: {
            color: '#0A4EB4',
        },
    },
    {
        path: '/case-studies/reel-cinemas',
        name: 'Reel Cinemas',
        component: () => import('../views/services/websites/ReelCinemas.vue'),
        meta: {
            color: '#3e84de',
        },
    },
    {
        path: '/services/software-app',
        name: 'Software & App Development',
        component: () => import('../views/services/SoftwareApp.vue'),
    },
    {
        path: '/case-studies/telefonica-o2',
        name: 'Telefonica O2',
        component: () => import('../views/services/apps/TelefonicaO2.vue'),
        meta: {
            color: '#032b5a',
        },
    },
    {
        path: '/case-studies/citysprint',
        name: 'CitySprint',
        component: () => import('../views/services/apps/CitySprint.vue'),
        meta: {
            color: '#0194D3',
        },
    },
    {
        path: '/case-studies/ontraccs',
        name: 'Ontraccs',
        component: () => import('../views/services/apps/Ontraccs.vue'),
        meta: {
            color: '#68B8F6',
        },
    },
    {
        path: '/case-studies/itv',
        name: 'ITV',
        component: () => import('../views/services/apps/ITV.vue'),
        meta: {
            color: '#dc0164',
        },
    },
    {
        path: '/case-studies/reps-uk',
        name: 'Reps UK',
        component: () => import('../views/services/apps/RepsUK.vue'),
        meta: {
            color: '#F89605',
        },
    },
    {
        path: '/services/technical-consultancy',
        name: 'Technical Consultancy',
        component: () => import('../views/services/TechnicalConsultancy.vue'),
    },
    {
        path: '/case-studies/sherbet-ride',
        name: 'Sherbet',
        component: () => import('../views/services/consultancy/SherbetRide.vue'),
        meta: {
            color: '#088036',
        },
    },
    {
        path: '/case-studies/lphca',
        name: 'LPHCA',
        component: () => import('../views/services/consultancy/LPHCA.vue'),
        meta: {
            color: '#224291',
        },
    },
    {
        path: '/case-studies',
        name: 'Case Studies',
        component: () => import('../views/CaseStudies.vue'),
    },
    {
        path: '/team',
        name: 'Team',
        component: () => import('../views/Team.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
    },
    {
        path: '/typography',
        name: 'typography',
        component: () => import('../views/Typography.vue'),
    },
];

const router = new VueRouter({routes, mode: 'history'});

const revealerOpts = {
    // the layers are the elements that move from the sides
    nmbLayers: 1,
    // bg color of each layer
    bgcolor: ['#D21D1C'],
    // effect classname
    effect: 'anim--effect-1',
};

let revealer = new window.Revealer(revealerOpts);

router.beforeEach((to, from, next) => {
    var callbackTime = 500,
        callbackFn = function () {
            next();
        };

    window.scrollTo(0, 0);
    store.state.loading = true;
    revealer.destroy();

    if (to.meta.color) revealerOpts.bgcolor = to.meta.color;
    else revealerOpts.bgcolor = '#D21D1C';
    revealer = new window.Revealer(revealerOpts);

    revealer.reveal('left', callbackTime, callbackFn);
});

router.afterEach(() => {
    store.state.loading = false;
});

export default router;
