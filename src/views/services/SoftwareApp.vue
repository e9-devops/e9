<template>
    <div>
        <PageCover :title="pageTitle" :desc="pageDesc">
            <div id="appAnim" data-aos="lottie" data-aos-id="app-anim" data-aos-mirror="true"></div>
        </PageCover>
        <section class="text-center pt-0 pb-0">
            <div class="container">
                <div class="row justify-content-center mb-0 mb-md-6 mb-lg-8">
                    <div class="col-lg-10 offset-lg-1 text-center">
                        <h2>e9's Development Approach</h2>
                        <p>
                            The approach of E9 towards app and software development lays strong emphasis on scoping and understanding both the functional and non-functional specifications of the
                            project. The form of our applications is highly derived from the functionality they serve which controls the overall design of the application.<br /><br />
                            Back-end and front-end developers work together so that development runs smoothly from start to finish, and we push boundaries to the brink in order to build the optimal
                            software your business requires.
                        </p>
                    </div>
                </div>
                <div data-aos="fade" data-aos-id="devProcess" data-aos-once="true">
                    <div class="row justify-content-between">
                        <div class="col-xl-6 d-lg-flex justify-content-start">
                            <div class="process">
                                <div class="process-wrapper">
                                    <svg width="150px" height="300px" viewBox="0 0 150 300">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <path d="M0,1 C82.2904277,1 149,67.7095723 149,150 C149,232.290428 82.2904277,299 0,299" id="Shape" stroke="#979797"></path>
                                        </g>
                                    </svg>
                                    <div class="center">
                                        <div class="circle circle-1">
                                            <img src="@/assets/images/logo.png" />
                                        </div>
                                        <div class="circle circle-2"></div>
                                        <div class="circle circle-3"></div>
                                    </div>
                                    <ul class="features">
                                        <li class="start"></li>
                                        <li class="feature" :class="curSlide == 0 ? 'active-slide' : ''" @click="goToSlide(0)">
                                            <div>
                                                <div class="feature-icon">
                                                    <img src="@/assets/images/icons/discovery.png" />
                                                </div>
                                                <div class="feature-text">Discovery</div>
                                            </div>
                                        </li>
                                        <li class="feature" :class="curSlide == 1 ? 'active-slide' : ''" @click="goToSlide(1)">
                                            <div>
                                                <div class="feature-icon">
                                                    <img src="@/assets/images/icons/design.png" />
                                                </div>
                                                <div class="feature-text">Design</div>
                                            </div>
                                        </li>
                                        <li class="feature" :class="curSlide == 2 ? 'active-slide' : ''" @click="goToSlide(2)">
                                            <div>
                                                <div class="feature-icon">
                                                    <img src="@/assets/images/icons/development.png" />
                                                </div>
                                                <div class="feature-text">Development</div>
                                            </div>
                                        </li>
                                        <li class="feature" :class="curSlide == 3 ? 'active-slide' : ''" @click="goToSlide(3)">
                                            <div>
                                                <div class="feature-icon">
                                                    <img src="@/assets/images/icons/testing.png" />
                                                </div>
                                                <div class="feature-text">Testing</div>
                                            </div>
                                        </li>
                                        <li class="feature" :class="curSlide == 4 ? 'active-slide' : ''" @click="goToSlide(4)">
                                            <div>
                                                <div class="feature-icon">
                                                    <img src="@/assets/images/icons/deployment.png" />
                                                </div>
                                                <div class="feature-text">Deployment</div>
                                            </div>
                                        </li>
                                        <li class="end"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 offset-xl-0 col-sm-10 offset-sm-1">
                            <div id="process-stages-slider">
                                <VueSlickCarousel @beforeChange="beforeSlideChange" @afterChange="afterSlideChange" ref="carousel" v-bind="sliderSettings" class="mb-10 mb-xl-0">
                                    <div
                                        v-for="(item, index) in processSlides"
                                        :key="item.name"
                                        class="process-stage-text"
                                        :style="{'background-image': 'url(' + require(`@/assets/images/icons/${item.img}`) + ')'}">
                                        <p class="emphasis text-xl-center" :id="'process-' + index"></p>
                                    </div>
                                </VueSlickCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-0 pt-xl-10">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <router-link class="d-flex align-items-center justify-content-center next-arrow" to="/case-studies">
                        <h3 class="font-weight-demi">Case Studies</h3>
                        <p class="t-xl pl-3"><i class="fa fa-angle-right" aria-hidden="true"></i></p>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

import anime from 'animejs';
import PageCover from '@/components/common/PageCover';

let typeInterval;
let tl = null;

export default {
    name: 'SoftwareApp',
    components: {VueSlickCarousel, PageCover},
    data() {
        return {
            pageTitle: 'Software and App Development',
            pageDesc:
                'Whether it be building from scratch or remodelling something pre-existing, our development team are here to create something extraordinary. <br /><br />We offer a wide range of development services so as to achieve maximum outreach potential and take your business further, which include mobile app development, web development, digital product design and much more.',
            processSlides: [
                {
                    name: 'Discovery',
                    img: 'discovery.png',
                    text: 'We always start with building a relationship with you. With a user centric approach, we then learn about your business challenges, goals and needs.',
                },
                {
                    name: 'Design',
                    img: 'design.png',
                    text: 'We leverage user stories, required business outcomes and a wealth of technology expertise, to design modern and capable systems for you. ',
                },
                {
                    name: 'Development',
                    img: 'development.png',
                    text: 'Our development teams focus heavily on the beauty of the architecture, ensuring the overall solution is robust, efficient and pleasurable.',
                },
                {
                    name: 'Testing',
                    img: 'testing.png',
                    text: 'End to end testing is carried out by our handpicked project managers and their team. Each module is reviewed in detail, from function to form. ',
                },
                {
                    name: 'Deployment',
                    img: 'deployment.png',
                    text: ' We predictably deploy our applications to the chosen environment, at any scale, on time, with our team supporting you at every step.',
                },
            ],
            sliderSettings: {
                dots: false,
                arrows: false,
                fade: true,
                infinite: false,
                speed: 500,
                autoplay: false,
                autoplaySpeed: 10000,
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: false,
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            dots: true,
                        },
                    },
                ],
            },
            curSlide: null,
        };
    },
    methods: {
        beforeSlideChange(oldSlideIndex, newSlideIndex) {
            this.curSlide = newSlideIndex;
            if (!this.processSlides[newSlideIndex].typed) {
                document.getElementById('process-' + newSlideIndex).innerHTML = '';
            }

            clearInterval(typeInterval);
        },
        afterSlideChange(slideIndex) {
            let container = document.getElementById('process-' + slideIndex);
            let txt = this.processSlides[slideIndex].text;
            if (this.processSlides[slideIndex].typed) {
                container.innerHTML = txt;
            } else {
                this.processSlides[slideIndex].typed = true;
                let i = 0;
                typeInterval = setInterval(() => {
                    if (i < txt.length) {
                        container.innerHTML += txt.charAt(i);
                        i++;
                    }
                }, 10);
            }
        },
        goToSlide(slide) {
            this.$refs.carousel.goTo(slide);
        },
    },
    mounted() {
        let appAnim = this.$lottie.loadAnimation({
            container: document.getElementById('appAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/data/lottie/software-app.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        appAnim.setSubframe(false);

        document.addEventListener('aos:in:app-anim', () => {
            appAnim.play();
        });
        document.addEventListener('aos:out:app-anim', () => {
            appAnim.pause();
        });

        anime.set('.features .end', {opacity: 0});
        tl = anime.timeline({
            autoplay: false,
            duration: 500,
            easing: 'linear',
        });

        tl.add({
            targets: '.features .feature',
            opacity: [0, 1],
            delay: 1000,
        });

        tl.add({
            targets: '.features .start',
            opacity: [0, 1],
        });

        tl.add({
            targets: '.process-wrapper path',
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 2000,
            complete: function () {
                anime({
                    targets: '.features .end',
                    opacity: [0, 1],
                });
            },
        });

        tl.add(
            {
                targets: '.feature .feature-text',
                opacity: [0, 1],
                delay: anime.stagger(285),
            },
            '-=1715'
        );

        tl.add({
            targets: '#process-stages-slider',
            opacity: [0, 1],
            complete: () => {
                this.$refs.carousel.play();
                this.curSlide = 0;
                this.afterSlideChange(0);
            },
        });

        document.addEventListener('aos:in:devProcess', () => {
            tl.play();
        });
    },
    beforeDestroy() {
        clearInterval(typeInterval);
        typeInterval = null;
        tl.pause();
    },
    metaInfo() {
        return {
            title: 'Software Development and Application design - e9',
            meta: [
                {name: 'description', content: 'Engage us with your bespoke software development and native mobile application design requirements for results that exceed expectations'},
                {name: 'keywords', content: 'software, app, design, bespoke, software, development, website, desiging'},
            ],
        };
    },
};
</script>
