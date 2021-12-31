<template>
<!--  <script-setup msg="A simple message from parent component"></script-setup>-->
  <script-setup @pressed="pressed" @fetchPokemon="fetchPokemon" class="green"></script-setup>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" alt="Pokemon image">
  </div>
  <use-attrs class="green"></use-attrs>
</template>

<script setup>
import { ref } from 'vue';
import ScriptSetup from '@/components/ScriptSetupComponent.vue'; // just import components and use it
import UseAttrs from '@/components/UseAttrs.vue';

const pokemon = ref(null);

function pressed(info) {
  // eslint-disable-next-line no-alert
  alert(`Hello from pressed function: ${info}`);
}

async function fetchPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  pokemon.value = await response.json();
  console.log(pokemon.value);
}
</script>
