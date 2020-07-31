<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-6 mb-4">
                        <h1 class="mb-2">InterContinental London - The O2</h1>
                        <a href="https://iclondon-theo2.com/" class="font-weight-demi">Visit Website</a>
                    </div>
                    <div class="col-sm-6">
                        <p class="lead">
                            The InterContinental London website is design-led, with strong emphasis in terms of simplicity but with the relevant finesse when it comes to its features. The website has
                            been redesigned recently to match the high quality and 5-star standards that are synonymous with the hotel’s name.
                        </p>
                    </div>
                </div>
                <BrandImageBlock img-url="services/websites/iclondon-theo2/cover.png" animation="fade-up" color="#c8ba8c" img-align="center" img-width="75%"></BrandImageBlock>
            </div>
        </section>
        <section class="pb-0">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-4">
                        <h2>
                            Idea
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            With the landscape of web design invariably evolving, our goal was to keep up with the times and produce a website for the InterContinental London which would not just
                            speak volumes of the excellence associated with the brand but also showcase e9's proficiency in design. To that effect, we have put in our efforts and our collective
                            experience as a team to implement the latest design techniques and have even attempted to put our own spin on it.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-md-0">
                        <BrandImageBlock img-url="services/websites/iclondon-theo2/idea-1.png" animation="fade-right" color="#c8ba8c" img-align="left" img-width="90%"></BrandImageBlock>
                    </div>
                    <div class="col-sm-6">
                        <BrandImageBlock img-url="services/websites/iclondon-theo2/idea-2.png" animation="fade-left" color="#c8ba8c" img-align="right" img-width="90%"></BrandImageBlock>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-4 pb-lg-6">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-4">
                        <h2>
                            Engaging Visuals
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            We inferred that establishing the illusion of depth and dimension has become a very popular concept in the web design world off-late, and one of the best ways to implement
                            this has been to portray the appearance of three-dimensional objects despite the flat two-dimensional medium of a website. Additionally, shadows have also come into play
                            and are applied to artefacts within website design to reinforce depth illusion and to breathe life into it. The aspect that we brought these insights and our creativity
                            into the most on the InterContinental London website were the visuals.
                        </p>
                    </div>
                </div>
                <div class="w-75 mx-auto depth-effect">
                    <img src="@/assets/images/services/websites/iclondon-theo2/layer-3.png" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" alt="" />
                    <img src="@/assets/images/services/websites/iclondon-theo2/layer-2.png" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" alt="" />
                    <img src="@/assets/images/services/websites/iclondon-theo2/layer-1.png" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" alt="" />
                </div>
            </div>
        </section>
        <section class="pb-0">
            <div class="container mb-3 mb-lg-5">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>
                            Result
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            Our approach to recreating depth perception was to blend shadows and the reflection of images to get the best of both effects in an exclusively realised perspective. The
                            result was unlike any work done in the past, because we had succeeded in employing the colours of the image within its own shadow to intensify the depth and give rise to a
                            uniquely layered point of view. We leveraged this combination of effects to create the impression of a realm beyond the screen, which was further enhanced by our
                            implementation of parallax scrolling, to give the user a fully immersive experience of viewing the website.
                        </p>
                    </div>
                </div>
            </div>
            <BrandImageSlider color="#c8ba8c" :img-array="slideImages"></BrandImageSlider>
        </section>
        <NextCase name="O2 Wifi" link="/case-studies/o2-wifi"></NextCase>
    </div>
</template>

<script>
import '@/assets/js/tilt.jquery.js';
import BrandImageBlock from '@/components/common/BrandImageBlock';
import BrandImageSlider from '@/components/common/BrandImageSlider';
import NextCase from '@/components/common/NextCase';

export default {
    name: 'ICL',
    components: {
        BrandImageBlock,
        BrandImageSlider,
        NextCase,
    },
    data() {
        return {
            slideImages: [
                'services/websites/iclondon-theo2/slider/home.jpg',
                'services/websites/iclondon-theo2/slider/highlights.jpg',
                'services/websites/iclondon-theo2/slider/meridian-lounge.jpg',
                'services/websites/iclondon-theo2/slider/spa.jpg',
                'services/websites/iclondon-theo2/slider/slider.jpg',
            ],
        };
    },
    mounted() {
        window.$('.depth-effect img').tilt({
            perspective: 1000,
            maxTilt: 10,
            transition: false,
        });
    },
    metaInfo() {
        return {
            title: 'InterContinental London - The O2 | website case study - e9',
            meta: [
                {name: 'description', content: 'We have had the chance to work with Telefonica O2 on multiple occasions to deliver innovative products, one of which is the O2 Wifi website'},
                {name: 'keywords', content: 'case, study, o2, wifi, telefonica, design, branding, brand'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.depth-effect {
    position: relative;
    left: 7.5%;
    img {
        &:not(:first-child) {
            position: relative;

            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            cursor: pointer;

            &:nth-child(2) {
                top: 5%;
                right: 5%;
            }
            &:nth-child(3) {
                top: 15%;
                right: 15%;
            }
        }
    }
}
</style>
