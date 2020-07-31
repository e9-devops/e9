<template>
    <div>
        <PageCover :title="pageTitle" :desc="pageDesc">
            <div id="productAnim" data-aos="lottie" data-aos-id="product-anim" data-aos-mirror="true"></div>
        </PageCover>
        <section class="bg-dark video-background" id="products">
            <div class="video-wrapper">
                <video loop autoplay muted playsinline>
                    <source src="@/assets/images/products/video.webm" type="video/webm" />
                    <!-- <source src="@/assets/images/products/video.mp4" type="video/mp4" /> -->
                </video>
            </div>

            <div class="container">
                <div class="row justify-content-center mb-6 mb-lg-8">
                    <div class="col-md-10 text-center">
                        <h2>We take pride in our products</h2>
                        <p class="lead">
                            We use our development expertise to build strong frameworks and empower our clients to create, maintain and consistently scale their products and services. Technology
                            advances every day, so why shouldn’t we? Our developers are constantly searching for the latest updates in software, because why not make the best, better?
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="h-card mb-6 mb-lg-0">
                            <img src="@/assets/images/products/efficiency.svg" alt="" class="h-card-img" />
                            <div class="h-card-text">
                                <!-- <div class="icon">
                                    🏅
                                </div> -->
                                <h4 class="mt-4 font-weight-demi">Increasing your efficiency</h4>
                                <p>
                                    With our products we bring new technologies to the mass market in an affordable way, which in turn provides efficiency and effectiveness in day-to-day performance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="h-card mb-6 mb-lg-0">
                            <img src="@/assets/images/products/future-tech.svg" alt="" class="h-card-img" />
                            <div class="h-card-text">
                                <!-- <div class="icon">
                                    🚀
                                </div> -->
                                <h4 class="mt-4 font-weight-demi">Advanced Tech Affordable Price</h4>
                                <p>
                                    New technologies exist for businesses but usually turn out to be much more expensive generally making it more exclusive to enterprise customers with big budgets. We
                                    want to change that.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="h-card mb-6 mb-lg-0">
                            <img src="@/assets/images/products/growth.svg" alt="" class="h-card-img" />
                            <div class="h-card-text">
                                <!-- <div class="icon">
                                    🕺
                                </div> -->
                                <h4 class="mt-4 font-weight-demi">Helping you grow your business</h4>
                                <p>
                                    Our SaaS and B2C cloud based products help businesses achieve goals. We are heavily invested in customer success, hence we provide amazing support, cost efficiency
                                    and reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-xl-8">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="text-center">
                            <h2>Our Products</h2>
                            <p class="lead">
                                We have over six years of established experience creating digital products under our belt, with each and every one of them having been handcrafted with passion. With
                                happy employees and customers alike, we are proud of what we have made. So below is a showcase of our creations for you explore what e9 is capable of, and more than
                                that: what we are passionate about.
                            </p>
                        </div>
                        <div class="row justify-content-between mt-5 mt-xl-8">
                            <div class="col-xl-5 col-md-6 mt-0 mb-5 mb-md-2 mb-xl-5" :class="{'mt-xl-6 mt-md-5': index % 2 === 0}" v-for="(item, index) in products" :key="item._id">
                                <ImageCard :item="item" animation="fade-up" :tilt="true" class="p-lg-3 p-xl-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ImageCard from '@/components/common/ImageCard';
import PageCover from '@/components/common/PageCover';
import products from '@/assets/data/case-studies.json';
export default {
    name: 'Products',
    components: {
        PageCover,
        ImageCard,
    },
    data() {
        return {
            pageTitle: 'We develop, so that you develop 🚀',
            pageDesc:
                'e9’s diverse range of products are focused on delivering valuable information straight to the user, through pixel perfect design and agile technologies. <br /><br />We use our development expertise to build strong frameworks and empower our clients to create, maintain and consistently scale their products and services.',
            products: products.filter(function (item) {
                return item.Subtitle.indexOf('Product') > -1;
            }),
        };
    },
    mounted() {
        //Cover animation
        let productAnim = this.$lottie.loadAnimation({
            container: document.getElementById('productAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/products.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        productAnim.setSubframe(false);

        document.addEventListener('aos:in:product-anim', () => {
            productAnim.play();
        });
        document.addEventListener('aos:out:product-anim', () => {
            productAnim.pause();
        });
    },
    metaInfo() {
        return {
            title: 'Software Development and Saas solutions - e9',
            meta: [
                {
                    name: 'description',
                    content: 'See our range of software as a service (SaaS) products developed in house by e9',
                },
                {name: 'keywords', content: 'app, design, software, development, saas, solution, service'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
#products {
    &.video-background {
        .video-wrapper {
            opacity: 0.4;
        }
    }

    .h-card {
        .icon {
            font-size: 64px;
        }

        &:hover {
            h4 {
                color: #e90000;
            }

            p {
                color: #000;
            }
        }
    }
}
@include media-breakpoint-down(xs) {
    #products {
        &.video-background {
            .video-wrapper {
                opacity: 0.3;
            }
        }
    }
}
</style>
