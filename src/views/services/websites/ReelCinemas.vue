<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-6">
                        <h1 class="mb-2">Reel Cinemas</h1>
                        <a href="https://reelcinemas.co.uk/" class="font-weight-demi">Visit Website</a>
                    </div>
                    <div class="col-sm-6">
                        <p class="lead">Reel Cinemas is one of the largest independent operators and developers of multiplex cinemas in the UK.</p>
                    </div>
                </div>
                <img src="@/assets/images/services/websites/reel-cinemas/cover.jpg" alt="" />
            </div>
        </section>
        <section class="pb-0">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-4">
                        <h2>
                            Interactive Website
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            Having Reel Cinemas as one of the prominent clients of <router-link to="/products/cinemas-online">Cinemas Online</router-link>, the requirement was an interactive website
                            that would allow users to easily view and book their favourite latest movies at their nearest Reel Cinemas venue.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-md-0">
                        <BrandImageBlock img-url="services/websites/reel-cinemas/idea-1.png" animation="fade-right" color="#3e84de" img-align="left" img-width="90%"></BrandImageBlock>
                    </div>
                    <div class="col-sm-6">
                        <BrandImageBlock img-url="services/websites/reel-cinemas/idea-2.png" animation="fade-left" color="#3e84de" img-align="right" img-width="90%"></BrandImageBlock>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-0">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-4">
                        <h2>
                            Solutions
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            An up to date, intuitive web-based portal was created, with individual logins for venues to showcase themselves. A complete end to end web and mobile booking solution was
                            also created. Venues were also offered the ability to load movie trailers, storyboards, images and ratings.
                        </p>
                    </div>
                </div>
                <div class="row mt-6">
                    <div class="col-sm-12">
                        <img src="@/assets/images/services/websites/reel-cinemas/mobile-screen.jpg" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" alt="" />
                    </div>
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
                            We have delivered a second to none website for Reel Cinemas helping them retain and grow their customers. The design of the website offers Reel Cinemas various website
                            themes to choose from, with the option to also modify some aspects based on their specific needs.
                        </p>
                    </div>
                </div>
            </div>
            <BrandImageSlider color="#3e84de" :img-array="slideImages"></BrandImageSlider>
        </section>
        <NextCase name="Telefonica O2" link="/case-studies/telefonica-o2"></NextCase>
    </div>
</template>

<script>
import BrandImageBlock from '@/components/common/BrandImageBlock';
import BrandImageSlider from '@/components/common/BrandImageSlider';
import NextCase from '@/components/common/NextCase';

export default {
    name: 'AroraGroup',
    components: {
        BrandImageBlock,
        BrandImageSlider,
        NextCase,
    },
    data() {
        return {
            slideImages: [
                'services/websites/reel-cinemas/slider/cover.jpg',
                'services/websites/reel-cinemas/slider/movies.jpg',
                'services/websites/reel-cinemas/slider/gift-card.jpg',
                'services/websites/reel-cinemas/slider/select-cinema.jpg',
                'services/websites/reel-cinemas/slider/book-movie.jpg',
            ],
        };
    },
    metaInfo() {
        return {
            title: 'REEL Cinemas | website case study - e9',
            meta: [
                {name: 'description', content: 'Reel Cinemas benefited greatly from the new integrated design and portal. The website encouraged more bookings and assisted in business growth'},
                {name: 'keywords', content: 'case, study, reel, cinemas, design, branding, brand'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
