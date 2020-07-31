<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-6 mb-4">
                        <h1 class="mb-2">Arora Group</h1>
                        <a href="https://thearoragroup.com/" class="font-weight-demi">Visit Website</a>
                    </div>
                    <div class="col-sm-6">
                        <p class="lead">
                            With an exceptional eye to detail in providing the highest levels of customer service and experience, the Arora Group, is one of the UK’s largest privately owned and
                            managed hotel operating groups. With 5,000 bedrooms under their control, the Arora Group maintains their values based on loyalty, integrity and expertise.
                        </p>
                    </div>
                </div>
                <BrandImageBlock img-url="services/websites/arora-group/cover.png" animation="fade-up" color="#163E7B" img-align="center" img-width="75%"></BrandImageBlock>
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
                            Our rationale behind the Arora Group’s website was to capture the essence of the business in the way that the brand appeals to clients’ sensibilities. Given the Arora
                            Group’s vast number of business dealings, such as Hotels, Property and Construction, and the number of individual pages that had to be created within each division, it was
                            challenging to ensure that the pages were comprehensive but did not seem out of place or overwhelm the user at any point.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-md-0">
                        <BrandImageBlock img-url="services/websites/arora-group/idea-1.png" animation="fade-right" color="#163E7B" img-align="left" img-width="90%"></BrandImageBlock>
                    </div>
                    <div class="col-sm-6">
                        <BrandImageBlock img-url="services/websites/arora-group/idea-2.png" animation="fade-left" color="#163E7B" img-align="right" img-width="90%"></BrandImageBlock>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-0">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-4">
                        <h2>
                            Unique yet Consistent
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            The brand image is maintained consistently throughout the whole website, right from the muted yet sophisticated colour palette, to professional images, and crisp content
                            that is limited to sentences rather than continuous paragraphs. The navigation is streamlined from the start, with arrows and indicators clearly enabling the user to
                            effortlessly follow the flow of the website, and subsequently branch out to the sections that they would like to focus on.
                        </p>
                    </div>
                </div>
                <img src="@/assets/images/services/websites/arora-group/pages.jpg" alt="" />
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
                            The aim has been to differentiate service by providing unique designs which encompass the brand of Arora in a modern but timeless manner. The solutions are design led with
                            a strong emphasis on simplicity and sophistication when it comes to features and functionality.
                        </p>
                    </div>
                </div>
            </div>
            <BrandImageSlider color="#163E7B" :img-array="slideImages"></BrandImageSlider>
        </section>
        <NextCase name="Excel Executive" link="/case-studies/excel-exec"></NextCase>
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
                'services/websites/arora-group/slider/about.jpg',
                'services/websites/arora-group/slider/hotels.jpg',
                'services/websites/arora-group/slider/people.jpg',
                'services/websites/arora-group/slider/media.jpg',
                'services/websites/arora-group/slider/press.jpg',
            ],
        };
    },
    metaInfo() {
        return {
            title: 'Arora Group, hotel operators | website case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'With an exceptional eye to detail in providing the highest levels of customer service and experience, the Arora Group, approached us to help with branding and website development',
                },
                {name: 'keywords', content: 'case, study, arora, group, design, branding, brand'},
            ],
        };
    },
};
</script>
