<template>
    <div>
        <PageCover :slides="heroSlides" :scroller="true" scroll-to-section="#about">
            <div id="heroAnim" data-aos="lottie" data-aos-id="hero-anim" data-aos-mirror="true"></div>
        </PageCover>
        <section id="about" class="pt-0 pt-xl-8">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-5 col-md-6">
                        <h2 class="d-block d-sm-none">British Aesthetics,<br /><span class="text-primary">Indian Spirit</span></h2>
                        <div class="bt-ind-animation mb-4 mb-md-0">
                            <div class="background-image-holder">
                                <img src="@/assets/images/home/bt-ind/background.png" alt="" />
                            </div>
                            <img src="@/assets/images/home/bt-ind/landmarks.png" alt="" class="landmarks" />
                            <img src="@/assets/images/home/bt-ind/bus.png" alt="" class="bus" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2 class="d-none d-sm-block">British Aesthetics,<br /><span class="text-primary">Indian Spirit</span></h2>
                        <p class="mb-5">
                            Based in London, with roots in India. e9 has developed highly motivated talent, into productive teams across continents. This approach keeps us in touch with clients whilst
                            delivering excellent value. <br /><br />Together, we deliver smart, creative, technology-led solutions for brands to stand out from the crowd.
                        </p>
                        <router-link tag="a" to="/about" class="btn btn-primary">
                            Learn More
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-primary-light">
            <div class="container">
                <div class="row justify-content-center mb-6 mb-lg-4 mb-xl-5">
                    <div class="col-md-10 text-center">
                        <h2>
                            Tech + Design + Passion = 360 Degrees of
                            <span class="text-primary">Digital Expertise</span>
                        </h2>
                        <p>
                            Using the latest technologies and employing a design first approach, we are agile in our approach to software development. We love building digital solutions for business
                            problems.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="h-card mb-6 mb-lg-0">
                            <img src="@/assets/images/home/development.png" alt="" class="h-card-img" />
                            <div class="h-card-text">
                                <h4 class="mt-4 font-weight-demi">Tech</h4>
                                <p>
                                    Our recipe is simple. First, we identify the problem, making sure we understand every facet. Then we blend strategy with technology, bake in innovation. Perfect
                                    results every time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="h-card mb-6 mb-lg-0">
                            <div>
                                <img src="@/assets/images/home/design.png" alt="" class="h-card-img" />
                            </div>
                            <div class="h-card-text">
                                <h4 class="mt-4 font-weight-demi">Design</h4>
                                <p>
                                    Powerful technology needs an effective interface. We believe great design enables a deeper consumer connection. We help you stand out and engage with the right
                                    audience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="h-card">
                            <img src="@/assets/images/home/consultancy.png" alt="" class="h-card-img" />
                            <div class="h-card-text">
                                <h4 class="mt-4 font-weight-demi">Passion</h4>
                                <p>
                                    Passion is our secret sauce. It brings everything together. We love what we do and get great pleasure out of building intuitive business solutions so you can win,
                                    retain and grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row justify-content-center mb-4 mb-lg-6">
                    <div class="col-sm-10 text-center">
                        <h2>Discover Our Work</h2>
                        <p>
                            We have established ourselves as a unique and innovative partner in the area of software and application development. We are a forward thinking, dynamic and proactive
                            company which prides itself on providing our clients with a truly memorable experience.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 order-md-2 text-center">
                        <div id="rocketAnim" data-aos="lottie" data-aos-id="rocket-anim" data-aos-mirror="true"></div>
                    </div>
                    <div class="col-md-4 order-md-1 mb-6 mb-lg-0">
                        <h3>Products</h3>
                        <p class="mb-5">
                            Our product portfolio is constantly growing, in a range of business verticals. We believe in bringing enterprise level technology to SMEs. We identify opportunities and
                            develop robust, engaging solutions which add true value to the marketplace.
                        </p>
                        <router-link tag="a" to="/products" class="btn btn-primary"> Explore </router-link>
                    </div>
                    <div class="col-md-4 order-md-3">
                        <h3>Services</h3>
                        <p class="mb-5">
                            Whether software development, consultation or branding, we identify the challenges and create solutions. Focused on catching the eye and keeping the user engaged, our
                            services are developed from us having an understanding about who you are.
                        </p>
                        <router-link tag="a" to="/services" class="btn btn-primary"> Explore </router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-primary-light">
            <div class="container">
                <div class="row justify-content-center mb-4">
                    <div class="col-sm-10 text-center">
                        <h2>Trusted and privileged to serve</h2>
                        <p>
                            e9 has created a niche for itself for being a go-to team for our clients to consult and develop complicated business solutions. Our client list include Telefonica, O2 Wifi,
                            CitySprint, Arora Group, ITV, Reel Cinemas, Farepilot and Sherbet London to name a few.
                        </p>
                    </div>
                </div>
                <ClientsSlider />
            </div>
        </section>
        <section class="height-100 imagebg creative-bunch" data-overlay="6">
            <div class="background-image-holder">
                <img src="@/assets/images/home/e9-office.jpg" alt="" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h2 class="display-3 font-weight-bold">We are a creative bunch</h2>
                        <p class="mb-5">
                            We like to think we are a little bit out of the ordinary. Bright, bold and funky.
                        </p>
                        <router-link to="/team" tag="a" class="btn btn-primary">Want to know more?</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {setBackgroundImage} from '@/utilities';
import anime from 'animejs';
import ClientsSlider from '@/components/common/ClientsSlider';
import PageCover from '@/components/common/PageCover';
export default {
    components: {
        PageCover,
        ClientsSlider,
    },
    data() {
        return {
            heroSlides: [
                {
                    title: 'We <span class="text-primary">handcraft</span> great experiences.',
                    desc: 'Through our bespoke software and web development, we empower your business.',
                },
                {
                    title: 'Business software that looks <span class="text-primary">bloody good!</span>',
                    desc: 'No excuses for business technology to be grey and boring.',
                },
                {
                    title: 'Dynamic, agile and <br /><span class="text-primary">swift.</span>',
                    desc: 'Delivering in weeks, not months. An approach engineered to meet your goals.',
                },
            ],
        };
    },
    mounted() {
        setBackgroundImage();

        //Cover Animation
        let heroAnim = this.$lottie.loadAnimation({
            container: document.getElementById('heroAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/home.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        heroAnim.setSubframe(false);

        document.addEventListener('aos:in:hero-anim', () => {
            //console.log('hero-anim: play');
            heroAnim.play();
        });
        document.addEventListener('aos:out:hero-anim', () => {
            //console.log('hero-anim: pause');
            heroAnim.pause();
        });

        // Animated background effect
        anime({
            targets: '.bt-ind-animation .landmarks',
            translateX: ['0', '-100%'],
            duration: 5000,
            easing: 'linear',
            loop: true,
        });

        //Rocket Animation
        let rocketAnim = this.$lottie.loadAnimation({
            container: document.getElementById('rocketAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/rocket.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        rocketAnim.setSubframe(false);

        document.addEventListener('aos:in:rocket-anim', () => {
            //console.log('rocket-anim: play');
            rocketAnim.play();
        });
        document.addEventListener('aos:out:rocket-anim', () => {
            //console.log('rocket-anim: pause');
            rocketAnim.pause();
        });
    },
    metaInfo() {
        return {
            title: 'e9 - Bespoke software development and website design agency',
            meta: [
                {name: 'description', content: 'Bespoke software development and website design focused on user centric design'},
                {name: 'keywords', content: 'app, design, software, development, website, designing'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/pages/home';
</style>
