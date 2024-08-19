<template>
    
    <div h-56 grid grid-cols-3 gap-4 content-start>
        <div class="card ">
            <img class="card-image" :src="image" alt="Card image">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-description">{{ description }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>

</template>


<script>

export default {

    props: {
        image: String,
        title: String,
        description: String,
    },

};

</script>


<style scoped>

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
}

.card-image {
    width: 100%;
    border-radius: 8px;
    height: auto;
    box-shadow: 0px 0px 30px #000
}

.card-title {
    margin: 12px 0;
    font-size: 1.25rem;
}

.card-description {
    color: #666;
}

</style>