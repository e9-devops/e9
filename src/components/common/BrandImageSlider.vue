<template>
    <div class="slider-container">
        <div class="container slider-bg">
            <div class="brand-images-wrapper" :style="{'background-color': color}"></div>
        </div>
        <VueSlickCarousel v-bind="settings">
            <div v-for="(item, index) in imgArray" :key="index" class="slider-img-wrapper">
                <img :src="getImgPath(item)" alt="" />
                <div class="img-shadow"></div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'BrandImageSlider',
    props: {
        color: {
            type: String,
            default: '#D21D1C',
        },
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
                centerMode: true,
                centerPadding: '20px',
                dots: true,
                dotsClass: 'slick-dots white-dots',
                edgeFriction: 0.35,
                infinite: true,
                speed: 800,
                slidesToShow: 2,
                slidesToScroll: 2,
                cssEase: 'ease-in-out',
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: '60px',
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: '50px',
                        },
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: '20px',
                        },
                    },
                ],
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

<style lang="scss" scoped>
.slider-container {
    position: relative;
    padding-top: 6.5em;
    padding-bottom: 6.5em;
    overflow: hidden;

    .slider-bg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        .brand-images-wrapper {
            height: 100%;
        }
    }

    .slider-img-wrapper {
        padding: 0 32px;
        position: relative;
        padding-bottom: 80px;

        .img-shadow {
            bottom: 80px;
            filter: blur(30px);
        }
    }
}

@include media-breakpoint-down(md) {
    .slider-container {
        padding-top: 4.875em;
        padding-bottom: 4.875em;
    }
}

@include media-breakpoint-down(xs) {
    .slider-container {
        .slider-img-wrapper {
            padding: 0 12px;
            padding-bottom: 32px;

            .img-shadow {
                bottom: 32px;
                filter: blur(20px);
            }
        }
    }
}
</style>
