<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <div>
        <label for="email">E-Mail</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
    <p>Already have an account? <router-link to="/login">Login here!</router-link></p>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/app";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          console.log(data);
          router.replace({ name: "Secret" });
        })
        .catch((err) => console.error(err));
    };

    return {
      Register,
      email,
      password,
    };
  },
};
</script>

<style scoped></style>
