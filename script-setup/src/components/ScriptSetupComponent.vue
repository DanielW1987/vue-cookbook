<template>
  <!-- You need a single root to pass attributes like 'class' from parent to child component -->
  <div>
    <h1>Hi {{ name }}</h1>
    <hello-world></hello-world>
    <p>{{ props.msg }}</p>
    <button @click="getAlert">Press me</button>
    <button @click="fetchPokemon">Fetch pokemon</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, onBeforeMount } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // just import components and use it

const name = 'Daniel'; // simply define a variable that behave like variables from data function

// define props like this
const props = defineProps({
  msg: {
    type: String,
    default: 'A simple default message',
    // required: true,
  },
});

// like 'mounted()'
onBeforeMount(() => {
  console.log('on before mount');
});

// emit an event
const emits = defineEmits(['pressed', 'fetchPokemon']);

function getAlert() {
  emits('pressed', 'A simple message from child component');
}
function fetchPokemon() {
  emits('fetchPokemon');
}
</script>

<style>
.green {
  color: green
}
</style>
