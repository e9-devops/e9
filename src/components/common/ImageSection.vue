<template>
    <section :class="height ? 'height-' + height : ''">
        <div class="container">
            <div class="row justify-content-center mb-4 mb-lg-6">
                <div class="col-lg-10 text-center">
                    <h2>{{ title }}</h2>
                    <p>{{ desc }}</p>
                    <div v-if="linkUrl" class="mt-5">
                        <a class="btn btn-primary" @click="callAction" v-if="linkUrl.indexOf('http') > -1 || linkUrl.indexOf('http') > -1">{{ linkText }}</a>
                        <router-link v-else :to="linkUrl" class="btn btn-primary">{{ linkText }}</router-link>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'ImageSection',
    props: {
        title: {
            type: String,
        },
        desc: {
            type: String,
            required: true,
        },
        height: {
            type: Number,
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
    },
    methods: {
        callAction() {
            if (this.action) this.action();
            else if (this.linkUrl) window.location = this.linkUrl;
        },
    },
};
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
