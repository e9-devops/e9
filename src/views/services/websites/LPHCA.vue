<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-6 mb-4">
                        <h1 class="mb-2">LPHCA</h1>
                        <a href="https://lphca.co.uk/" class="font-weight-demi">Visit Website</a>
                    </div>
                    <div class="col-sm-6">
                        <p class="lead">
                            The Licensed Private Hire Car Association (LPHCA) is a trade body that passionately represents, alongside their membership, the interests of Licensed Taxi & Private Hire
                            Vehicle Operators. With over 270 operators, managing over 20,000 drivers the LPHCA supports the private hire industry UK wide.
                        </p>
                    </div>
                </div>
                <BrandImageBlock img-url="services/websites/lphca/cover.png" animation="fade-up" color="#214291" img-align="center" img-width="75%"></BrandImageBlock>
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
                            With the LPHCA, being one of the influential entities in the private hire arena, we had to come up with a website that means business, while keeping the experience
                            interesting and valuable.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-md-0">
                        <BrandImageBlock img-url="services/websites/lphca/idea-1.png" animation="fade-right" color="#214291" img-align="left" img-width="90%"></BrandImageBlock>
                    </div>
                    <div class="col-sm-6">
                        <BrandImageBlock img-url="services/websites/lphca/idea-2.png" animation="fade-left" color="#214291" img-align="right" img-width="90%"></BrandImageBlock>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-0">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-4">
                        <h2>
                            Converting users to members
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            The sign-up process on the LPHCA website was a vital piece of work. We perceived just how complex, yet imperative it was to catch the attention of the user and direct them
                            towards completing the sign-up process. The new LPHCA sign-up form is practical and seamless, facilitating the user to become an LPHCA member in one shot.
                        </p>
                    </div>
                </div>
                <img src="@/assets/images/services/websites/lphca/pages.jpg" alt="" />
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
                            The end result was a contemporary website that personified their standing as a recognised regulatory body, whilst engaging visitors with dynamic content including events,
                            news and other updates. The website was designed to be highly productive and accessible to all users. The home page design contains all the relevant shortcuts a member or
                            visitor to the site needs to see.
                        </p>
                    </div>
                </div>
            </div>
            <BrandImageSlider color="#214291" :img-array="slideImages"></BrandImageSlider>
        </section>
        <NextCase name="Arora Group" link="/case-studies/arora-group"></NextCase>
    </div>
</template>

<script>
import BrandImageBlock from '@/components/common/BrandImageBlock';
import BrandImageSlider from '@/components/common/BrandImageSlider';
import NextCase from '@/components/common/NextCase';

export default {
    name: 'LPHCA',
    components: {
        BrandImageBlock,
        BrandImageSlider,
        NextCase,
    },
    data() {
        return {
            slideImages: [
                'services/websites/lphca/slider/about.jpg',
                'services/websites/lphca/slider/events.jpg',
                'services/websites/lphca/slider/testimonials.jpg',
                'services/websites/lphca/slider/login.jpg',
            ],
        };
    },
    metaInfo() {
        return {
            title: 'Licensed Private Hire Car Association | website case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'The Licensed Private Hire Car Association needed a website to improve the interaction of their large membership with the information they provide and improvements with their membership onboarding process.',
                },
                {name: 'keywords', content: 'case, study, lphca, licensed, private, hire, car, association, design, branding, brand, website, web, site'},
            ],
        };
    },
};
</script>
