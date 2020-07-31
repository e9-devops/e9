<template>
    <section>
        <div class="container">
            <div class="row justify-content-center mb-4 mb-lg-6" v-if="title || desc">
                <div class="col-sm-10 text-center">
                    <h2>{{ title }}</h2>
                    <p v-html="desc"></p>
                </div>
            </div>
            <div class="row" v-for="(imgArr, index) in imgChunks" :key="index">
                <div v-for="(img, i) in imgArr" :key="i" class="col-sm-4" :data-aos="i == 0 ? 'fade-left' : i == 2 ? 'fade-right' : ''" data-aos-once="true" data-aos-anchor-placement="center-bottom">
                    <img :src="getImgPath(img)" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {chunk} from '@/utilities';
export default {
    name: 'AppScreens',
    props: {
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        imgArray: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getImgPath(img) {
            return require(`@/assets/images/${img}`);
        },
    },
    computed: {
        imgChunks() {
            return chunk(this.imgArray, 3);
        },
    },
};
</script>

<style lang="scss" scoped>
.logo {
    max-width: 200px;
}
@include media-breakpoint-down(xs) {
    .aos-init {
        transform: none !important;
        opacity: 1 !important;
    }
}
</style>
