<template>
    <div>
        <PageCover :img-url="logoUrl" :desc="pageDesc">
            <div class="col-lg-10 offset-lg-1 mt-5 mb-2 mt-lg-0 mb-lg-0">
                <div id="deliveryAnim" data-aos="lottie" data-aos-id="delivery-anim" data-aos-mirror="true"></div>
            </div>
        </PageCover>
        <section class="brand-light-bg height-60 d-flex align-items-center imagebg justify-content-center">
            <div class="col-md-10 col-lg-8">
                <img src="@/assets/images/services/software/citysprint/routes-design.png" alt="" style="width: 100%;" />
            </div>
        </section>
        <section class="slider-container">
            <VueSlickCarousel v-bind="settings" class="slick-center-mode pb-5 pb-xl-6">
                <div><img src="@/assets/images/services/software/citysprint/dashboard.jpg" alt="" /></div>
                <div><img src="@/assets/images/services/software/citysprint/live-tracking.jpg" alt="" class="" /></div>
                <div><img src="@/assets/images/services/software/citysprint/reconciliation.jpg" alt="" class="" /></div>
            </VueSlickCarousel>
        </section>
        <NextCase name="Ontraccs" link="/case-studies/ontraccs" class="pt-5 pt-lg-4"></NextCase>
    </div>
</template>

<script>
import NextCase from '@/components/common/NextCase';
import PageCover from '@/components/common/PageCover';
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'CitySprintView',
    components: {
        PageCover,
        NextCase,
        VueSlickCarousel,
    },
    data() {
        return {
            logoUrl: 'services/software/citysprint/logo.png',
            pageDesc: 'e9 worked with CitySprint to develop a live GPS tracking medical patient specimen and samples solution called PathTrak.',
            settings: {
                centerMode: true,
                centerPadding: '400px',
                dots: true,
                dotsClass: 'slick-dots',
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                responsive: [
                    {
                        breakpoint: 1367,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '250px',
                        },
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '60px',
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: '10px',
                        },
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: '10px',
                        },
                    },
                ],
            },
        };
    },
    mounted() {
        let deliveryAnim = this.$lottie.loadAnimation({
            container: document.getElementById('deliveryAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/citysprint.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        deliveryAnim.setSpeed(3);

        deliveryAnim.setSubframe(false);

        document.addEventListener('aos:in:delivery-anim', () => {
            //console.log('delivery-anim: play');
            deliveryAnim.play();
        });
        document.addEventListener('aos:out:delivery-anim', () => {
            //console.log('delivery-anim: pause');
            deliveryAnim.pause();
        });
    },
    metaInfo() {
        return {
            title: 'CitySprint | software and app case study - e9',
            meta: [
                {
                    name: 'description',
                    content: 'The challenges were resolved by e9 via web and app-based solutions, including live GPS tracking and a functional portal with a full audit trail called PathTrak',
                },
                {name: 'keywords', content: 'case, study, citysprint, app, development, software'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#0194d3, 52%);
}
#deliveryAnim {
    border-radius: $card-border-radius;
    overflow: hidden;
    background-color: #f8f8f8;
    transform: scaleX(-1);
}</style
>s
