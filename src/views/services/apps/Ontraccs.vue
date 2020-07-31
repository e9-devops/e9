<template>
    <div>
        <PageCover :img-url="logoUrl" :desc="pageDesc">
            <div class="col-lg-10 offset-lg-1 mt-5 mb-2 mt-lg-0 mb-lg-0">
                <div id="planeAnim" data-aos="lottie" data-aos-id="plane-anim" data-aos-mirror="true"></div>
            </div>
        </PageCover>
        <section class="pt-0 pb-6">
            <img src="@/assets/images/services/software/ontraccs/boarding-pass.jpg" alt="" />
        </section>

        <ImageBlock
            :height="60"
            media-align="right"
            title="Hotel availability management"
            desc="The availability portal makes it extremely easy and quick to identify unoccupied rooms in nearby hotels and the prices for any number of rooms for any number of people.">
            <div class="col-10">
                <img src="@/assets/images/services/software/ontraccs/availability.jpg" alt="" class="" />
            </div>
        </ImageBlock>
        <ImageBlock :height="60" media-align="left" title="Manage bookings" desc="A logical and a well-defined user interface makes it easy to make, edit and manage bookings.">
            <div class="col-10">
                <img src="@/assets/images/services/software/ontraccs/bookings.jpg" alt="" class="" />
            </div>
        </ImageBlock>
        <NextCase name="ITV" link="/case-studies/itv" class="pt-5 pt-lg-6"></NextCase>
    </div>
</template>

<script>
import ImageBlock from '@/components/common/ImageBlock';
import NextCase from '@/components/common/NextCase';
import PageCover from '@/components/common/PageCover';

export default {
    name: 'Ontraccs',
    components: {
        PageCover,
        ImageBlock,
        NextCase,
    },
    data() {
        return {
            logoUrl: 'services/software/ontraccs/logo.png',
            pageDesc:
                'e9 and OnTraccs joined forces to provide stranded airline passengers with best-in-class, high quality accommodation availability in real-time. The solution is used by over 40 airlines at London Heathrow and Charles de Gaulle Airport in Paris.',
        };
    },
    mounted() {
        let planeAnim = this.$lottie.loadAnimation({
            container: document.getElementById('planeAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/data/lottie/ontraccs.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        planeAnim.setSpeed(2);

        planeAnim.setSubframe(false);

        document.addEventListener('aos:in:plane-anim', () => {
            //console.log('plane-anim: play');
            planeAnim.play();
        });
        document.addEventListener('aos:out:plane-anim', () => {
            //console.log('plane-anim: pause');
            planeAnim.pause();
        });
    },
    metaInfo() {
        return {
            title: 'OnTraccs | software and app case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'After the initial scope, a user-friendly accommodation booking portal, including the ability to provide short notice accommodation to stranded staff and passengers was developed',
                },
                {name: 'keywords', content: 'case, study, ontraccs, app, development, software'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.brand-light-bg {
    background: lighten(#68b8f6, 20%);
}
#planeAnim {
    border-radius: $card-border-radius;
    overflow: hidden;
    background: lighten(#68b8f6, 10%);
    padding: 32px 0;
    transform: scaleX(-1);
}
</style>
