<template>
  <div id="app">
    <login-status-header></login-status-header>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/secret">Secret</router-link>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import LoginStatusHeader from "@/components/LoginStatusHeader.vue";

export default {
  name: "App",
  components: {
    LoginStatusHeader,
  },
};
</script>
