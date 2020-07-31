<template>
    <div
        class="card-wrapper"
        :id="'card-' + id"
        :class="[tilt ? 'card-wrapper-tilt' : '', size ? 'card-wrapper-' + size : '', overlay ? 'card-wrapper-overlay' : '', hover ? 'card-wrapper-hover' : '']"
        :data-aos="animation"
        data-aos-once="true">
        <router-link tag="div" :to="item.Path ? item.Path : ''" class="card-img-wrapper">
            <a class="card-img">
                <div class="video-wrapper">
                    <video loop muted :poster="require('@/assets/images/' + item.ImageURL)" v-if="item.VideoURL">
                        <source :src="getVideoPath('mp4')" type="video/mp4" />
                        <source :src="getVideoPath('webm')" type="video/webm" />
                    </video>
                </div>
                <div class="img-shadow"></div>
                <div class="card-overlay"></div>
                <img :src="getImgPath(item.ImageURL)" loading="lazy" />
            </a>
            <div class="card-info" v-if="overlay">
                <h4 class="font-weight-demi">{{ item.Title }}</h4>
                <p class="mb-0 text-muted">{{ item.Description }}</p>
            </div>
        </router-link>
        <div class="card-info" v-if="!overlay">
            <h4 class="font-weight-demi">{{ item.Title }}</h4>
            <p class="subtitle">{{ item.Subtitle }}</p>
        </div>
    </div>
</template>

<script>
import '@/assets/js/tilt.jquery.js';
export default {
    name: 'ImageCard',
    props: ['item', 'size', 'overlay', 'animation', 'tilt', 'hover'],
    data() {
        return {
            id: null,
        };
    },
    methods: {
        getVideoPath(type) {
            let url = `/assets/${this.item.VideoURL}.${type}`;
            return url;
        },
        getImgPath(img) {
            return require(`@/assets/images/${img}`);
        },
    },
    created() {
        this.id = this._uid;
    },
    mounted() {
        if (this.tilt) {
            window.$('.card-img-wrapper').tilt({
                perspective: 400,
                maxTilt: 3,
                scale: 1.05,
                transition: false,
            });
        }
        if (this.item.VideoURL) {
            var video = document.querySelector('#card-' + this.id + ' video');
            window.$('#card-' + this.id + ' .card-img').hover(hoverVideo, hideVideo);
        }
        var playPromise;
        function hoverVideo() {
            video.style.display = 'block';
            video.currentTime = 0;
            playPromise = video.play();
        }
        function hideVideo() {
            video.style.display = 'none';
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        video.pause();
                    })
                    .catch(() => {
                        // Auto-play was prevented
                    });
            }
        }
    },
};
</script>
