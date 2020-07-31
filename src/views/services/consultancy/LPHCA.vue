<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-4 mb-lg-6 align-items-end">
                    <div class="col-lg-6">
                        <h1>LPHCA</h1>
                        <p>Growing members while serving.</p>
                    </div>
                    <div class="col-lg-6">
                        <p class="lead">
                            The Licensed Private Hire Car Association (LPHCA) is a trade body that passionately represents the interests of Licensed Taxi & Private Hire Vehicle Operators in the UK.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="imagebg no-content" data-overlay="1">
            <div
                class="background-image-holder"
                :style="{'background-image': 'url(' + require('@/assets/images/services/consultancy/lphca/cover.jpg') + ')', 'background-position': '50% 0 !important'}"></div>
        </section>
        <section class="pb-6 pb-xl-8">
            <div class="container">
                <div class="col-lg-10 offset-lg-1">
                    <div class="text-center">
                        <p>
                            With an ever-growing membership that required to be graded on a regular basis, e9ine created a powerful, web based membership platform offering access to vital information
                            and offers aimed at the audience. In addition, grading was transferred to the platform offering the general public with a reference point for safety, service level
                            performance and compliance.
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center mt-6 mt-xl-8">
                    <div class="col-sm-11">
                        <img src="@/assets/images/services/consultancy/lphca/members.jpg" alt="" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
                    </div>
                </div>
            </div>
        </section>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-md-11">
                    <div class="row">
                        <div class="col-sm-6">
                            <section class="brand-light-bg height-60 imagebg d-flex align-items-center">
                                <div class="row justify-content-center">
                                    <div class="col-10">
                                        <img src="@/assets/images/services/consultancy/lphca/grading.png" alt="" data-aos="fade-right" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="col-sm-6 mt-4 mt-md-0">
                            <section class="brand-light-bg height-60 imagebg d-flex align-items-center">
                                <div class="row justify-content-center">
                                    <div class="col-10">
                                        <img src="@/assets/images/services/consultancy/lphca/payments.png" alt="" data-aos="fade-left" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NextCase name="InterContinental London - The O2" link="/case-studies/iclondon-theo2"></NextCase>
    </div>
</template>

<script>
import NextCase from '@/components/common/NextCase';

export default {
    name: 'O2',
    components: {
        NextCase,
    },
    metaInfo() {
        return {
            title: 'LPHCA | consultancy case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'As a large UK trade body, the Licensed Private Hire Car Association needed to grow and provide excellent quality information to its valuable membership. Here you learn how we helped them through consultancy',
                },
                {name: 'keywords', content: 'case, study, lphca, private, hire, car, association, cms, development, software, brand, consultancy, services, consultant'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#214291, 60%);
}
</style>
