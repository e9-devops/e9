<template>
    <section class="pb-0" id="nextCase">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div>
                    <p>Next Case Study</p>
                    <router-link class="d-flex align-items-center justify-content-center next-arrow" :to="link">
                        <h2 class="font-weight-demi">{{ name }}</h2>
                        <p class="t-xl pl-3"><i class="fa fa-angle-right" aria-hidden="true"></i></p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'NextCase',
    props: {
        name: {
            type: String,
        },
        link: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped></style>
