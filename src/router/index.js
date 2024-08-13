import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contacto from '../views/Contacto.vue';

// Definición de las rutas
const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/contacto',
  name: 'Contacto',
  component: Contacto
}
];

// Crear el enrutador
const router = createRouter({
  history: createWebHistory(), // Usa el modo de historial del navegador
  routes, // Pasa las rutas definidas
});

export default router;