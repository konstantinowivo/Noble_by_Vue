<template>
<div class="carousel">
    <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
    <img :src="slide.image" :alt="slide.altText">
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    slides: [
        { image: 'assets/images.1.jpg', altText: 'Slide 1' },
        { image: 'assets/image.2.jpg', altText: 'Slide 2' },
        { image: 'assets/image.3.jpg', altText: 'Slide 3' }
    ]
    };
}
};
</script>

<style scoped>
.carousel {
display: flex;
overflow: hidden;
}
.carousel-item {
min-width: 100%;
transition: transform 0.5s ease;
}
</style>