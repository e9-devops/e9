<template>
    <section class="imageblock d-lg-flex align-items-center" :class="'height-' + height">
        <div class="imageblock__content col-lg-6 d-flex align-items-center" :class="['pos-' + mediaAlign, mediaAlign == 'left' ? 'justify-content-end' : '']">
            <slot></slot>
        </div>
        <div class="container" :class="containerClass">
            <div class="row" :class="mediaAlign == 'left' ? 'justify-content-end' : ''">
                <div class="col-lg-5">
                    <h3 v-if="title">{{ title }}</h3>
                    <p>
                        {{ desc }}
                    </p>
                    <div v-if="linkUrl" class="mt-5">
                        <a class="btn btn-primary" @click="callAction" v-if="linkUrl.indexOf('http') > -1 || linkUrl.indexOf('http') > -1">{{ linkText }}</a>
                        <router-link v-else :to="linkUrl" class="btn btn-primary">{{ linkText }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ImageBlock',
    props: {
        title: {
            type: String,
        },
        mediaAlign: {
            type: String,
            default: 'right',
        },
        imgUrl: {
            type: String,
        },
        desc: {
            type: String,
            required: true,
        },
        height: {
            type: Number,
            default: 60,
        },
        linkUrl: {
            type: String,
        },
        linkText: {
            type: String,
        },
        linkAction: {
            type: Function,
        },
        containerClass: {
            type: String,
        },
    },
    methods: {
        getImgPath() {
            return this.imgUrl ? require(`@/assets/images/${this.imgUrl}`) : '';
        },
        callAction() {
            if (this.action) this.action();
            else if (this.linkUrl) window.location = this.linkUrl;
        },
    },
};
</script>
