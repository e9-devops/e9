<template>
    <div>
        <PageCover :title="pageTitle" :desc="pageDesc">
            <video playsinline autoplay loop muted id="e9-circles">
                <source src="@/assets/images/agency/e9.webm" type="video/webm" />
                <source src="@/assets/images/agency/e9.mp4" type="video/mp4" />
            </video>
        </PageCover>
        <section class="bg-primary-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                        <h2>Our Approach</h2>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="animation-container" :class="currentAnim == 1 ? 'active' : ''">
                                    <div class="img-wrapper">
                                        <img src="@/assets/images/icons/animat-customize.png" alt="" class="static" />
                                        <img src="@/assets/images/icons/animat-customize.gif" alt="" class="gif" v-show="currentAnim == 1" />
                                    </div>
                                    <h4 class="animated-text font-weight-demi">Entertainment</h4>
                                    <p>
                                        We search for it in our daily lives. That’s why we keep this at the core of everything we create, so that your business is your pleasure.
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="animation-container" :class="currentAnim === 2 ? 'active' : ''">
                                    <div class="img-wrapper">
                                        <img src="@/assets/images/icons/animat-lightbulb.png" alt="" class="static" />
                                        <img src="@/assets/images/icons/animat-lightbulb.gif" alt="" class="gif" v-show="currentAnim === 2" />
                                    </div>
                                    <h4 class="animated-text font-weight-demi">Information</h4>
                                    <p>
                                        Knowledge is key, and information is power. Structuring information over an intuitive interface is our approach to design.
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-4 animation-container" :class="currentAnim === 3 ? 'active' : ''">
                                <div class="img-wrapper">
                                    <img src="@/assets/images/icons/animat-linechart.png" alt="" class="static" />
                                    <img src="@/assets/images/icons/animat-linechart.gif" alt="" class="gif" v-show="currentAnim === 3" />
                                </div>
                                <h4 class="animated-text font-weight-demi">Enlightenment</h4>
                                <p>
                                    The goal is simple. Provide information you never knew existed. Business decisions become basic instinct.
                                </p>
                            </div>
                        </div>
                        <h4 class="mt-4 mt-lg-6 text-primary">
                            Entertain. Enlighten. Inform. This is the trifecta. This is e9.
                        </h4>
                        <p class="mt-4 mt-lg-6">
                            We strongly believe all businesses seek out and connect with a combination of these concepts. We use this core ethos to determine the best journey to take you on from
                            problem to resolution.
                            <br /><br />With the power of this trio as one of our core values, everything we do revolves around them. Whether it’s web design, business software or app development, we
                            know the equation for growing your business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-dark text-white video-background" id="services">
            <div class="video-wrapper">
                <video loop autoplay muted playsinline>
                    <source src="@/assets/images/agency/code.mp4" type="video/mp4" />
                    <source src="@/assets/images/agency/code.webm" type="video/webm" />
                </video>
            </div>
            <div class="container">
                <div class="row justify-content-center mb-6 mb-lg-8">
                    <div class="col-md-10 text-center">
                        <h2>Our Capabilities</h2>
                        <h4 class="font-weight-demi text-muted">
                            We make the complex simple, and the simple delightful.
                        </h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4 mb-md-6 mb-lg-0">
                        <div>
                            <h4>Business</h4>
                            <ul class="list-unstyled lead">
                                <li class="mb-3">Product Strategy</li>
                                <li class="mb-3">Technical Consultation</li>
                                <li class="mb-3">User Experience Sessions</li>
                                <li class="mb-3">Business Research</li>
                                <li class="mb-3">Idea Workshops</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 d-md-flex justify-content-center mb-4 mb-md-6 mb-lg-0">
                        <div>
                            <h4>Design</h4>
                            <ul class="list-unstyled lead">
                                <li class="mb-3">UI/UX Design</li>
                                <li class="mb-3">Brand Development</li>
                                <li class="mb-3">Website Development</li>
                                <li class="mb-3">Proof of Concepts Design</li>
                                <li class="mb-3">Prototyping</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 d-md-flex justify-content-end">
                        <div>
                            <h4>Development</h4>
                            <ul class="list-unstyled lead">
                                <li class="mb-3">API Development</li>
                                <li class="mb-3">iOS/Android Native Apps</li>
                                <li class="mb-3">Hybrid Apps</li>
                                <li class="mb-3">Responsive Management Portals</li>
                                <li class="mb-3">Rapid Product Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row mt-lg-8 mt-6">
                    <div class="col-sm-12 text-center">
                        <p class="text-muted mb-5">
                            e9’s competence in app development pans across sectors such as transportation, telecommunication, construction, entertainment and entertainment to name a few.
                            <br />
                            <br />
                            We have a track record of providing quality mobile solutions to complex and diverse problems on both an agile short-term and long-term basis. Our working relationships
                            continue long after the initial project where we have been responsible for designing, developing, and successfully delivering numerous mobile and web applications, from
                            inception to launch and necessary audit thereafter.
                        </p>
                        <router-link to="/case-studies" class="btn btn-primary">Case Studies</router-link>
                    </div>
                </div>
            </div>
            <div class="container overflowing-content d-flex align-items-center" data-overlay="5">
                <div class="background-image-holder"><img src="@/assets/images/agency/e9-office.jpg" alt="" /></div>
                <div class="img-shadow"></div>
                <div class="row">
                    <div class="col-sm-8 offset-sm-1">
                        <h2 class="mb-5">
                            Our team aims to deliver engaging brand messages and craft outstanding work in every pixel.
                        </h2>
                        <router-link to="/team" class="btn btn-primary">View Team</router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-0 pb-lg-4">
            <div class="container">
                <div class="row justify-content-center mb-4">
                    <div class="col-sm-10 text-center">
                        <h2>Trusted and privileged to serve</h2>
                        <p>
                            We wouldn’t be where we are without our clients. They bring us their ideas and we impart our wisdom and show them what’s possible. From design to development technologies,
                            our passions don’t just lie in the end product but the process as a whole, and the first step is to explore that – together, as one.
                        </p>
                    </div>
                </div>
                <ClientsSlider :show-testimonials="false" />
            </div>
        </section>
    </div>
</template>

<script>
import {setBackgroundImage} from '@/utilities';
import ClientsSlider from '@/components/common/ClientsSlider';
import PageCover from '@/components/common/PageCover';

export default {
    name: 'Agency',
    components: {
        ClientsSlider,
        PageCover,
    },
    data() {
        return {
            pageTitle: 'We are e9',
            pageDesc:
                'Here at e9 we have established ourselves as a unique and innovative partner in the area of software and application development.<br /><br />We are a forward thinking, dynamic and proactive company which prides itself on providing our clients with a truly memorable experience.',
            sliderSettings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                dotsClass: 'slick-dots line-dots',
                arrows: false,
            },
            currentAnim: 1,
        };
    },
    mounted() {
        setBackgroundImage();

        //Animating intro text
        this.animationInterval = setInterval(() => {
            this.currentAnim++;
            if (this.currentAnim == 4) this.currentAnim = 1;
        }, 2700);
    },
    beforeDestroy() {
        clearInterval(this.animationInterval);
        this.animationInterval = null;
    },
    metaInfo() {
        return {
            title: 'Enterprise level software for the mass market - e9',
            meta: [
                {
                    name: 'description',
                    content: 'e9, based in london  offer Bespoke software development, website design and marketing solutions, focused on user centric design',
                },
                {name: 'keywords', content: 'e9, app, design, software, development, website, designing'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/pages/about';
</style>
