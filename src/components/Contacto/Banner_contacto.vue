<template>
    <div class="banner">
        <div class="banner-content">
            <h1>Bienvenido a Nuestro Sitio Web</h1>
            <p>Explora nuestras soluciones y servicios.</p>
            <button @click="ctaClick">Descubre Más</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BannerComponent',
    methods: {
        ctaClick() {
            // Acción al hacer clic en el botón
        alert('Botón de llamada a la acción clickeado');
        }
    }
};

</script>

<style scoped>

.banner {
    background-image: url('@/assets/image.1.jpg'); /* Cambia esta ruta a la imagen que desees */
    background-size: cover;
    background-position: center;
    height: 300px; /* Puedes ajustar la altura del banner */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    position: relative;
}

.banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Oscurece el fondo para mayor contraste */
    z-index: 0;
}

.banner-content {
    position: relative;
    z-index: 1;
}

.banner h1 {
    font-size: 3rem;
    margin: 0;
}

.banner p {
    font-size: 1.5rem;
    margin: 10px 0;
}

.banner button {
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #ff6600;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.banner button:hover {
    background-color: #cc5200;
}

</style>