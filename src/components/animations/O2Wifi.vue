<template>
    <div class="animation-container" id="o2-wifi" data-aos="fade" data-aos-id="o2-wifi" data-aos-mirror="true" data-aos-offset="0">
        <img src="@/assets/images/services/software/telefonica-o2/cover/base.png" alt="" class="base" />
        <img src="@/assets/images/services/software/telefonica-o2/cover/tower.png" alt="" class="overlay tower" />
        <div id="animation-1" class="animation">
            <img src="@/assets/images/services/software/telefonica-o2/cover/phone-base.png" alt="" class="overlay" />
            <img src="@/assets/images/services/software/telefonica-o2/cover/router-base.png" alt="" class="overlay" />
            <img src="@/assets/images/services/software/telefonica-o2/cover/tablet-base.png" alt="" class="overlay" />
            <img src="@/assets/images/services/software/telefonica-o2/cover/laptop-base.png" alt="" class="overlay" />
        </div>
        <div id="animation-2">
            <img src="@/assets/images/services/software/telefonica-o2/cover/phone-layers.png" alt="" class="overlay" />
            <img src="@/assets/images/services/software/telefonica-o2/cover/router-layers.png" alt="" class="overlay" />
            <img src="@/assets/images/services/software/telefonica-o2/cover/tablet-layers.png" alt="" class="overlay" />
            <img src="@/assets/images/services/software/telefonica-o2/cover/laptop-layers.png" alt="" class="overlay" />
        </div>
        <div id="devices">
            <div id="animation-3" class="animation">
                <img src="@/assets/images/services/software/telefonica-o2/cover/phone.png" alt="" class="overlay" />
                <img src="@/assets/images/services/software/telefonica-o2/cover/router.png" alt="" class="overlay" />
                <img src="@/assets/images/services/software/telefonica-o2/cover/tablet.png" alt="" class="overlay" />
                <img src="@/assets/images/services/software/telefonica-o2/cover/laptop.png" alt="" class="overlay" />
            </div>
            <div id="animation-6" class="animation">
                <img src="@/assets/images/services/software/telefonica-o2/cover/phone-wifi.png" alt="" class="overlay" />
                <img src="@/assets/images/services/software/telefonica-o2/cover/tablet-wifi.png" alt="" class="overlay" />
                <img src="@/assets/images/services/software/telefonica-o2/cover/laptop-wifi.png" alt="" class="overlay" />
            </div>
            <div id="animation-5">
                <img src="@/assets/images/services/software/telefonica-o2/cover/router-signal.png" alt="" class="overlay" />
                <img src="@/assets/images/services/software/telefonica-o2/cover/router-wifi.png" alt="" class="overlay" />
            </div>
        </div>
        <div id="animation-4">
            <img src="@/assets/images/services/software/telefonica-o2/cover/tower-signal.png" alt="" class="overlay" />
            <img src="@/assets/images/services/software/telefonica-o2/cover/tower-signal-strength.png" alt="" class="overlay" />
        </div>
        <img src="@/assets/images/services/software/telefonica-o2/cover/connect-router.png" alt="" class="overlay connect-router" />

        <img src="@/assets/images/services/software/telefonica-o2/cover/connect.png" alt="" class="overlay connect" />
    </div>
</template>

<script>
import anime from 'animejs';
let tl = null;
export default {
    name: 'O2Wifi',
    mounted() {
        let isDeviceFloating = false;
        const deviceFloat = anime({
            targets: '#o2-wifi #devices',
            translateY: [
                {
                    value: '1%',
                },
                {
                    value: 0,
                },
            ],
            duration: 2000,
            easing: 'linear',
            autoplay: false,
            loop: true,
        });

        tl = anime.timeline({
            autoplay: false,
            easing: 'linear',
            loop: true,
        });

        tl.add({
            targets: '.tower',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
        });

        tl.add({
            targets: '#o2-wifi #animation-1',
            opacity: 1,
            duration: 500,
        });

        tl.add({
            targets: '#o2-wifi #animation-2 .overlay',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
        });
        tl.add({
            targets: '#o2-wifi #animation-3',
            opacity: 1,
            delay: 500,
            duration: 500,
            changeBegin: function () {
                deviceFloat.play();
                isDeviceFloating = true;
            },
        });
        tl.add({
            targets: '#o2-wifi #animation-4 .overlay',
            opacity: [0, 1],
            duration: 500,
            delay: anime.stagger(100),
        });
        tl.add({
            targets: '#o2-wifi .connect-router',
            opacity: 1,
            duration: 500,
        });
        tl.add({
            targets: '#o2-wifi #animation-5 .overlay',
            opacity: [0, 1],
            duration: 500,
            delay: anime.stagger(100),
        });
        tl.add({
            targets: '#o2-wifi .connect',
            opacity: 1,
            translateY: ['5%', 0],
            duration: 300,
        });
        tl.add({
            targets: '#o2-wifi #animation-6',
            opacity: 1,
            duration: 500,
            endDelay: 2000,
            changeComplete: function () {
                deviceFloat.pause();
                isDeviceFloating = false;
            },
        });
        document.addEventListener('aos:in:o2-wifi', () => {
            //console.log('o2-wifi: play');
            tl.play();
            if (isDeviceFloating) deviceFloat.play();
        });
        document.addEventListener('aos:out:o2-wifi', () => {
            //console.log('o2-wifi: pause');
            tl.pause();
            deviceFloat.pause();
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
    .base {
        width: 100%;
    }
    .animation {
        opacity: 0;
    }
    .overlay {
        position: absolute;
        &.tower {
            left: 34.9%;
            top: 25.3%;
            width: 27.1%;
            transform-origin: bottom;
        }
        &.connect-router {
            width: 7.7%;
            left: 28.4%;
            top: 45.4%;
            opacity: 0;
            z-index: -1;
        }
        &.connect {
            width: 90.3%;
            left: 3.2%;
            top: 24.6%;
            opacity: 0;
            z-index: -1;
        }
    }
    #devices {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    #animation-1 {
        img {
            &:nth-child(1) {
                width: 41.5%;
                left: 0;
                top: 62.5%;
            }
            &:nth-child(2) {
                width: 41.5%;
                left: 0;
                top: 21.5%;
            }
            &:nth-child(3) {
                width: 41.5%;
                left: 56.6%;
                top: 19.3%;
            }
            &:nth-child(4) {
                width: 41.5%;
                left: 57.4%;
                top: 63.1%;
            }
        }
    }
    #animation-2 {
        img {
            &:nth-child(1) {
                width: 32.4%;
                left: 4.5%;
                top: 63.5%;
            }
            &:nth-child(2) {
                width: 32.4%;
                left: 4.6%;
                top: 22.5%;
            }
            &:nth-child(3) {
                width: 32.4%;
                left: 61.2%;
                top: 20.4%;
            }
            &:nth-child(4) {
                width: 32.2%;
                left: 62%;
                top: 64.2%;
            }
        }
    }
    #animation-3 {
        img {
            &:nth-child(1) {
                width: 14.6%;
                left: 13.7%;
                top: 49.2%;
            }
            &:nth-child(2) {
                width: 20.1%;
                left: 9.1%;
                top: 17.9%;
            }
            &:nth-child(3) {
                width: 31.4%;
                left: 61.5%;
                top: 7.7%;
            }
            &:nth-child(4) {
                width: 40.7%;
                left: 59.2%;
                top: 44.4%;
            }
        }
    }
    #animation-4 {
        img {
            &:nth-child(1) {
                width: 11.3%;
                left: 42.9%;
                top: 16.6%;
            }
            &:nth-child(2) {
                width: 42.1%;
                left: 27.5%;
                top: 0;
            }
        }
    }
    #animation-5 {
        img {
            &:nth-child(1) {
                width: 4.8%;
                left: 13.1%;
                top: 13.6%;
            }
            &:nth-child(2) {
                width: 5.6%;
                left: 15.8%;
                top: 25.6%;
            }
        }
    }
    #animation-6 {
        img {
            &:nth-child(1) {
                width: 6.1%;
                left: 18.9%;
                top: 51.7%;
            }
            &:nth-child(2) {
                width: 8.1%;
                left: 73.6%;
                top: 10.2%;
            }
            &:nth-child(3) {
                width: 11.8%;
                left: 69.4%;
                top: 47.4%;
            }
        }
    }
}
</style>
