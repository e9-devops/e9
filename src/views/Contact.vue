<template>
    <div>
        <PageCover :title="pageTitle" :desc="pageDesc">
            <div id="contactAnim" data-aos="lottie" data-aos-id="contact-anim" data-aos-mirror="true"></div>
        </PageCover>
        <section class="bg-dark section--even">
            <div class="container d-flex flex-column align-items-center">
                <h1 class="mb-5">Say hello to e9</h1>
                <div>
                    <a href="tel:+44 20 3388 8999" class="d-block t-xxl mb-3"><i class="fa fa-phone mr-3 text-primary" aria-hidden="true"></i>+44 20 3388 8999</a>
                    <a href="mailto:hello@e9.co.uk" class="d-block t-xxl"><i class="fa fa-envelope-o mr-3 text-primary" aria-hidden="true"></i>hello@e9.co.uk</a>
                </div>
            </div>
        </section>
        <section class="mt-0 mt-lg-4">
            <div class="container">
                <div class="row mb-6 mb-md-8 mb-lg-6 mb-xl-8">
                    <div class="col-lg-4">
                        <div class="address-wrapper p-5 p-lg-4 p-xl-5 mb-4 mb-lg-0 d-flex align-items-center">
                            <div>
                                <h3 class="text-muted">e9 London (Westminster)</h3>
                                <p class="lead text-white mb-0">
                                    14 Great College Street <br />
                                    Westminster <br />
                                    London <br />
                                    SW1P 3RX
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div id="map1" class="map-wrapper"></div>
                    </div>
                </div>
                <div class="row mb-6 mb-md-8 mb-lg-6 mb-xl-8">
                    <div class="col-lg-4">
                        <div class="address-wrapper p-5 p-lg-4 p-xl-5 mb-4 mb-lg-0 d-flex align-items-center">
                            <div>
                                <h3 class="text-muted">e9 London (Tower Bridge)</h3>
                                <p class="lead text-white mb-0">
                                    WeWork<br />
                                    1 St Katharine's Way <br />
                                    Tower Bridge <br />
                                    London <br />
                                    E1W 1UN
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div id="map2" class="map-wrapper"></div>
                    </div>
                </div>
                <div class="row mb-6 mb-md-8 mb-lg-6 mb-xl-8">
                    <div class="col-lg-4">
                        <div class="address-wrapper p-5 p-lg-4 p-xl-5 mb-4 mb-lg-0 d-flex align-items-center">
                            <div>
                                <h3 class="text-muted">e9 Manchester</h3>
                                <p class="lead text-white mb-0">
                                    Houldsworth Business and Arts Centre <br />Houldsworth St <br />
                                    Reddish SK5 6DA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div id="map3" class="map-wrapper"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="address-wrapper p-5 p-lg-4 p-xl-5 mb-4 mb-lg-0 d-flex align-items-center">
                            <div>
                                <h3 class="text-muted">e9 Bangalore</h3>
                                <p class="lead text-white mb-0">
                                    The Hive (Level 5) <br />
                                    VR Bengaluru <br />
                                    Whitefield Main Road <br />
                                    Bengaluru, India
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div id="map4" class="map-wrapper"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageCover from '@/components/common/PageCover';
const MapStyles = [
    {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        stylers: [
            {
                hue: '#00aaff',
            },
            {
                saturation: -100,
            },
            {
                gamma: 2.15,
            },
            {
                lightness: 12,
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
            {
                visibility: 'on',
            },
            {
                lightness: 24,
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
            {
                lightness: 57,
            },
        ],
    },
];

export default {
    components: {
        PageCover,
    },
    data() {
        return {
            pageTitle: 'Lets start something together',
            pageDesc:
                'It’s time for you to speak with our team. We are here to answer all your questions, from your business needs, investment opportunities to work opportunities within the company. Below you will find our contact form, and further information below that, if you want to write a letter or give us a call. We look forward to hearing from you.',
            messageSent: false,
            messageError: false,
            formData: {},
        };
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&');
        },
        handleSubmit(e) {
            this.messageSent = false;
            this.messageError = false;
            fetch('/', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...this.formData,
                }),
            })
                .then(() => {
                    this.messageSent = true;
                    this.formData = {};
                })
                .catch(() => {
                    this.messageError = true;
                });
        },
    },
    mounted() {
        //Cover animation
        let contactAnim = this.$lottie.loadAnimation({
            container: document.getElementById('contactAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: require('@/assets/data/lottie/contact.json'),
            rendererSettings: {
                progressiveLoad: true,
            },
        });

        contactAnim.setSubframe(false);

        document.addEventListener('aos:in:contact-anim', () => {
            //console.log('contact-anim: play');
            contactAnim.play();
        });
        document.addEventListener('aos:out:contact-anim', () => {
            //console.log('contact-anim: pause');
            contactAnim.pause();
        });

        let e9Image = {
            url: require('@/assets/images/icons/e9-marker.svg'),
            scaledSize: new window.google.maps.Size(74, 102),
        };
        let map1 = new window.google.maps.Map(document.getElementById('map1'), {
            center: new window.google.maps.LatLng(51.497691, -0.127137),
            zoom: 15,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            styles: MapStyles,
        });
        let map2 = new window.google.maps.Map(document.getElementById('map2'), {
            center: new window.google.maps.LatLng(51.507704, -0.07372),
            zoom: 15,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            styles: MapStyles,
        });
        let map3 = new window.google.maps.Map(document.getElementById('map3'), {
            center: new window.google.maps.LatLng(53.436532, -2.165557),
            zoom: 15,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            styles: MapStyles,
        });
        let map4 = new window.google.maps.Map(document.getElementById('map4'), {
            center: new window.google.maps.LatLng(12.9957386, 77.6932497),
            zoom: 15,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            styles: MapStyles,
        });

        new window.google.maps.Marker({
            map: map1,
            icon: e9Image,
            position: new window.google.maps.LatLng(51.497691, -0.127137),
        });
        new window.google.maps.Marker({
            map: map2,
            icon: e9Image,
            position: new window.google.maps.LatLng(51.507704, -0.07372),
        });
        new window.google.maps.Marker({
            map: map3,
            icon: e9Image,
            position: new window.google.maps.LatLng(53.436532, -2.165557),
        });
        new window.google.maps.Marker({
            map: map4,
            icon: e9Image,
            position: new window.google.maps.LatLng(12.9957386, 77.6932497),
        });
    },
    metaInfo() {
        return {
            title: 'Contact e9 - software house',
            meta: [
                {name: 'description', content: 'Meet our team of engaged software developers and talented individuals, job vacancies and opportunities'},
                {name: 'keywords', content: 'team, job, vacancies, openings, offerings, design, software, development, website, desiging'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/pages/contact';
</style>
