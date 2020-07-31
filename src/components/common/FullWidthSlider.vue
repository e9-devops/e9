<template>
    <section>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-md-11">
                    <VueSlickCarousel v-bind="settings" class="pb-3 pb-lg-5 mb-5 mb-lg-0">
                        <div v-for="(item, index) in imgArray" :key="index">
                            <img :src="getImgPath(item)" alt="" />
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'FullWidthSlider',
    props: {
        imgArray: {
            type: Array,
            required: true,
        },
    },
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            settings: {
                dots: true,
                edgeFriction: 0.35,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'ease-in-out',
            },
        };
    },
    methods: {
        getImgPath(img) {
            return img ? require(`@/assets/images/${img}`) : '';
        },
    },
};
</script>

<style lang="scss" scoped></style>
