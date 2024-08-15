<template>
    <section class="main-section">
        <Banner/>
        <Nav_home/>
        <Half_and_half/>
    </section>
</template>

<script>
import Nav_home from '@/components/Home/Nav_home.vue';
import Half_and_half from '@/components/Home/Half_and_half/Half_and_half.vue';
import Banner from '@/components/Banner.vue';

export default {
    name: 'Home_section',
    components: {
        Banner,
        Nav_home,
        Half_and_half
    },
}

</script>
