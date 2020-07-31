<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-6 mb-4">
                        <h1 class="mb-2">O2 Wifi</h1>
                        <a href="https://o2wifi.co.uk/" class="font-weight-demi">Visit Website</a>
                    </div>
                    <div class="col-sm-6">
                        <p class="lead">
                            We have had the chance to work with Telefonica O2 on multiple occasions to deliver innovative products, one of which is the O2 Wifi website. With O2 Wifi being provided
                            through 15,000 hotspots across more than 120 restaurants and venues in the UK this was an exciting challenge.
                        </p>
                    </div>
                </div>
                <BrandImageBlock img-url="services/websites/o2-wifi/cover.png" animation="fade-up" color="#032b5a" img-align="center" img-width="75%"></BrandImageBlock>
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
                            Inline with O2’s corporate image, O2 Wifi's website design specification was to be 'fast and easy to use', just like their Wifi. The website had to explain everything that
                            a potential user or venue partner would need to know about the service.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-md-0">
                        <BrandImageBlock img-url="services/websites/o2-wifi/idea-1.png" animation="fade-right" color="#032b5a" img-align="left" img-width="90%"></BrandImageBlock>
                    </div>
                    <div class="col-sm-6">
                        <BrandImageBlock img-url="services/websites/o2-wifi/idea-2.png" animation="fade-left" color="#032b5a" img-align="right" img-width="90%"></BrandImageBlock>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-0">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-4">
                        <h2>
                            Visual Impact
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            Since O2 as a brand is already well established, designing the website according to their branding was fairly uncomplicated with branding and design guides available to us.
                            However, It was important to reflect the capabilities of O2 Wifi, being a free to use service with no barriers and clearly explain the benefits of integrating with O2 Wifi
                            to venue partners.
                        </p>
                    </div>
                </div>
                <img src="@/assets/images/services/websites/o2-wifi/pages.jpg" alt="" />
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
                            Built inline with O2’s corporate image and guidelines, a website which clearly promotes O2 Wifi’s message was developed. The site benefits from easy to use navigation,
                            allowing visitors to quickly find well presented information and a simple interface to locate nearby venue hotspots, which supply O2 Wifi.
                        </p>
                    </div>
                </div>
            </div>
            <BrandImageSlider color="#032b5a" :img-array="slideImages"></BrandImageSlider>
        </section>
        <NextCase name="LPHCA Website" link="/case-studies/lphca-website"></NextCase>
    </div>
</template>

<script>
import BrandImageBlock from '@/components/common/BrandImageBlock';
import BrandImageSlider from '@/components/common/BrandImageSlider';
import NextCase from '@/components/common/NextCase';

export default {
    name: 'O2Wifi',
    components: {
        BrandImageBlock,
        BrandImageSlider,
        NextCase,
    },
    data() {
        return {
            slideImages: [
                'services/websites/o2-wifi/slider/cover.jpg',
                'services/websites/o2-wifi/slider/account.jpg',
                'services/websites/o2-wifi/slider/about.jpg',
                'services/websites/o2-wifi/slider/menu.jpg',
            ],
        };
    },
    metaInfo() {
        return {
            title: 'O2 Wifi Website | website case study - e9',
            meta: [
                {
                    name: 'description',
                    content: 'The InterContinental London website is design-led, with strong emphasis in terms of simplicity but with the relevant finesse when it comes to its features',
                },
                {name: 'keywords', content: 'case, study, intercontinental, o2, design, branding, brand'},
            ],
        };
    },
};
</script>
