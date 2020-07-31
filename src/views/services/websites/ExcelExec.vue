<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-6 mb-4">
                        <h1 class="mb-2">Excel Executive</h1>
                        <a href="https://www.excelexec.co.uk/" class="font-weight-demi">Visit Website</a>
                    </div>
                    <div class="col-sm-6">
                        <p class="lead">
                            Since 2007, Excel Group Services Limited have provided best in class business transport services to London. The first company in the UK to offer it's corporate clients
                            online booking, they have developed a reputation, among some of London's largest brands for providing a consistently reliable and personal executive service.
                        </p>
                    </div>
                </div>
                <BrandImageBlock img-url="services/websites/excel-exec/cover.png" animation="fade-up" color="#0A4EB4" img-align="center" img-width="75%"></BrandImageBlock>
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
                            With global taxi apps disrupting the industry – for good - it was imperative for Excel Executive to adapt quickly. Besides the usual bookings, account management and
                            billing functionalities, taxi businesses require advance reporting capabilities and detailed transparency as a licensing requirement. With a decade of invaluable experience
                            in the industry, Excel Executive found e9ine as their technology partner to create a competitive edge in the industry.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-md-0">
                        <BrandImageBlock img-url="services/websites/excel-exec/idea-1.png" animation="fade-right" color="#0A4EB4" img-align="left" img-width="90%"></BrandImageBlock>
                    </div>
                    <div class="col-sm-6">
                        <BrandImageBlock img-url="services/websites/excel-exec/idea-2.png" animation="fade-left" color="#0A4EB4" img-align="right" img-width="90%"></BrandImageBlock>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-0">
            <div class="container">
                <div class="row mb-3 mb-lg-5">
                    <div class="col-sm-4">
                        <h2>
                            Maintaining Standards
                        </h2>
                    </div>
                    <div class="col-sm-8">
                        <p>
                            Doing Excel Executive's website has given us great insights into the digital requirements of a private hire company, which has in turn helped us ascertain the best approach
                            to take to get across what the company does and what it stands for. The individual pages had to be well thought-out and presented with the standard that has come to be
                            expected of Excel.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <img src="@/assets/images/services/websites/excel-exec/services.jpg" alt="" />
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
                            Much like our ethos with all our web design work, each page within the Excel Executive website precisely covers the information through suitable images and just the
                            required amounts of text while paying close attention to creating pages that cater to both the demographics of customers and drivers.
                        </p>
                    </div>
                </div>
            </div>
            <BrandImageSlider color="#0A4EB4" :img-array="slideImages"></BrandImageSlider>
        </section>
        <NextCase name="Reel Cinemas" link="/case-studies/reel-cinemas"></NextCase>
    </div>
</template>

<script>
import BrandImageBlock from '@/components/common/BrandImageBlock';
import BrandImageSlider from '@/components/common/BrandImageSlider';
import NextCase from '@/components/common/NextCase';

export default {
    name: 'ExcelExec',
    components: {
        BrandImageBlock,
        BrandImageSlider,
        NextCase,
    },
    data() {
        return {
            slideImages: [
                'services/websites/excel-exec/slider/company.jpg',
                'services/websites/excel-exec/slider/services.jpg',
                'services/websites/excel-exec/slider/fleet.jpg',
                'services/websites/excel-exec/slider/commitment.jpg',
            ],
        };
    },
    metaInfo() {
        return {
            title: 'Excel Group Services | website case study - e9',
            meta: [
                {
                    name: 'description',
                    content: 'Excel found the technology partner in e9 to create a viable website that promotes the brand and its services in a way that is appealing to the target audience',
                },
                {name: 'keywords', content: 'case, study, excel, group, design, branding, brand'},
            ],
        };
    },
};
</script>
