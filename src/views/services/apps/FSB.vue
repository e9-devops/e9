<template>
    <div>
        <PageCover :desc="pageDesc" :img-url="logoUrl" class="pb-lg-8">
            <div class="row justify-content-center">
                <div class="col-sm-7">
                    <img src="@/assets/images/services/software/fsb/cover.jpg" alt="" />
                </div>
            </div>
        </PageCover>
        <section class="brand-light-bg pb-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 text-center">
                        <h2>Mobile App</h2>
                        <p>
                            A feature rich, API driven mobile app with a high quality and animated UI enables members to access vital resources and expertise that helps run their businesses.
                            Membership is also managed via the app, with a profile page and interactive membership card. An interactive text based chatbot provides a seamless way to interact with all
                            of the apps features, which includes booking to attend local events. A timeline logging all app interactions helps the FSB to provide support where it is most needed.
                        </p>
                    </div>
                </div>
            </div>
            <AppScreens :imgArray="appScreens" class="pt-6 pt-lg-8"></AppScreens>
        </section>
        <NextCase name="CitySprint UK" link="/case-studies/citysprint"></NextCase>
    </div>
</template>

<script>
import AppScreens from '@/components/common/AppScreens';
import NextCase from '@/components/common/NextCase';
import PageCover from '@/components/common/PageCover';

export default {
    name: 'Cab9View',
    components: {
        PageCover,
        AppScreens,
        NextCase,
    },
    data() {
        return {
            logoUrl: 'services/software/fsb/logo.jpg',
            pageDesc:
                'e9 help the FSB members to access and share knowledge enabling them to receive vital business services including advice, financial expertise, support and a powerful voice heard in government.',
            appScreens: ['services/consultancy/fsb/professional.png', 'services/consultancy/fsb/fesbee.png', 'services/consultancy/fsb/events-list.png'],
        };
    },
    metaInfo() {
        return {
            title: 'Federation of Small Businesses | software and app case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'For the FSB, a feature rich, API driven mobile application was developed, with a high quality and animated UI, to engage the users and guide them to the resources they are looking for',
                },
                {name: 'keywords', content: 'case, study, federation, small, businesses, app, development, software'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#40b9ba, 42%);
}
</style>
