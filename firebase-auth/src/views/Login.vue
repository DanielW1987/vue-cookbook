<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <div>
        <label for="email">E-Mail</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
    <p>Need an account? <router-link to="/register">Register here!</router-link></p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import firebase from "firebase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          console.log(data);
          router.replace({ name: "Secret" });
        })
        .catch((err) => console.error(err));
    };

    return {
      Login,
      email,
      password,
    };
  },
};
</script>

<style scoped></style>
