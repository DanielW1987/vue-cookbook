<template>
  <div>
    <div id="login-status-bar">
      Logged in:
      <span v-if="loggedIn">Yes (Username: {{ username }})</span>
      <span v-else>No</span>
    </div>
    <div v-if="loggedIn">
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LoginStatusHeader",
  data() {
    return {
      username: "",
      loggedIn: false,
    };
  },
  methods: {
    async logout() {
      try {
        await firebase.auth().signOut();
        await this.$router.replace({ name: "Login" });
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      if (this.loggedIn) {
        this.username = user.email;
      }
    });
  },
};
</script>
