<template>
    <div id="app">
        <div class="video-container" v-if="$store.state.showStartupAnimation">
            <video playsinline autoplay muted id="startup-video" :controls="false">
                <source src="@/assets/images/e9-web.mp4" type="video/mp4" />
                <source src="@/assets/images/e9-web.webm" type="video/webm" />
            </video>
        </div>
        <div v-if="!$store.state.showStartupAnimation && !$store.state.loading" class="content-wrapper">
            <AppHeader />
            <Breadcrumbs />
            <router-view :key="$route.fullPath"></router-view>
            <AppFooter />
            <div id="back-to-top"></div>
        </div>
    </div>
</template>

<script>
import {greet} from '@/utilities';
import {mapMutations} from 'vuex';

import AppFooter from '@/components/layout/AppFooter';
import AppHeader from '@/components/layout/AppHeader';
import Breadcrumbs from '@/components/common/Breadcrumbs';
export default {
    name: 'App',
    components: {
        AppHeader,
        Breadcrumbs,
        AppFooter,
    },
    methods: {
        ...mapMutations(['toggleStartupAnimation']),
    },
    mounted() {
        if (this.$store.state.showStartupAnimation) {
            var video = document.getElementById('startup-video');
            video.onended = () => {
                this.toggleStartupAnimation();
                localStorage.videoSeen = true;
            };
        }
        greet();
    },
};
</script>

<style lang="scss" scoped>
.video-container {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    z-index: 100000;
    background-color: $primary;

    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
.content-wrapper {
    position: relative;
}
</style>
