<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-4 mb-lg-6 align-items-end">
                    <div class="col-lg-6">
                        <img src="@/assets/images/services/consultancy/sherbet/logo.png" alt="" class="brand-logo mb-1" />
                        <p class="mb-4">Assisting Sherbet drive down carbon emissions</p>
                    </div>
                    <div class="col-lg-6">
                        <p class="lead">Sherbet Ride is a 500 strong all-electric taxi fleet which offers a green transport solution in and around London.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="imagebg no-content" data-overlay="1">
            <div class="background-image-holder">
                <img src="@/assets/images/services/consultancy/sherbet/cover.jpg" alt="" />
            </div>
        </section>
        <section class="pb-6 pb-xl-8">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-11">
                        <img src="@/assets/images/services/consultancy/sherbet/web-booker.jpg" alt="" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
                    </div>
                </div>
            </div>
        </section>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-md-11">
                    <AppScreens :imgArray="appScreens" class="brand-light-bg pt-8 pt-lg-9"></AppScreens>
                </div>
            </div>
        </div>
        <NextCase name="LPHCA" link="/case-studies/lphca"></NextCase>
    </div>
</template>

<script>
import {setBackgroundImage} from '@/utilities';
import AppScreens from '@/components/common/AppScreens';
import NextCase from '@/components/common/NextCase';

export default {
    name: 'Sherbet',
    components: {
        AppScreens,
        NextCase,
    },
    data() {
        return {
            appScreens: ['services/consultancy/sherbet/booking-1.png', 'services/consultancy/sherbet/booking-2.png', 'services/consultancy/sherbet/booking-3.png'],
        };
    },
    mounted() {
        setBackgroundImage();
    },
    metaInfo() {
        return {
            title: 'Sherbet Ride | consultancy case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'Technical consultancy with Sherbet Ride identified the need for a modern and progressive user experience for ride hailing. Business processes were established, a project to develop an intuitive user app experience was scoped to establish Sherbet Ride as market leaders',
                },
                {name: 'keywords', content: 'case, study, sherbet, ride, app, development, software, brand, consultancy, services, consultant'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#088036, 60%);
}
</style>
