<template>
    <div>
        <PageCover :img-url="logoUrl" :desc="pageDesc">
            <img src="@/assets/images/services/software/itv/cover.jpg" alt="" class="mt-6 mt-lg-0" />
        </PageCover>
        <section class="brand-light-bg slider-container">
            <VueSlickCarousel v-bind="settings" class="slick-center-mode pb-5 pb-xl-6">
                <div><img src="@/assets/images/services/software/itv/live-bookings.png" alt="" /></div>
                <div><img src="@/assets/images/services/software/itv/bookings.png" alt="" /></div>
                <div><img src="@/assets/images/services/software/itv/people.png" alt="" /></div>
            </VueSlickCarousel>
        </section>
        <NextCase name="Cab9" link="/case-studies/cab9" class="pt-5 pt-lg-6"></NextCase>
    </div>
</template>

<script>
import NextCase from '@/components/common/NextCase';
import PageCover from '@/components/common/PageCover';
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'Ontraccs',
    components: {
        PageCover,
        NextCase,
        VueSlickCarousel,
    },
    data() {
        return {
            logoUrl: 'services/software/itv/logo.png',
            pageDesc:
                'Working with ITV on the reboot of the ‘Dancing on Ice’ production, e9 developed a seamless interface to connect taxi requirements with a range of ground transportation service providers. An easy-to-use platform and range of booking, passenger and driver apps were created to ensure talent and staff movements were tracked to avoid production delay costs.',
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
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#dc0164, 55%);
}

video {
    width: 100%;
    object-fit: cover;
    border-radius: $card-border-radius;
}</style
>s
