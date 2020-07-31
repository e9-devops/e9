<template>
    <div>
        <VueSlickCarousel v-bind="clientSliderSettings" :id="'logo-carousel-' + id">
            <div class="logos-wrapper" v-for="(logoArr, index) in logoChunks" :key="index">
                <a href="" class="logo-wrapper" v-for="(logo, i) in logoArr" :key="i">
                    <div class="logo">
                        <img :src="getImgPath(logo.ImageURL)" />
                    </div>
                </a>
            </div>
        </VueSlickCarousel>
        <div class="row mt-8 mt-lg-9 mt-xl-10" v-if="showTestimonials">
            <div class="col-sm-8">
                <VueSlickCarousel v-bind="testimonialSliderSettings" class="single-slide-slick-carousel pb-4 pb-lg-0" ref="testimonialCarousel">
                    <div>
                        <p class="lead emphasis mb-4">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iusto explicabo, ipsum necessitatibus distinctio in cupiditate? Dolor esse porro pariatur facere dolorem
                            modi, odio placeat, deleniti obcaecati voluptatem cum aliquam!"
                        </p>
                        <p>
                            Gregory Hoy
                            <br />
                            <small class="text-primary">CEO, Excel Executive Ltd</small>
                        </p>
                    </div>
                    <div>
                        <p class="lead emphasis mb-4">
                            "Our team aims to deliver engaging brand messages and craft outstanding work in every pixel!"
                        </p>
                        <p>
                            Gregory Hoy
                            <br />
                            <small class="text-primary">CEO, Excel Executive Ltd</small>
                        </p>
                    </div>
                </VueSlickCarousel>
            </div>
            <div class="col-sm-4 mt-3">
                <ol class="slick-slider-arrows">
                    <li @click="showPrevious"><img src="@/assets/images/icons/left-arrow.png" alt="" /></li>
                    <li @click="showNext" :data-target="'testimonial-carousel-' + id" data-slide-to="1"><img src="@/assets/images/icons/right-arrow.png" alt="" /></li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import {chunk} from '@/utilities';
import logos from '@/assets/data/clients.json';
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'ClientsSlider',
    props: {
        showTestimonials: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            id: null,
            logos: logos,
            clientSliderSettings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                dotsClass: 'slick-dots line-dots',
                arrows: false,
            },
            testimonialSliderSettings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                fade: true,
                speed: 500,
            },
        };
    },
    methods: {
        showPrevious() {
            this.$refs.testimonialCarousel.prev();
        },
        showNext() {
            this.$refs.testimonialCarousel.next();
        },
        getImgPath(img) {
            return require(`@/assets/images/${img}`);
        },
    },
    computed: {
        logoChunks() {
            return chunk(this.logos, 8);
        },
    },
    created() {
        this.id = this._uid;
    },
};
</script>

<style lang="scss" scoped>
.logos-wrapper {
    overflow: auto;

    .logo-wrapper {
        width: 25%;
        float: left;
        padding: 16px;

        .logo {
            height: 140px;
            white-space: nowrap;
            text-align: center;

            img {
                -webkit-filter: grayscale(100%);
                filter: grayscale(100%);
                transition: all 0.3s linear;
                opacity: 0.6;
                cursor: pointer;
                max-height: 60px;
                max-width: 120px;
                display: inline-block;
                vertical-align: middle;
            }

            &:hover {
                img {
                    opacity: 1;
                    -webkit-filter: grayscale(0);
                    filter: grayscale(0);
                }
            }

            &:before {
                content: '';
                display: inline-block;
                height: 100%;
                vertical-align: middle;
            }
        }
    }

    @include media-breakpoint-down(md) {
        .logo-wrapper {
            .logo {
                height: 100px;
                img {
                    max-height: 40px;
                }
            }
        }
    }

    @media (max-width: 767px) and (orientation: portrait) {
        .logo-wrapper {
            width: 50%;

            .logo {
                height: 100px;
                img {
                    max-width: 80%;
                }
            }
        }
    }
}
</style>
