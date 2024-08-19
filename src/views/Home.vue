<template>
    <section class="main-section">
        <Banner/>
        <Nav_home/>
        <Half_and_half/>
        <Card_services v-for="(item, index) in cards"
            :key="index"
            :image="item.image"
            :title="item.title"
            :description="item.description"
            />
    </section>
</template>

<script>
import Nav_home from '@/components/Home/Nav_home.vue';
import Half_and_half from '@/components/Home/Half_and_half/Half_and_half.vue';
import Banner from '@/components/Banner.vue';
import Card_services from '@/components/Home/Card_services.vue';

export default {
    name: 'Home_section',
    components: {
        Banner,
        Nav_home,
        Half_and_half,
        Card_services
    },

    data() {    
        return {

        cards: [
        {
            image: 'https://via.placeholder.com/150',
            title: 'Card 1',
            description: 'This is the first card.',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Card 2',
            description: 'This is the second card.',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Card 3',
            description: 'This is the third card.',
        },
        ],
    };
    },
}

</script>
