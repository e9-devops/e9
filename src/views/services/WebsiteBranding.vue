<template>
    <div>
        <PageCover :title="pageTitle" :desc="pageDesc">
            <div id="webAnim" data-aos="lottie" data-aos-id="web-anim" data-aos-mirror="true"></div>
        </PageCover>
        <section class="imageblock d-lg-flex align-items-center height-60">
            <div class="imageblock__content col-lg-6 offset-lg-0 col-sm-10 offset-sm-1 d-flex align-items-center pos-right">
                <img src="@/assets/images/services/websites/branding.jpg" alt="" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <h2>Your brand is at the core</h2>
                        <p>
                            Our user led approach leads us to identify the best way to project your brand, while staying functional and emotionally connected. We tell a story with visuals and design
                            elements, painting the picture of what you offer and how you offer it. This engages the user and gives them an experience. It’s our aim to help you grow and develop a
                            long-term relationship with you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="imageblock d-lg-flex align-items-center height-80">
            <div class="imageblock__content col-lg-6 d-flex align-items-center justify-content-end pos-left">
                <div class="col-lg-10">
                    <img src="@/assets/images/services/websites/animation.jpg" alt="" />
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-5">
                        <h2>More than words on a page</h2>
                        <p>
                            To help with telling the story, we make maximum use of rich media, animations and movement to give life to the page. Elements become more compelling with subtle changes and
                            effects. Our work has a contemporary and fresh edge, using trends and new design features where appropriate and only if they add true value to the overall concept.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="imageblock d-lg-flex align-items-center height-80 pt-0">
            <div class="imageblock__content col-lg-6 offset-lg-0 col-sm-10 offset-sm-1 d-flex align-items-center pos-right">
                <img src="@/assets/images/services/websites/design-purspose.jpg" alt="" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <h2>Designed with purpose</h2>
                        <p>
                            Every element will have a purpose and be easy to use, clear and logical. Navigation must easily help the user to find exactly what they are looking for, simply and
                            effectively. The finished site will be one you are proud of and want to show your customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="text-center mb-6 mb-lg-8">
                            <h2>Working together</h2>
                            <p>
                                Our work has led us to develop websites for global brands and industry leaders. We have worked with these companies through the process of consultation, designing,
                                building, and testing. We have developed these relationships and worked with these clients on many levels throughout our business offerings.
                            </p>
                        </div>
                        <router-link class="d-flex align-items-center justify-content-center next-arrow" to="/case-studies">
                            <h3 class="font-weight-demi">Case Studies</h3>
                            <p class="t-xl pl-3"><i class="fa fa-angle-right" aria-hidden="true"></i></p>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageCover from '@/components/common/PageCover';

export default {
    name: 'WebProjects',
    components: {PageCover},
    data() {
        return {
            pageTitle: 'Understanding your brand',
            pageDesc:
                'By keeping your brand at the very heart of our designs, e9’s solutions will compliment your tone and amplify your brand message. Our team of creatives will develop stunning, engaging and intuitive designs that will lead your visitors on a memorable journey with your business.',
        };
    },
    mounted() {
        let webAnim = this.$lottie.loadAnimation({
            container: document.getElementById('webAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/data/lottie/web-branding.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        webAnim.setSubframe(false);

        document.addEventListener('aos:in:web-anim', () => {
            //console.log('web-anim: play');
            webAnim.play();
        });
        document.addEventListener('aos:out:web-anim', () => {
            //console.log('web-anim: pause');
            webAnim.pause();
        });
    },
    metaInfo() {
        return {
            title: 'Website design and creative branding solutions - e9',
            meta: [
                {name: 'description', content: 'Our web design and branding solutions are engaging, focused on projecting your brand image'},
                {name: 'keywords', content: 'brand, branding, marketing, design, software, development, website, desiging'},
            ],
        };
    },
};
</script>
