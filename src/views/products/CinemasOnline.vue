<template>
    <div>
        <PageCover :img-url="logoUrl" :desc="pageDesc" :link-text="websiteLinkText" :link-url="websiteLinkUrl">
            <div class="row">
                <div class="col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                    <CinemasOnline />
                </div>
            </div>
        </PageCover>
        <section class="imageblock d-lg-flex align-items-center pb-0">
            <div class="imageblock__content pos-right col-xl-7 col-lg-6 d-flex align-items-center">
                <img src="@/assets/images/products/cinemas-online/cinemas-online-slider.jpg" alt="" class="w-100" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6">
                        <h2>Leading the way</h2>
                        <p class="mb-5">
                            Cinemas Online is one of the leading cinema management systems in the UK and Ireland representing and handling state-of-the-art websites and brands of more than 80 cinemas.
                            We have implemented a perfect combination of purposeful innovation and resourceful technology to build the unique Cinemas Online Management System (COMS).
                        </p>
                        <h2 class="mb-0">200+</h2>
                        <p class="mb-4">Screens</p>
                        <h2 class="mb-0">1 Million+</h2>
                        <p class="mb-4">Followers</p>
                        <h2 class="mb-0">80+</h2>
                        <p class="mb-4">Venues</p>
                    </div>
                </div>
            </div>
        </section>
        <ImageBlock
            :height="60"
            container-class="pt-lg-0 pb-lg-0 pt-xl-6 pb-xl-6"
            media-align="left"
            title="Frame, set and match"
            desc="COMS is a powerful framework which enables our clients to keep track of and update Venues, Movies, Showtimes, Enquiries, Pricing, Recruitment and Customer Relationships. This means that our clients have the ability to not only manage their brand as a renown cinema, but also establish and increase their online presence, making them more accessible to their customers.">
            <div class="col-10">
                <img src="@/assets/images/products/cinemas-online/showtimes.jpg" alt="" class="" />
            </div>
        </ImageBlock>
        <ImageBlock
            :height="60"
            media-align="right"
            title="A pioneer"
            desc="COMS is a pioneer of sorts, given that it sustains such a large number of cinema websites and venues, making it one of the largest and leading entities of its kind in the UK. Having Reel Cinemas as one of the prominent clients of Cinemas Online, the requirement was an interactive website that would allow users to easily view and book their favourite movies, at their nearest Reel Cinemas venue. We also offer an intuitive booking app, to increase user’s engagement from the comfort of their own phone.">
            <div class="col-10">
                <img src="@/assets/images/products/cinemas-online/venues.jpg" alt="" class="" />
            </div>
        </ImageBlock>
        <section class="pt-0 pb-0 pt-xl-8 pb-xl-8">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-md-11">
                        <img src="@/assets/images/products/cinemas-online/coms-login.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <ImageSection
            class="pb-0"
            title="Specific to your brand"
            desc="We have been able to offer Reel Cinemas as well as other movie houses various website themes to choose from, with the option to also modify some aspects based on their specific needs. Most importantly, through COMS, we have been able to deliver all of our clients a high-functioning system that helps them manage their Brand, Venues, Movies, Showtimes, and even behind-the-scenes components like Pricing models, Staff and Jobs availability.  ">
        </ImageSection>
        <FullWidthSlider color="#214291" :img-array="slideImages" class="pt-0 pb-0 pb-lg-4"></FullWidthSlider>
        <NextCase name="Infi9ity" link="/case-studies/infi9ity"></NextCase>
    </div>
</template>

<script>
import CinemasOnline from '@/components/animations/CinemasOnline';
import FullWidthSlider from '@/components/common/FullWidthSlider';
import ImageBlock from '@/components/common/ImageBlock';
import ImageSection from '@/components/common/ImageSection';
import NextCase from '@/components/common/NextCase';
import PageCover from '@/components/common/PageCover';

export default {
    name: 'CinemasOnlineView',
    components: {
        PageCover,
        CinemasOnline,
        ImageBlock,
        ImageSection,
        FullWidthSlider,
        NextCase,
    },
    data() {
        return {
            logoUrl: 'products/cinemas-online/logo.png',
            pageDesc: 'From latest film releases, trailers, and movie reviews, to showtimes and options to book tickets at your nearest cinema – Cinemas Online has got it all, another e9 success.',
            websiteLinkText: 'Visit Website',
            websiteLinkUrl: 'https://cinemas-online.co.uk/',
            slideImages: [
                'products/cinemas-online/slider/leo-leisure-home.jpg',
                'products/cinemas-online/slider/leo-leisure-showtimes.jpg',
                'products/cinemas-online/slider/westway-cinema.jpg',
                'products/cinemas-online/slider/hollywood-plaza.jpg',
            ],
        };
    },
    metaInfo() {
        return {
            title: 'Cinemas online | software case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'From latest film releases, trailers, and movie reviews, to showtimes and options to book tickets at your nearest cinema – Cinemas Online has got it all, another e9 success',
                },
                {name: 'keywords', content: 'case, study, cinemas, online, software, brand, saas, solutions'},
            ],
        };
    },
};
</script>
