<template>
    <div>
        <PageCover :title="pageTitle" :desc="pageDesc">
            <div id="servicesAnim" data-aos="lottie" data-aos-id="services-anim" data-aos-mirror="true"></div>
        </PageCover>
        <section class="pt-0 pt-lg-6 pt-xl-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="text-center mb-6 mb-xl-8">
                            <h2 class="">Business transformation</h2>
                            <p>
                                The services we offer include software and app solutions that are capable of transforming your business, turning your vision into a well constructed, considered
                                reality. Our technical consulting services offer exceptional value in exploring new, web based business and brand strategies. <br /><br />e9 also offers compelling
                                website design and branding, created with an acute eye for detail while making sure your message is clear.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between align-items-center">
                    <div class="col-sm-6 mb-4 mb-md-0">
                        <img src="@/assets/images/services/software-app.svg" alt="" />
                    </div>
                    <div class="col-sm-5">
                        <h3>Software & App Development</h3>
                        <p class="mb-5">
                            We adhere to a user-centric design ethic to make sure our systems provide real value. Our software solutions have been adopted across many business verticals, allowing
                            companies to evolve and hit business objectives in style.
                        </p>
                        <router-link tag="a" to="/services/software-app" class="btn btn-primary"> Learn More </router-link>
                    </div>
                </div>
                <div class="row justify-content-between align-items-center mt-8">
                    <div class="col-sm-6 order-md-2 mb-4 mb-md-0">
                        <img src="@/assets/images/services/technical-consultancy.svg" alt="" />
                    </div>
                    <div class="col-sm-5">
                        <h3>Technical Consultancy</h3>
                        <p class="mb-5">
                            e9’s technical experts have built relationships and assisted global business, with their knowledge and understanding of complex infrastructure. We advise on how our
                            solutions help you hit business objectives.
                        </p>
                        <router-link tag="a" to="/services/technical-consultancy" class="btn btn-primary"> Learn More </router-link>
                    </div>
                </div>
                <div class="row justify-content-between align-items-center mt-8">
                    <div class="col-sm-6 mb-4 mb-md-0">
                        <img src="@/assets/images/services/web-branding.svg" alt="" />
                    </div>
                    <div class="col-sm-5">
                        <h3>Website & Branding</h3>
                        <p class="mb-5">
                            We believe the true definition of design is limitless creativity and an uncompromising eye for detail. Combine that with our tailored-to-you business strategy and you get
                            outstanding solutions, with modern contemporary design elements.
                        </p>
                        <router-link tag="a" to="/services/website-branding" class="btn btn-primary"> Learn More </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageCover from '@/components/common/PageCover';
export default {
    name: 'Services',
    components: {
        PageCover,
    },
    data() {
        return {
            pageTitle: 'Transforming complexity into simplicity. <span class="text-primary">Beautifully.</span>',
            pageDesc:
                'We put our clients at the center of everything we do. Understanding their challenges, we craft solutions with pride and passion.<br /><br />e9’s competence in app development pans across industries such as transportation, telecommunication, construction and entertainment to name a few. We have a track record of providing quality mobile solutions to complex and diverse problems on both an agile short-term and long-term basis.',
        };
    },
    mounted() {
        //Cover animation
        let servicesAnim = this.$lottie.loadAnimation({
            container: document.getElementById('servicesAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/services.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        servicesAnim.setSubframe(false);

        document.addEventListener('aos:in:services-anim', () => {
            servicesAnim.play();
        });
        document.addEventListener('aos:out:services-anim', () => {
            servicesAnim.pause();
        });
    },
    metaInfo() {
        return {
            title: 'Software Development, consultancy and brand development - e9',
            meta: [
                {name: 'description', content: 'Software development, consultancy and brand development solutions, allowing you to meet business outcomes. Fast, functional and future proof'},
                {name: 'keywords', content: 'consultancy, branding, marketing, app, design, software, development, mobile, application, ios, android'},
            ],
        };
    },
};
</script>
