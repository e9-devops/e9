<template>
    <div>
        <section class="pb-0 text-top">
            <div class="container">
                <div class="row mb-4 mb-lg-6 align-items-end">
                    <div class="col-lg-6">
                        <img src="@/assets/images/services/consultancy/fsb/logo.jpg" alt="" class="brand-logo mb-1" />
                        <p>Connecting the FSB to its members</p>
                    </div>
                    <div class="col-lg-6">
                        <p class="lead">
                            For 45 years the FSB have continued their mission of helping small businesses achieve their ambitions across the UK. The FSB also gives knowledge and shares events with its
                            huge membership base.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="imagebg no-content">
            <div class="background-image-holder">
                <img src="@/assets/images/services/consultancy/fsb/cover.jpg" alt="" />
            </div>
        </section>
        <div class="container-fluid mt-lg-6">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-md-11">
                    <AppScreens :imgArray="appScreens" class="pt-8 pb-0"></AppScreens>
                </div>
            </div>
        </div>
        <NextCase name="Sherbet Ride" link="/case-studies/sherbet-ride"></NextCase>
    </div>
</template>

<script>
import {setBackgroundImage} from '@/utilities';
import AppScreens from '@/components/common/AppScreens';
import NextCase from '@/components/common/NextCase';

export default {
    name: 'FSB',
    components: {
        AppScreens,
        NextCase,
    },
    data() {
        return {
            appScreens: ['services/consultancy/fsb/professional.png', 'services/consultancy/fsb/fesbee.png', 'services/consultancy/fsb/events-list.png'],
        };
    },
    mounted() {
        setBackgroundImage();
    },
    metaInfo() {
        return {
            title: 'FSB | consultancy case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'The FSB approached us to help them find solutions that connect people to data. With e9’s experience in user centric development, we were perfectly placed to help. A project to develop a fluid, feature rich, mobile application commenced',
                },
                {name: 'keywords', content: 'case, study, fsb, federation, small, businesses app, development, software, brand, consultancy, services, consultant'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#40b9ba, 25%);
}
</style>
