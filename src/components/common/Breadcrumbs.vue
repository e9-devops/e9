<template>
    <div class="breadcrumbs d-none d-xl-flex" id="breadcrumbs">
        <ul v-if="currentRoutes.length > 1">
            <li v-for="(route, index) in currentRoutes.slice(0, currentRoutes.length - 1)" :key="index">
                <router-link :to="route.path" tag="a">
                    {{ route.name }}
                </router-link>
                <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
            </li>
            <li>
                {{ $route.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumbs',
    data() {
        return {
            currentRoutes: [],
        };
    },
    created() {
        this.currentRoutes = this.$route.matched[0].path
            .split('/')
            .slice(1)
            .map((route) => {
                return this.$router.options.routes.find(function (item) {
                    let paths = item.path.split('/');
                    return paths[paths.length - 1] == route;
                });
            });
    },
};
</script>
<style lang="scss" scoped>
.breadcrumbs {
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    left: 48px;
    bottom: 48px;
    z-index: 10000;
    transform: rotate(-90deg);
    transform-origin: 0 0;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-family: $font-weight-demi;
            color: $secondary;
            //   font-size: 1.125rem;

            span {
                margin-right: 0.75rem;
                margin-left: 0.75rem;
                color: $body-color;
            }

            a {
                cursor: pointer;
                position: relative;
                text-decoration: none;
                color: $body-color;

                &:hover {
                    color: $secondary;
                }
            }
        }
    }
}
</style>
