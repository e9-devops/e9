<template>
    <div>
        <PageCover :title="pageTitle" :desc="pageDesc">
            <div id="teamAnim" data-aos="lottie" data-aos-id="team-anim" data-aos-mirror="true"></div>
        </PageCover>
        <section class="bg-primary imagebg height-90 d-flex align-items-center" data-aos="anim" data-aos-id="we-believe" data-aos-once="true" data-aos-anchor-placement="center-bottom" id="we-believe">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                        <h2 class="mb-4 text-light font-weight-demi">We believe</h2>
                        <h1 class="mb-5">“Strive for perfection in everything you do. Take the best that exists and make it better. When it does not exist, design it.”</h1>
                        <p class="lead text-light mb-0">Sir Henry Royce</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="particleAnimCover" data-aos="anim" data-aos-id="particle-anim" data-aos-once="true" data-aos-anchor-placement="top-bottom">
            <div class="container-fluid">
                <h2 class="d-block d-lg-none">Our Culture & Values</h2>
                <div class="row">
                    <div class="col-lg-7">
                        <div class="particle-animation-container" id="particleAnim"></div>
                    </div>
                    <div class="col-lg-4">
                        <h2 class="d-none d-lg-block">Our Culture & Values</h2>
                        <h5 class="mt-4 mb-2 mt-lg-8">Visionary Creators</h5>
                        <p class="mb-5 mb-lg-6">Our excellence lies not only in solving today’s problems, but ensuring that tomorrow is smooth sailing too.</p>
                        <h5 class="mb-2">Challenge Smashers</h5>
                        <p class="mb-5 mb-lg-6">We love a challenge. What’s the fun if the job isn't striving to make the best, better?</p>
                        <h5 class="mb-2">Mates, not colleagues</h5>
                        <p class="mb-5 mb-lg-6">We bicker just as much as we enjoy laughs and drinks together – after all, we’re family. That's what makes e9 unique.</p>
                        <h5 class="mb-2">Limitless, not limited</h5>
                        <p class="mb-5 mb-lg-6">
                            We aren't limited to using certain software. We are always on the hunt for the latest technological advances, so that both company and client are able to grow. Inform to
                            enlighten. The sky's the limit.
                        </p>
                        <h5 class="mb-2">Entertainers</h5>
                        <p>
                            Work is work, but it's a part of us too. Our aim to make clients' products entertaining extends into the office too. We love what we do, and we have fun doing it. That's
                            why there's only one e9.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-4 mt-4 pt-md-4">
            <div class="container">
                <div class="row justify-content-center mb-4 mb-md-6 mb-lg-6">
                    <div class="col-md-10 text-center">
                        <h2>The e9-ers</h2>
                        <p>
                            We like to think our team is a little bit out of the ordinary. We are responsible, ethical, diverse and inclusive – people you can trust to build a better digital future,
                            one that will work for everyone.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container-fluid mb-6 mb-xl-8">
                <div class="row people justify-content-between">
                    <div
                        class="col-6 col-lg-4 px-md-4 px-xl-6 mb-4 mb-md-5 mb-xl-6"
                        v-for="(item, index) in people"
                        :key="index"
                        :class="index % 2 ? 'even-card' : 'odd-card'"
                        v-show="item.Category == 'Tech'">
                        <ImageCard :item="item" size="medium" animation="fade-up" />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center mb-4 mb-md-6 mb-lg-6">
                    <div class="col-md-10 text-center">
                        <h2>Partners</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row people justify-content-between">
                    <div
                        class="col-lg-6 px-xl-6 mb-xl-6 px-md-4 mb-md-6 mb-4 col-6"
                        v-for="(item, index) in people"
                        :key="index"
                        :class="index % 2 ? 'even-card' : 'odd-card'"
                        v-show="item.Category == 'Management'">
                        <ImageCard :item="item" size="medium" animation="fade-up" />
                    </div>
                </div>
            </div>
            <div class="slider-container pt-6 pt-xl-8">
                <VueSlickCarousel v-bind="settings" class="team-slider">
                    <div><img src="@/assets/images/team/1.jpg" alt="" /></div>
                    <div><img src="@/assets/images/team/2.jpg" alt="" class="" /></div>
                    <div><img src="@/assets/images/team/3.jpg" alt="" class="" /></div>
                    <div><img src="@/assets/images/team/4.jpg" alt="" class="" /></div>
                    <div><img src="@/assets/images/team/5.jpg" alt="" class="" /></div>
                    <div><img src="@/assets/images/team/6.jpg" alt="" class="" /></div>
                    <div><img src="@/assets/images/team/7.jpg" alt="" class="" /></div>
                    <div><img src="@/assets/images/team/8.jpg" alt="" class="" /></div>
                    <div><img src="@/assets/images/team/9.jpg" alt="" class="" /></div>
                    <template #prevArrow>
                        <div class="slick-arrow slick-prev">
                            <i class="fa fa-angle-left" aria-hidden="true"></i>
                        </div>
                    </template>
                    <template #nextArrow>
                        <div class="slick-arrow slick-next">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                    </template>
                </VueSlickCarousel>
            </div>
        </section>
        <section class="pt-0 pt-lg-6">
            <div class="container">
                <div class="row justify-content-center mb-4 mb-lg-6">
                    <div class="col-sm-10 text-center">
                        <h2>Join Our Team</h2>
                        <p>
                            We are always on the lookout for excellent people to join our team. You need to demonstrate talent, flexibility, teamworking, a passion for customer satisfaction and above
                            all else, having fun.
                        </p>
                    </div>
                </div>
                <div class="row mt-3 mt-md-5 justify-content-center" v-for="(filteredJobs, location, index) in groupedJobs" :key="index">
                    <div class="col-lg-5 col-md-6">
                        <h2 class="font-weight-demi text-center text-md-left mt-4">{{ location }}</h2>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <ul class="list-unstyled job-list">
                            <li v-for="item in filteredJobs" :key="item.JobId">
                                <a href="" @click.prevent="selectedJob = item">{{ item.Title }}</a><img src="@/assets/images/icons/right-arrow.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 text-center">
                        <p class="lead emphasis mt-6 mt-lg-8 mb-5">
                            Our work provides meaning, it solves problems, it engages people. We work with industry leaders, SME’s and startups who have vision and passion, about what they do. If
                            you're interested in working with creative people, engaged with solving challenging solutions, then we want to hear from you, today!
                        </p>
                        <router-link to="/contact" tag="a" class="btn btn-primary">Get in touch</router-link>
                    </div>
                </div>
            </div>
        </section>
        <div class="offscreen-job-container" :class="selectedJob ? 'show' : ''">
            <a href="" class="close" @click.prevent="selectedJob = null">
                <img src="@/assets/images/icons/close.svg" />
            </a>
            <div v-if="selectedJob">
                <div class="d-md-flex justify-content-between align-items-center mt-4 mb-6">
                    <div>
                        <h3>{{ selectedJob.Title }}</h3>
                        <p class="d-inline-block mr-6 mb-0"><i class="fa fa-map-marker mr-2" aria-hidden="true"></i>{{ selectedJob.Location }}</p>
                        <p class="d-inline-block mb-0"><i class="fa fa-briefcase mr-2" aria-hidden="true"></i>{{ selectedJob.Hours }}</p>
                    </div>
                    <a :href="'mailto:hr@e9ine.com?subject=Job application - ' + selectedJob.Title" class="btn btn-primary mt-4 mt-md-0">Apply Now</a>
                </div>
                <div v-html="selectedJob.Description"></div>
                <div class="d-md-flex justify-content-between align-items-end mb-4">
                    <a :href="'mailto:hr@e9ine.com?subject=Job application - ' + selectedJob.Title" class="btn btn-primary mt-4">Apply Now</a>
                    <div class="mt-4 mt-md-0">Posted on: {{ selectedJob.Date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {scrollFix} from '@/utilities';
import ImageCard from '@/components/common/ImageCard';
import jobs from '@/assets/data/jobs.json';
import PageCover from '@/components/common/PageCover';
import PartAnim from '@/assets/js/interactive-particles/scripts/App';
import people from '@/assets/data/people.json';
import VueSlickCarousel from 'vue-slick-carousel';

const PartAnimIns = new PartAnim();

export default {
    components: {
        PageCover,
        ImageCard,
        VueSlickCarousel,
    },
    data() {
        return {
            pageTitle: 'Technically excellent, socially engaged',
            pageDesc:
                'We are a group of individuals, from around the world. We have different tastes, styles and personalities. Some love cricket, others love dancing. There is a cat, a dog and a few fish scattered in as well. <br /><br />Despite all these differences, we all have one thing in common, one thing we all love and that is to be able to express ourselves through our skills and attributes. Whether a developer, creative or strategist we all pull together to build amazing and engaging solutions.',
            people: people,
            jobs: jobs,
            selectedJob: null,
            settings: {
                centerMode: true,
                centerPadding: '20px',
                dots: true,
                dotsClass: 'slick-dots white-dots',
                edgeFriction: 0.35,
                infinite: true,
                variableWidth: true,
                speed: 800,
                slidesToShow: 2,
                slidesToScroll: 2,
                cssEase: 'ease-in-out',
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            centerPadding: '60px',
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false,
                            centerPadding: '0',
                        },
                    },
                ],
            },
        };
    },
    methods: {
        initParticles() {
            PartAnimIns.init();
            scrollFix('#particleAnim', '#particleAnimCover', 64);
        },
        playCarousel(play) {
            if (play) {
                this.$refs.teamCarousel.play();
            } else {
                this.$refs.teamCarousel.pause();
            }
        },
        groupBy(array, key) {
            const result = {};
            array.forEach((item) => {
                if (!result[item[key]]) {
                    result[item[key]] = [];
                }
                result[item[key]].push(item);
            });
            return result;
        },
    },
    computed: {
        groupedJobs() {
            return this.groupBy(this.jobs, 'Location');
        },
    },
    mounted() {
        //Cover animation
        let teamAnim = this.$lottie.loadAnimation({
            container: document.getElementById('teamAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/team.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        teamAnim.setSubframe(false);

        document.addEventListener('aos:in:team-anim', () => {
            teamAnim.play();
        });
        document.addEventListener('aos:out:team-anim', () => {
            teamAnim.pause();
        });

        //Particle animation
        document.addEventListener('aos:in:particle-anim', this.initParticles);

        //Type animation
        document.addEventListener('aos:in:we-believe', this.typeQuote);

        // //temp
        // this.selectedJob=this.jobs[0];
    },
    beforeDestroy() {
        document.removeEventListener('aos:in:particle-anim', this.initParticles);
    },
    metaInfo() {
        return {
            title: 'Meet the team and and opportunities at e9',
            meta: [
                {
                    name: 'description',
                    content: 'Meet our team of engaged software developers and talented individuals, job vacancies and opportunities',
                },
                {
                    name: 'keywords',
                    content: 'team, , job, vacancies, openings, offerings, design, software, development, website, desiging',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/pages/team';
</style>
