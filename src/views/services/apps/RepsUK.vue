<template>
    <div>
        <PageCover :img-url="logoUrl" :desc="pageDesc">
            <img src="@/assets/images/services/software/reps-uk/cover.jpg" alt="" class="mt-6 mt-lg-0" />
        </PageCover>
        <section class="p-0 pt-lg-6 pt-xl-0">
            <img src="@/assets/images/services/software/reps-uk/app.jpg" alt="" class="w-100" />
        </section>
        <section class="slider-container">
            <VueSlickCarousel v-bind="settings" class="slick-center-mode pb-5 pb-xl-6">
                <div><img src="@/assets/images/services/software/reps-uk/bookings.jpg" alt="" /></div>
                <div><img src="@/assets/images/services/software/reps-uk/new-booking.jpg" alt="" class="" /></div>
                <div><img src="@/assets/images/services/software/reps-uk/invoicing.jpg" alt="" class="" /></div>
            </VueSlickCarousel>
        </section>
        <NextCase name="Sherbet Ride" link="/case-studies/sherbet-ride"></NextCase>
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
            logoUrl: 'services/software/reps-uk/logo.png',
            pageDesc: 'Working with airport concierge partners, e9 has developed a secure, flexible, and easy to use operational platform to manage and ensure VIP air traveller requirements are met.',
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
            title: 'Reps UK | software and app case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'Reps UK needed to store vital and sensitive booking information on a powerful system which included tracking finances and different levels of service offering in their concierge service',
                },
                {name: 'keywords', content: 'case, study, repsuk, reps, uk, development, software, financial, finances, data, sensitive'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#f89605, 45%);
}

video {
    width: 100%;
    object-fit: cover;
    border-radius: $card-border-radius;
}
</style>
