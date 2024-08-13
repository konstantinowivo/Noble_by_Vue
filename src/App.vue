<template>
    <div id="router">
      <router-link to="/">
        <img alt="Logo Noble" :src="require('@/assets/logo.png')" />
      </router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/contacto">Contacto</router-link>
    </div>
    <router-view/>
</template>

<script>
</script>