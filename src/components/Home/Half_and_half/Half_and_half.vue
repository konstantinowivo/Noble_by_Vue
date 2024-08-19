<template>
    <div class="half_and_half">

        <div class="image-container">
            <Image_half/>
        </div>
        <div class="text-container">
            <Text_half/>
        </div>
        
    </div>
</template>

<script>
import Image_half from './Image_half.vue';
import Text_half from './Text_half.vue';

export default {

    name: 'Half_and_half',
    components: {
        Image_half,
        Text_half
    },
    }
</script>

<style scoped>

.half_and_half {
    display: flex;
    height: 60vh;
}

.image-container {
    flex: 1;
    position: relative;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-container {
    flex: 1;
    background: black;
    color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
}

.half-and-half::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 5%;
    background: linear-gradient(to right, transparent, black);
    z-index: 1;
}

</style>