import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/setup-method',
    name: 'SetupMethod',
    component: () => import('../views/SetupMethod.vue'),
  },
  {
    path: '/script-setup',
    name: 'ScriptSetup',
    component: () => import('../views/ScriptSetup.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
