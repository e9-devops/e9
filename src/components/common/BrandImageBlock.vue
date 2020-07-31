<template>
    <div class="brand-img-wrapper" :style="style()">
        <img :src="getImgPath()" :width="imgWidth" alt="" :data-aos="animation" data-aos-once="true" data-aos-anchor-placement="center-bottom" />
    </div>
</template>

<script>
export default {
    name: 'BrandImageBlock',
    props: {
        color: {
            type: String,
            default: '#D21D1C',
        },
        imgUrl: {
            type: String,
            required: true,
        },
        imgAlign: {
            type: String,
            default: 'center',
        },
        imgWidth: {
            type: String,
        },
        animation: {
            type: String,
        },
        height: {
            type: String,
        },
    },
    methods: {
        style() {
            let obj = {};
            obj['background-color'] = this.color;
            obj['height'] = this.height;
            if (this.imgAlign == 'center') obj['justify-content'] = 'center';
            else if (this.imgAlign == 'right') obj['justify-content'] = 'flex-end';
            return obj;
        },
        getImgPath() {
            return this.imgUrl ? require(`@/assets/images/${this.imgUrl}`) : '';
        },
    },
};
</script>

<style lang="scss" scoped>
.brand-img-wrapper {
    display: flex;
    align-items: center;
    padding-top: 6.5em;
    padding-bottom: 6.5em;

    @include media-breakpoint-down(md) {
        padding-top: 4.875em;
        padding-bottom: 4.875em;
    }
}
</style>
