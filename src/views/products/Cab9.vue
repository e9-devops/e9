<template>
    <div>
        <PageCover :img-url="logoUrl" :desc="pageDesc" :link-text="websiteLinkText" :link-url="websiteLinkUrl">
            <div id="cab9Anim" data-aos="lottie" data-aos-id="cab9-anim" data-aos-mirror="true"></div>
        </PageCover>
        <ImageSection
            class="pt-0 pb-6 pb-lg-0"
            title="Empowering UK ground transport"
            desc="After consultation with industry experts, Cab9 was developed from the ground up. Answering real issues facing ground transport companies in the UK. This enabled us to create features, modules and reports that actually provide valuable and actionable information. Integration with other platforms is supported giving you, as a business owner the opportunity for growth and expansion. Each area of the solution is clear to understand and interact with, making it engaging to use, which encourages quick adoption among your work force. With nationwide subscribers to the platform, some running fleets in excess of 400 drivers, Cab9 is quickly becoming best in class">
            <img src="@/assets/images/products/cab9/all-screens.jpg" alt="" class="" />
        </ImageSection>
        <ImageBlock
            :height="60"
            class="mt-lg-6"
            container-class="pt-lg-0 pb-lg-0"
            media-align="left"
            title="Innovative way to manage your private hire & taxi business"
            desc="Cab9 has been designed to allow you to focus on growth and real business, rather than worrying about pricing, record keeping and invoicing. The system offers a range of pricing functions, so no matter what the job, you will get an accurate price at your fingertips. Providing data to local authorities becomes simple, with the array of reports which can be created. Financial tracking including invoicing and driver pay is all taken care of.">
            <div class="col-10">
                <img src="@/assets/images/products/cab9/dashboard.jpg" alt="" class="" />
            </div>
        </ImageBlock>
        <ImageBlock
            :height="60"
            media-align="right"
            title="Keeping clients at the heart of your business"
            desc="Keeping clients happy is always a focus. With our client modules you can set specific parameters to ensure the client always gets what they want. This might be a specific vehicle type at a set rate, only certain drivers or collection from a predetermined location. Whatever your clients’ needs are, you can rest assured Cab9 will help you deliver consistent results. As well as the usual web booking to go on your website, we offer client specific portals, adding that personal touch.">
            <div class="col-10">
                <img src="@/assets/images/products/cab9/client-module.jpg" alt="" />
            </div>
        </ImageBlock>
        <ImageBlock
            :height="60"
            media-align="left"
            title="Intuitive driver app with seamless route management"
            desc="Drivers are at the heart of your business and our driver app reflects this. Simple to use and understand, the driver app keeps Information to hand. Bookings, earnings and navigation are just some of the benefits it offers. If you need to speak to your drivers, we have included Cab9 chat, which allows you to keep in communication with your fleet.">
            <div class="col-10 col-md-8">
                <img src="@/assets/images/products/cab9/driver-app.jpg" alt="" />
            </div>
        </ImageBlock>
        <ImageBlock
            :height="60"
            class="mb-0 mb-xl-8"
            media-align="right"
            title="Integrations and work share"
            desc="Integration with other platforms and the ability to cover work has been harnessed. Connecting with service providers and aggregators used to be awkward, not with Cab9. We understand the importance of integration and have made it a simple part of your workflow. Our inbuilt workshare platform provides you the ability to make sure bookings are covered with partners you trust.">
            <div class="col-10">
                <img src="@/assets/images/products/cab9/work-share.jpg" alt="" />
            </div>
        </ImageBlock>
        <AppScreens
            class="bg-primary-light"
            title="And what about…"
            desc="We didn’t want to go into every detail, but we certainly offer all the other components you would expect in a top-class dispatch system from Google maps integration, flight tracking and call popping. SMS messaging systems and beautifully crafted email templates both with driver tracking. To really learn about Cab9 please visit our dedicated <a href='https://cab9.app/' target='_blank' class='font-weight-demi'>Cab9</a> website."
            :imgArray="appScreens">
        </AppScreens>
        <NextCase name="Cinemas Online" link="/case-studies/cinemas-online"></NextCase>
    </div>
</template>

<script>
import AppScreens from '@/components/common/AppScreens';
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
        AppScreens,
        NextCase,
    },
    data() {
        return {
            logoUrl: 'products/cab9/logo.png',
            pageDesc:
                'e9 has developed a trinity of a high-functioning dispatch system, driver app and passenger app, created to ease the day-to-day functioning of private hire businesses in the UK.',
            websiteLinkText: 'Visit Website',
            websiteLinkUrl: 'https://cab9.app/',
            appScreens: ['products/cab9/flexible.png', 'products/cab9/instant.png', 'products/cab9/on-demand.png'],
        };
    },
    mounted() {
        let cab9Anim = this.$lottie.loadAnimation({
            container: document.getElementById('cab9Anim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/cab9.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        cab9Anim.setSubframe(false);

        document.addEventListener('aos:in:cab9-anim', () => {
            //console.log('cab9-anim: play');
            cab9Anim.play();
        });
        document.addEventListener('aos:out:cab9-anim', () => {
            //console.log('cab9-anim: pause');
            cab9Anim.pause();
        });
    },
    metaInfo() {
        return {
            title: 'Cab9 | software case study - e9',
            meta: [
                {name: 'description', content: 'A world class, powerful, Simple and Innovative way to manage your Private Hire & Taxi Business'},
                {name: 'keywords', content: 'case, study, cab9,development, software, brand, saas, solutions'},
            ],
        };
    },
};
</script>
