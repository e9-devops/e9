<template>
    <div>
        <PageCover :title="pageTitle" :desc="pageDesc">
            <div id="techAnim" data-aos="lottie" data-aos-id="tech-anim" data-aos-mirror="true"></div>
        </PageCover>
        <section class="bg-dark" id="lampAnimCover">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 order-lg-2">
                        <div id="lampAnim"></div>
                    </div>
                    <div class="col-lg-7">
                        <h3 class="mt-6">Developing relationships, then business</h3>
                        <p>
                            Our core aim is to nurture a symbiotic relationship with you and your business. We will engage key stakeholders, business leads and users to establish an end-to-end
                            understanding of your technology requirements. This allows us to establish how we can offer technology solutions to help you achieve your business goals.
                        </p>
                        <h3 class="mt-6 mt-xl-8">Digital technology platforms</h3>
                        <p>
                            Over time, legacy systems constrict growth. By learning about your business ambition, our experts will guide you in identifying and pivoting to new technology
                            infrastructures, by identifying and explaining the specific requirements needed to turn that idea into results. A transformation journey will be planned, to lay the
                            foundation of change with your business objectives remaining at the core of the process.
                        </p>
                        <h3 class="mt-6 mt-xl-8">Align technology with investment</h3>
                        <p>
                            Another important factor in our consultancy process is helping you to understand and align your technology investment with your business strategy, and our solutions. This
                            creates a sustainable environment to modernise your system architecture and increase productivity, quality, and efficiencies on time and in-line with financial forecasts
                            and mitigating risk.
                        </p>
                        <h3 class="mt-6 mt-xl-8">Working toward your future</h3>
                        <p>
                            We look forward to having the opportunity to show you how e9 can assist you with creating agile, user-centric environments, developed on the latest technology stacks at
                            speed, on time, and within budget.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-xl-10">
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
import {scrollFix} from '@/utilities';
import PageCover from '@/components/common/PageCover';

export default {
    name: 'TechnicalConsultancy',
    components: {PageCover},
    data() {
        return {
            pageTitle: 'Consultancy Services',
            pageDesc:
                'Our consultancy solutions are focused on helping you deliver on your key commercial goals and business objectives. e9 will engage you, with our industry experts, and develop contextual knowledge to fuel your growth, with the creation of frameworks, systems and strategies. ',
        };
    },
    mounted() {
        //Cover Animation
        let techAnim = this.$lottie.loadAnimation({
            container: document.getElementById('techAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/data/lottie/technical-consultancy.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        techAnim.setSubframe(false);

        document.addEventListener('aos:in:tech-anim', () => {
            //console.log('tech-anim: play');
            techAnim.play();
        });
        document.addEventListener('aos:out:tech-anim', () => {
            //console.log('tech-anim: pause');
            techAnim.pause();
        });

        //Lamp Animation
        this.$lottie.loadAnimation({
            container: document.getElementById('lampAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/data/lottie/lamp.json'),
        });

        //Fix lamp on scroll
        scrollFix('#lampAnim', '#lampAnimCover', 32);
    },
    metaInfo() {
        return {
            title: 'Technical consultancy services - e9 ',
            meta: [
                {name: 'description', content: 'Our software and branding consultancy services will help you deliver on key objectives and fuel growth'},
                {name: 'keywords', content: 'consultancy, service, solutions, design, software, development, website, desiging'},
            ],
        };
    },
};
</script>
