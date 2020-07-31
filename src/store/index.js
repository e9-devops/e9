import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const state = {
    loading: false,
    showStartupAnimation: !isMobile && !localStorage.videoSeen,
};

const getters = {};

const actions = {};

const mutations = {
    toggleStartupAnimation: (state) => (state.showStartupAnimation = !state.showStartupAnimation),
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
