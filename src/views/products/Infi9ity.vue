<template>
    <div>
        <PageCover :img-url="logoUrl" :desc="pageDesc">
            <div id="infi9ityAnim" data-aos="lottie" data-aos-id="infi9ity-anim" data-aos-mirror="true"></div>
        </PageCover>
        <ImageSection
            class="pt-0 pb-lg-0"
            title="Integrations for seamless booking management"
            desc="Integrations via API to 3rd party management systems and portals, create a seamless transition for the digital booking experience. Fewer touchpoints, greater transactional security and true visibility for the consumer and all service providers involved in the journey.">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-12 col-11">
                        <img src="@/assets/images/products/infi9ity/integrations.png" alt="" class="" />
                    </div>
                </div>
            </div>
        </ImageSection>
        <ImageBlock
            :height="60"
            media-align="right"
            title="Complete booking visibility"
            desc="The visibility Infi9ity provides is essential to its success. It allows continuity in service standards across countries. Completed journey legs can be seen at specific predetermined levels depending on the user's access, this gives peace of mind to all involved, knowing passengers are being looked after every step of the way.">
            <div class="col-lg-10 col-md-12 col-11">
                <img src="@/assets/images/products/infi9ity/bookings.jpg" alt="" class="" />
            </div>
        </ImageBlock>
        <ImageBlock
            :height="60"
            container-class="pt-lg-6 pb-lg-6"
            media-align="left"
            title="Tailor the journey to your needs"
            desc="Our ever growing network offers massive value to fleet owners, with more work opportunities in a disrupted marketplace. Also with a large network, many different levels of service provider are available, so it is easy to match passengers with the service they want - we do not fit round pegs in square holes.">
            <div class="col-lg-10 col-md-12 col-11">
                <img src="@/assets/images/products/infi9ity/special-req.jpg" alt="" />
            </div>
        </ImageBlock>
        <ImageBlock
            :height="60"
            media-align="right"
            title="Prebooked or on demand"
            desc="The platform has been developed to supply on demand transportation solutions as well as pre-booked travel. Industry and corporate clients use infi9ity at short notice to move people, in comfort and safety to and from events, gatherings and meetings via our individualised user portals.">
            <div class="col-lg-10 col-md-12 col-11">
                <img src="@/assets/images/products/infi9ity/live-bookings.jpg" alt="" />
            </div>
        </ImageBlock>
        <section class="bg-primary-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="text-center mb-6">
                            <h2 class="">Stay ahead with the management suite.</h2>
                            <p>
                                Infi9inty is built with a comprehensive suite of billing and management functions, with insightful reports, policy tools and cost tracking. This allows you to stay in
                                control at all times. With flexible billing options, fully automated expense reports and invoicing, you can now focus on what’s important.
                            </p>
                        </div>
                        <img src="@/assets/images/products/infi9ity/dashboard.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <NextCase name="Reps UK" link="/case-studies/reps-uk"></NextCase>
    </div>
</template>

<script>
import ImageBlock from '@/components/common/ImageBlock';
import ImageSection from '@/components/common/ImageSection';
import NextCase from '@/components/common/NextCase';
import PageCover from '@/components/common/PageCover';

export default {
    name: 'Cab9View',
    components: {
        PageCover,
        ImageBlock,
        ImageSection,
        NextCase,
    },
    data() {
        return {
            logoUrl: 'products/infi9ity/logo.png',
            pageDesc:
                'Infi9ity makes end to end ground transportation solutions easy to manage for customers and service providers. Connecting people to the services they deserve is important to us, allowing everyone to harness the personal, high quality service they expect from local transportation companies. Passengers can travel in style, with the confidence that Infi9ity partners are trustworthy and professional.',
        };
    },
    mounted() {
        let infi9ityAnim = this.$lottie.loadAnimation({
            container: document.getElementById('infi9ityAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/infi9ity.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        infi9ityAnim.setSubframe(false);

        document.addEventListener('aos:in:infi9ity-anim', () => {
            //console.log('infi9ity-anim: play');
            infi9ityAnim.play();
        });
        document.addEventListener('aos:out:infi9ity-anim', () => {
            //console.log('infi9ity-anim: pause');
            infi9ityAnim.pause();
        });
    },
    metaInfo() {
        return {
            title: 'Infi9ity | software case study - e9',
            meta: [
                {
                    name: 'description',
                    content:
                        'Infi9ity makes end to end ground transportation solutions easy to manage for customers and service providers. Connecting people to the high quality service they expect from local transportation companies',
                },
                {name: 'keywords', content: 'case, study, infi9ity, software, brand, saas, solutions'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.bg-primary-light {
    background-color: lighten(#31849d, 50%);
}
</style>
