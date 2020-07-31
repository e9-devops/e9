<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <router-link tag="a" to="/" class="navbar-brand animated slideInDown fast" active-class="active"> <img src="@/assets/images/logo.png" alt="" /> </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <div id="line-1"></div>
                <div id="line-2"></div>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div class="navbar-nav">
                    <router-link tag="a" to="/products" class="nav-item nav-link" active-class="active"> Products </router-link>
                    <router-link tag="a" to="/services" class="nav-item nav-link" active-class="active"> Services </router-link>
                    <router-link tag="a" to="/about" class="nav-item nav-link" active-class="active"> About </router-link>
                    <router-link tag="a" to="/case-studies" class="nav-item nav-link" active-class="active"> Case Studies </router-link>
                    <router-link tag="a" to="/team" class="nav-item nav-link" active-class="active"> Team </router-link>
                    <router-link tag="a" to="/contact" class="nav-item nav-link" active-class="active"> Contact </router-link>
                </div>
                <div class="navbar-footer">
                    <h2 class="mb-1">Get in touch</h2>
                    <a href="mailto:hello@e9.co.uk">hello@e9.co.uk</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import anime from 'animejs';

export default {
    name: 'AppHeader',
    mounted() {
        // Hide Header on on scroll down
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = window.$('nav').outerHeight();
        // if (window.$(window).width() > 768) {
        window.$(window).scroll(function () {
            hasScrolled();
        });
        // }

        function hasScrolled() {
            var st = window.$(window).scrollTop();
            if (st == 0) window.$('nav').removeClass('scrolled');

            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }

            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                window.$('nav').addClass('scrolled');
                window.$('nav').addClass('scrolled-down');
            } else {
                // Scroll Up
                if (st + window.$(window).height() < window.$(document).height()) {
                    window.$('nav').removeClass('scrolled-down');
                }
            }
            lastScrollTop = st;
        }

        window.$('.navbar-toggler').click(function () {
            window.$('.navbar').toggleClass('reveal-nav');
            anime({
                targets: '.nav-item',
                opacity: [0, 1],
                translateY: [-10, 0],
                delay: anime.stagger(100),
            });
        });
    },
};
</script>

<style lang="scss" scoped></style>
