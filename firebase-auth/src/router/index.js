import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/secret",
    name: "Secret",
    component: () => import("../views/Secret.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;

  if (authRequired && !isAuthenticated) {
    return next("/login");
  }

  next();
});

export default router;
