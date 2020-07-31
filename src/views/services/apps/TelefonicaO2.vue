<template>
    <div>
        <PageCover :desc="pageDesc" :img-url="logoUrl">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <O2Wifi />
                </div>
            </div>
        </PageCover>
        <section class="slider-container pt-0">
            <VueSlickCarousel v-bind="settings" class="slick-center-mode pb-5 pb-xl-6">
                <div><img src="@/assets/images/services/consultancy/o2/customer-portal-mac.jpg" alt="" class="" /></div>
                <div><img src="@/assets/images/services/software/telefonica-o2/cms-versioning.jpg" alt="" /></div>
                <div><img src="@/assets/images/services/software/telefonica-o2/cims-equipments.jpg" alt="" class="" /></div>
                <div><img src="@/assets/images/services/software/telefonica-o2/cims-venues.jpg" alt="" class="" /></div>
                <div><img src="@/assets/images/services/software/telefonica-o2/insights.jpg" alt="" class="" /></div>
            </VueSlickCarousel>
        </section>
        <section class="brand-light-bg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-8 mb-6 mb-md-0">
                        <img src="@/assets/images/services/software/telefonica-o2/cms.png" alt="" class="" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
                    </div>
                    <div class="col-sm-4">
                        <img
                            src="@/assets/images/services/software/telefonica-o2/cms-landing-page.png"
                            alt=""
                            class=""
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-anchor-placement="center-bottom" />
                    </div>
                </div>
                <AppScreens :imgArray="appScreens" class="pt-0 pt-md-6 pb-0"></AppScreens>
            </div>
        </section>
        <NextCase name="CitySprint UK" link="/case-studies/citysprint"></NextCase>
    </div>
</template>

<script>
import AppScreens from '@/components/common/AppScreens';
import NextCase from '@/components/common/NextCase';
import O2Wifi from '@/components/animations/O2Wifi';
import PageCover from '@/components/common/PageCover';
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'Cab9View',
    components: {
        AppScreens,
        PageCover,
        O2Wifi,
        NextCase,
        VueSlickCarousel,
    },
    data() {
        return {
            pageDesc:
                'e9 is proud to have worked with Telefonica on a number of opportunities providing innovation, operational efficiencies and an improvement in speed to market. Areas of innovation include CIMS, Captive Portal, Location based services, Analytics, Explore Booking App and O2 Wi-Fi Website to name just a few.<br><br>Key to our joint success is working in a true partnership model understanding the requirements of Telefonica and its business needs and then delivering business outcomes that deliver true value.',
            logoUrl: 'services/software/telefonica-o2/logo.png',
            appScreens: ['services/consultancy/o2/app-login.png', 'services/consultancy/o2/venues.png', 'services/consultancy/o2/venue-details.png'],
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
    metaInfo() {
        return {
            title: 'Telefonica O2 | software and app case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'Following consultation, a deep understanding of the issues facing O2 were identified. e9 were engaged to modernise and improve the O2 Wifi estate customer information management systems',
                },
                {name: 'keywords', content: 'case, study, o2, telefonica, app, development, software'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#032b5a, 75%);
}
</style>
