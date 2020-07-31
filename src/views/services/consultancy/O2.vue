<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-4 mb-lg-6 align-items-end">
                    <div class="col-lg-6">
                        <img src="@/assets/images/services/consultancy/o2/logo.png" alt="" class="brand-logo mb-1" />
                        <p>Supporting O2’s engineering team</p>
                    </div>
                    <div class="col-lg-6">
                        <p class="lead">
                            O2 is the UK’s largest mobile network operator with over 34 million connections to their network. They employ around 6700 people and operate over 450 retail stores.
                            Sponsors of England Rugby, The O2 and 19 O2 Academy music venues across the UK, O2 is all about delivering standout customer experiences and helping people to get the most
                            out of mobile connectivity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="imagebg no-content" data-overlay="1">
            <div class="background-image-holder">
                <img src="@/assets/images/services/consultancy/o2/cover.jpg" alt="" />
            </div>
        </section>
        <section class="pb-6 pb-xl-8">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-11">
                        <img src="@/assets/images/services/consultancy/o2/customer-portal-mac.jpg" alt="" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
                    </div>
                </div>
            </div>
        </section>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-md-11">
                    <AppScreens :imgArray="appScreens" class="brand-light-bg pt-8 pt-lg-9"></AppScreens>
                    <div class="row mt30">
                        <div class="col-sm-6">
                            <section class="brand-light-bg height-60 imagebg d-flex align-items-center">
                                <div class="row justify-content-center">
                                    <div class="col-10">
                                        <img src="@/assets/images/services/consultancy/o2/cms.png" alt="" data-aos="fade-right" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="col-sm-6 mt-4 mt-md-0">
                            <section class="brand-light-bg height-60 imagebg d-flex align-items-center">
                                <div class="row justify-content-center">
                                    <div class="col-8">
                                        <img src="@/assets/images/services/consultancy/o2/insights.png" alt="" data-aos="fade-left" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NextCase name="FSB" link="/case-studies/fsb"></NextCase>
    </div>
</template>

<script>
import {setBackgroundImage} from '@/utilities';
import AppScreens from '@/components/common/AppScreens';
import NextCase from '@/components/common/NextCase';

export default {
    name: 'O2',
    components: {
        AppScreens,
        NextCase,
    },
    data() {
        return {
            appScreens: ['services/consultancy/o2/app-login.png', 'services/consultancy/o2/venues.png', 'services/consultancy/o2/venue-details.png'],
        };
    },
    mounted() {
        setBackgroundImage();
    },
    metaInfo() {
        return {
            title: 'O2 Wifi | consultancy case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'e9’s consultancy provided O2 with experts in process and technology. They were able to advise on real business change, with an in-depth knowledge and understanding of current systems and services, deployed across 02’s Wifi estate',
                },
                {name: 'keywords', content: 'case, study, 02, wifi, small, businesses app, development, software, brand, consultancy, services, consultant'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#032b5a, 75%);
}
.mt30 {
    margin-top: 30px;
    @include media-breakpoint-down(xs) {
        margin-top: 21px;
    }
}
</style>
