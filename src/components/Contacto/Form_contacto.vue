<template>
    <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
        <label for="name">Nombre:</label>
        <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Ingresa tu nombre"
        />
        </div>

        <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="Ingresa tu correo electrónico"
        />
        </div>

        <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea
            id="message"
            v-model="formData.message"
            required
            placeholder="Escribe tu mensaje"
        ></textarea>
        </div>

        <button type="submit">Enviar</button>
    </form>
</template>

<script>

export default {
    name: "ContactForm",
    data() {
        return {
        formData: {
            name: "",
            email: "",
            message: "",
        },
        };
},

methods: {
    handleSubmit() {
    // Manejar el envío del formulario aquí
    console.log("Formulario enviado:", this.formData);
    alert('Formulario enviado exitosamente');
    // Restablecer el formulario
    this.formData.name = "";
    this.formData.email = "";
    this.formData.message = "";
    },
},
};

</script>

<style scoped>

.contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

textarea {
    resize: vertical;
    height: 100px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background-color: #0056b3;
}
</style>
