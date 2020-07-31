<template>
    <section class="height-100 imageblock cover d-lg-flex align-items-center">
        <div class="imageblock__content col-lg-6 pos-right d-flex align-items-center justify-content-center">
            <div class="col-11">
                <slot></slot>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <VueSlickCarousel v-bind="sliderSettings" class="pb-3 pb-lg-5 mb-5 mb-lg-0" v-if="slides">
                        <div v-for="item in slides" :key="item.id">
                            <h1 class="mb-lg-4" v-if="item.title" v-html="item.title"></h1>
                            <p class="lead" v-html="item.desc"></p>
                        </div>
                    </VueSlickCarousel>
                    <div v-else>
                        <h1 class="mb-lg-4" v-if="title" v-html="title"></h1>
                        <img :src="getImgPath()" v-show="imgUrl" alt="" class="logo mb-4" />
                        <p class="lead" v-html="desc"></p>
                        <div v-if="linkUrl" class="mt-5 mb-4 mb-xl-0">
                            <a class="btn btn-primary" href="" @click.prevent="callAction" v-if="linkUrl.indexOf('http') > -1 || linkUrl.indexOf('http') > -1">{{ linkText }}</a>
                            <router-link v-else :to="linkUrl" class="btn btn-primary">{{ linkText }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="" class="font-weight-demi d-lg-flex align-items-center scroller d-none" @click.prevent="callScrollTo()" v-if="scroller">
            <span>Scroll down to explore</span>
            <div class="mouse ml-2">
                <div class="scroller"></div>
            </div>
        </a>
    </section>
</template>

<script>
import {scrollTo} from '@/utilities';
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'PageCover',
    props: {
        title: {
            type: String,
        },
        imgUrl: {
            type: String,
        },
        desc: {
            type: String,
        },
        slides: {
            type: Array,
        },
        linkUrl: {
            type: String,
        },
        linkText: {
            type: String,
        },
        linkAction: {
            type: Function,
        },
        scroller: {
            type: Boolean,
            default: false,
        },
        scrollToSection: {
            type: String,
        },
    },
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            sliderSettings: {
                dots: true,
                edgeFriction: 0.35,
                infinite: true,
                speed: 500,
                autoplaySpeed: 7000,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                autoplay: true,
                focusOnSelect: false,
            },
        };
    },
    methods: {
        getImgPath() {
            return this.imgUrl ? require(`@/assets/images/${this.imgUrl}`) : '';
        },
        callAction() {
            if (this.action) this.action();
            else if (this.linkUrl) window.location = this.linkUrl;
        },
        callScrollTo() {
            scrollTo(this.scrollToSection);
        },
    },
};
</script>

<style lang="scss" scoped>
.logo {
    max-width: 200px;
}
.cover {
    overflow: hidden;
}
.scroller {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    z-index: 10;
    .mouse {
        width: 30px;
        height: 40px;
        border: 3px solid $primary;
        border-radius: 25px;
        position: relative;
        .scroller {
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -1.5px;
            margin-top: 5px;
            width: 3px;
            height: 8px;
            border-radius: 25%;
            background-color: $primary;
            animation-name: scroll;
            animation-duration: 2s;
            animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
            animation-iteration-count: infinite;
        }
    }
}
@keyframes scroll {
    0% {
        opacity: 0;
    }
    10% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(10px);
        opacity: 0;
    }
}

// Hide scroller in iPad Pro Portrait mode
@media only screen and (max-width: 1366px) {
    .scroller {
        display: none !important;
    }
}

@include media-breakpoint-down(lg) {
    .logo {
        max-width: 150px;
    }
}
</style>
