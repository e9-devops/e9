<template>
    <footer id="footer">
        <div>
            <div class="container">
                <div class="row justify-content-center text-center mb-6" v-if="['Home'].includes($route.name)">
                    <div class="col-sm-8">
                        <h2>Get notified about our latest updates</h2>
                        <p class="mb-5">Please add you email address to get our latest news, products and success stories delivered directly to your inbox.</p>
                        <div>
                            <!-- Begin Mailchimp Signup Form -->
                            <div id="mc_embed_signup">
                                <form
                                    action="https://app.us4.list-manage.com/subscribe/post?u=631c6a227be0fb88b0e0726cd&amp;id=75d0e2a776"
                                    method="post"
                                    id="mc-embedded-subscribe-form"
                                    name="mc-embedded-subscribe-form"
                                    class="validate"
                                    target="_blank"
                                    novalidate>
                                    <div id="mc_embed_signup_scroll">
                                        <div class="form-group">
                                            <input type="email" value="" name="EMAIL" class="email form-control form-control-lg" id="mce-EMAIL" placeholder="Email" required />
                                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                                <input type="text" name="b_631c6a227be0fb88b0e0726cd_75d0e2a776" tabindex="-1" value="" />
                                            </div>
                                            <div class="clear">
                                                <input type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button shadow" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!--End mc_embed_signup-->
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center text-center">
                    <div class="col-ld-10 col-sm-12">
                        <ul class="list-group list-group-horizontal list-unstyled justify-content-center">
                            <li class="mr-3 mr-md-5 mb-3 mb-md-0">
                                <router-link tag="a" to="/products"> Products </router-link>
                            </li>
                            <li class="mr-3 mr-md-5 mb-3 mb-md-0">
                                <router-link tag="a" to="/services"> Services </router-link>
                            </li>
                            <li class="mr-3 mr-md-5 mb-3 mb-md-0">
                                <router-link tag="a" to="/about"> About </router-link>
                            </li>
                            <li class="mr-3 mr-md-5 mb-3 mb-md-0">
                                <router-link tag="a" to="/case-studies"> Case Studies </router-link>
                            </li>
                            <li class="mr-3 mr-md-5 mb-3 mb-md-0">
                                <router-link tag="a" to="/team"> Team </router-link>
                            </li>
                            <li>
                                <router-link tag="a" to="/contact"> Contact </router-link>
                            </li>
                        </ul>
                        <ul class="list-group list-group-horizontal social-list list-unstyled justify-content-center mt-5">
                            <li class="mr-4 mr-md-5">
                                <a href="https://www.facebook.com/e9.co.uk" target="_blank" rel="noopener"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li class="mr-4 mr-md-5">
                                <a href="https://twitter.com/e9_co_uk" target="_blank" rel="noopener"><i class="fa fa-tumblr" aria-hidden="true"></i> </a>
                            </li>
                            <li class="mr-4 mr-md-5">
                                <a href="https://www.linkedin.com/company/e9ine/" target="_blank" rel="noopener"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/e9.co.uk" target="_blank" rel="noopener"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center justify-content-sm-between mt-6 mt-lg-8">
                    <div class="col-lg-4 col-sm-6 col-8">
                        <img class="w-25 d-inline-block mr-3" src="@/assets/images/logo.png" alt="" />
                        <p class="text-dark d-inline-block">All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 col-sm-6 text-center text-sm-right mt-3 mt-sm-0">
                        <p class="text-dark mb-0">
                            © <span>{{ currentYear }}</span> e9
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
    mounted() {
        setTimeout(() => {
            //Fix breadcrumbs after scroll reaches footer
            let breadcrumbs = window.$('#breadcrumbs');
            let footer = window.$('#footer');
            let footerHeight = footer.outerHeight();
            let footerTop = footer.offset().top;
            let nextHeight = window.$('#nextCase').outerHeight() || 0;
            if (window.$(window).width() > 768) {
                window.$(window).scroll(function () {
                    let scrollPosition = window.$(window).height() + window.$(window).scrollTop();
                    if (scrollPosition > footerTop - nextHeight) {
                        breadcrumbs.css({
                            position: 'absolute',
                            bottom: footerHeight + nextHeight + 48,
                        });
                    } else {
                        breadcrumbs.css({
                            position: 'fixed',
                            bottom: 48,
                        });
                    }
                });
            }
        }, 100);
    },
};
</script>
