<template>
    <div class="animation-container" id="cinemas-online" data-aos="lottie" data-aos-id="cinemas-online" data-aos-mirror="true" data-aos-offset="0">
        <img src="@/assets/images/products/cinemas-online/cover/screen-1/base.png" alt="" class="base" />
        <div id="animation-1" class="animation">
            <img src="@/assets/images/products/cinemas-online/cover/screen-1/base.png" alt="" class="layer-0" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-1/item-1.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-1/item-2.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-1/item-3.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-1/item-4.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-1/item-5.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-1/item-6.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-1/item-7.png" alt="" class="overlay" />
        </div>
        <div id="animation-2" class="animation">
            <img src="@/assets/images/products/cinemas-online/cover/screen-2/base.png" alt="" class="layer-0" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-2/item-1.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-2/item-2.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-2/item-3.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-2/item-4.png" alt="" class="overlay" />
        </div>
        <div id="animation-3" class="animation">
            <img src="@/assets/images/products/cinemas-online/cover/screen-3/base.png" alt="" class="layer-0" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-3/item-1.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-3/item-2.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-3/item-3.png" alt="" class="overlay" />
            <img src="@/assets/images/products/cinemas-online/cover/screen-3/item-4.png" alt="" class="overlay" />
        </div>
    </div>
</template>

<script>
import anime from 'animejs';
let tl = null;
export default {
    name: 'CinemasOnline',
    mounted() {
        tl = anime.timeline({
            autoplay: false,
            loop: true,
        });
        tl.add({
            targets: '#cinemas-online #animation-1',
            opacity: 1,
            duration: 1,
        });
        tl.add({
            targets: '#cinemas-online #animation-1 .overlay',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'linear',
            delay: anime.stagger(100),
        });
        tl.add({
            targets: '#cinemas-online #animation-1 .overlay',
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 500,
            delay: 1000,
            easing: 'linear',
        });
        tl.add({
            targets: '#cinemas-online #animation-1',
            opacity: 0,
            duration: 1,
        });
        tl.add({
            targets: '#cinemas-online #animation-2',
            opacity: 1,
            duration: 1,
        });
        tl.add(
            {
                targets: '#cinemas-online #animation-2 .overlay',
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 500,
                easing: 'linear',
                delay: anime.stagger(100),
            },
            '+=500'
        );
        tl.add({
            targets: '#cinemas-online #animation-2 .overlay',
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 500,
            delay: 1000,
            easing: 'linear',
        });
        tl.add({
            targets: '#cinemas-online #animation-2',
            opacity: 0,
            duration: 1,
        });
        tl.add({
            targets: '#cinemas-online #animation-3',
            opacity: 1,
            duration: 1,
        });
        tl.add(
            {
                targets: '#cinemas-online #animation-3 .overlay',
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 500,
                easing: 'linear',
                delay: anime.stagger(100),
            },
            '+=500'
        );
        tl.add({
            targets: '#cinemas-online #animation-3 .overlay',
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 500,
            delay: 1000,
            easing: 'linear',
        });

        document.addEventListener('aos:in:cinemas-online', () => {
            //console.log('cinemas-online: play');
            tl.play();
        });
        document.addEventListener('aos:out:cinemas-online', () => {
            //console.log('cinemas-online: pause');
            tl.pause();
        });
    },
    beforeDestroy() {
        tl.pause();
    },
};
</script>

<style lang="scss" scoped>
.animation-container {
    position: relative;
    img {
        will-change: transform, opacity;
        max-height: none;
    }
    .animation {
        opacity: 0;
    }
    .base {
        width: 100%;
        opacity: 0;
    }
    .layer-0 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .overlay {
        position: absolute;
        opacity: 0;
        transform-origin: 50% 50%;
    }
    #animation-1 {
        img {
            &:nth-child(2) {
                top: 2.5%;
                left: 20.8%;
                width: 40.4%;
                height: 40.8%;
            }
            &:nth-child(3) {
                top: 31.7%;
                left: 32.6%;
                width: 14%;
                height: 25.4%;
            }
            &:nth-child(4) {
                top: 40.6%;
                left: 47.2%;
                width: 14%;
                height: 25.4%;
            }
            &:nth-child(5) {
                top: 49%;
                left: 62.3%;
                width: 14%;
                height: 25.4%;
            }
            &:nth-child(6) {
                top: 61.9%;
                left: 80%;
                width: 14.7%;
                height: 14.8%;
            }
            &:nth-child(7) {
                top: 74.8%;
                left: 86.4%;
                width: 6.6%;
                height: 12%;
            }
            &:nth-child(8) {
                top: 78.7%;
                left: 93.4%;
                width: 6.6%;
                height: 12%;
            }
        }
    }
    #animation-2 {
        img {
            &:nth-child(2) {
                top: 17.6%;
                left: 33.5%;
                width: 8.6%;
                height: 13.1%;
            }
            &:nth-child(3) {
                top: 24.1%;
                left: 44.4%;
                width: 8.6%;
                height: 13.1%;
            }
            &:nth-child(4) {
                top: 30.6%;
                left: 54.9%;
                width: 20.6%;
                height: 20.9%;
            }
            &:nth-child(5) {
                top: 72.5%;
                left: 86%;
                width: 8.1%;
                height: 12.1%;
            }
        }
    }
    #animation-3 {
        img {
            &:nth-child(2) {
                top: 0%;
                left: 39.3%;
                width: 33.1%;
                height: 45.5%;
            }
            &:nth-child(3) {
                top: 33.8%;
                left: 42.4%;
                width: 21.5%;
                height: 19.2%;
            }
            &:nth-child(4) {
                top: 67.4%;
                left: 87.1%;
                width: 8.8%;
                height: 12%;
            }
            &:nth-child(5) {
                top: 81.6%;
                left: 87.9%;
                width: 5.9%;
                height: 5.5%;
            }
        }
    }
}
</style>
