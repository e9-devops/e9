<template>
    <div>
        <section class="text-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <h1 class="mb-lg-4">Case Studies</h1>
                        <p class="lead emphasis">
                            e9’s competence in app development pans across sectors such as transportation, telecommunication, construction, entertainment and entertainment to name a few.
                        </p>
                        <p class="mb-6">
                            We have a track record of providing quality mobile solutions to complex and diverse problems on both an agile short-term and long-term basis. Below are examples of some of
                            our work.
                        </p>
                        <div class="work-filters-wrapper mb-6 mt-3">
                            <div class="work-filter" :class="expand ? 'expand' : ''">
                                <p>
                                    Show me
                                    <a href="" @click.prevent="expand = !expand">
                                        <strong>{{ currentCategory || 'Featured' }}</strong><i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </a>
                                </p>
                                <div class="work-filter-options">
                                    <br />
                                    <br />
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="" @click.prevent="setCurrentCategory()" :class="{selected: !currentCategory}">Featured</a>
                                        </li>
                                        <li>
                                            <a href="" @click.prevent="setCurrentCategory('Software & App')" :class="{selected: currentCategory == 'Software & App'}">Software & App</a>
                                        </li>
                                        <li>
                                            <a href="" @click.prevent="setCurrentCategory('Technical Consultancy')" :class="{selected: currentCategory == 'Technical Consultancy'}">Technical Consultancy</a>
                                        </li>
                                        <li>
                                            <a href="" @click.prevent="setCurrentCategory('Website & Branding')" :class="{selected: currentCategory == 'Website & Branding'}">Website & Branding</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-between">
                            <div
                                class="col-xl-5 col-md-6 mt-0 mb-5 mb-md-2 mb-xl-5"
                                :class="{'mt-xl-6 mt-md-5': index % 2 === 0}"
                                v-for="(item, index) in filteredWork"
                                :key="item.Category + item._id">
                                <ImageCard :item="item" animation="fade-up" :tilt="true" class="p-lg-3 p-xl-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ImageCard from '@/components/common/ImageCard';
import work from '@/assets/data/case-studies.json';

export default {
    name: 'Cases',
    components: {
        ImageCard,
    },
    data() {
        return {
            work: work,
            currentCategory: null,
            expand: false,
        };
    },
    methods: {
        setCurrentCategory(category) {
            this.currentCategory = category;
        },
    },
    computed: {
        filteredWork() {
            if (!this.currentCategory) return this.work;
            return this.work.filter((item) => {
                return item.Category.indexOf(this.currentCategory) > -1;
            });
        },
    },
    metaInfo() {
        return {
            title: 'Software Development and Saas solutions - e9',
            meta: [
                {
                    name: 'description',
                    content: 'See our range of software as a service (SaaS) products developed in house by e9',
                },
                {name: 'keywords', content: 'app, design, software, development, saas, solution, service'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.work-filters-wrapper {
    .work-filter {
        p {
            font-size: 1.25rem;
            strong {
                color: $secondary;
                margin-right: 8px;
                margin-left: 4px;
                font-weight: 500;
                font-size: 1.25rem;
            }
        }

        i {
            color: $primary;
            transition: all 0.25s linear;
        }

        .work-filter-options {
            max-height: 0;
            transition: max-height 0.25s ease-out;
            overflow: hidden;
            line-height: 18px;
            ul {
                li {
                    float: left;
                    margin-right: 48px;
                    margin-bottom: 24px;

                    a {
                        color: $body-color;
                        &:hover {
                            color: $secondary;
                        }

                        &.selected {
                            font-weight: 500;
                            color: $secondary;
                        }
                    }
                }
            }
        }

        &.expand {
            i {
                transform: rotate(-180deg);
            }

            .work-filter-options {
                max-height: 700px;
            }
        }
    }
    @include media-breakpoint-down(xs) {
        .work-filter {
            .work-filter-options {
                line-height: 14px;
                ul {
                    li {
                        margin-right: 24px;
                        margin-bottom: 16px;
                    }
                }
            }
        }
    }
}
</style>
