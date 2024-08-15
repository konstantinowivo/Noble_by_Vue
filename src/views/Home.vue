<template>
    <section class="main-section">
        <Carousel_home/>
        <Nav_home/>
        <Half_and_half/>
    </section>
</template>

<script>
import Carousel_home from '@/components/Home/Carousel_home.vue';
import Nav_home from '@/components/Home/Nav_home.vue';
import Half_and_half from '@/components/Home/Half_and_half/Half_and_half.vue';

export default {
    name: 'Home_section',
    components: {
        Carousel_home,
        Nav_home,
        Half_and_half
    },
    };
</script>
