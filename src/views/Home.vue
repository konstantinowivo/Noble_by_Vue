<template>
    <section class="main-section">
        <Carousel_home />
        <Nav_main/>
    </section>
</template>

<script>
import Carousel_home from '@/components/Header/Carousel_home.vue';
import Nav_main from '@/components/Main/Nav_main.vue';

export default {
    name: 'Home_section',
    components: {
        Carousel_home,
        Nav_main
    },
    };
</script>
