<template>
  <div id="navbar">
    <div id="logo">
      <router-link to="/">
        <img alt="Logo Noble" :src="require('@/assets/logo.png')" />
      </router-link>
    </div>
    <div id="views">
      <router-link to="/">Home</router-link> |
      <router-link to="/contacto">Contacto</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

#logo {
  flex: 0; /* Mantiene el logo alineado a la izquierda */
}

#logo img {
  height: 50px; /* Ajusta la altura del logo */
}

#views {
  display: flex;
  justify-content: end;
  gap: 15px; /* Espacio entre los enlaces */
  align-items: right;
}

#views a {
  color: black; /* Color del texto de los enlaces */
  text-decoration: none;
  font-weight: bold;
}
</style>