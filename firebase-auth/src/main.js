import { createApp } from "vue";
import firebase from "firebase/app";
import axios from "axios";
import App from "./App.vue";
import router from "./router";

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "vue-firebase-auth-dfbb1.firebaseapp.com",
  projectId: "vue-firebase-auth-dfbb1",
  storageBucket: "vue-firebase-auth-dfbb1.appspot.com",
  messagingSenderId: "29913009869",
  appId: "1:29913009869:web:38aef03450dfb8adfb6384",
});

let app;
// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App).provide("$axios", axios).use(router).mount("#app");
  }
});
