<template>
    <swiper :slides-per-view="1.5" :space-between="50">
        <swiper-slide v-for="slide in sliderPosts" class="slide" :style="{'background-image': 'url(' + slide.imgUrl + ')'}">
            Slide {{ slide.imgUrl }}
        </swiper-slide>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { usePostStore } from '@/stores/postStore';

// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const postStore = usePostStore();
        return {
            postStore,
        };
    },
    data() {
        return {
        };
    },
    created() {
    },
    computed: {
        sliderPosts() {
            return this.postStore.getHotPosts;
        }
    }
};
</script>

<style lang="scss">
.slide {
    height: 300px;
    background-color: red;
}
</style>
