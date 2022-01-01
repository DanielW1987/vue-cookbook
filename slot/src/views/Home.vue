<template>
  <div class="home">
    <h2>Simple Slot Demo</h2>
    <simple-slot>
      <h3>A simple title</h3>
      <p>A simple paragraph</p>
    </simple-slot>
    <simple-slot>
      <button @click="clicked()">
        Click Me
      </button>
    </simple-slot>
    <h2>Named Slot Demo</h2>
    <named-slot>
      <!-- <template v-slot:title> -->
      <template #title>
        <h4>The Title</h4>
      </template>
      <template #subtitle>
        <p>The subtitle</p>
      </template>
    </named-slot>
    <h2>Slot Props Demo</h2>
    <scoped-slot v-slot="{msg, hello}">
      <p>With Object Destructing: {{ msg }}</p>
      <button @click="hello">
        Child Component Click
      </button>
    </scoped-slot>
    <scoped-slot v-slot="slotProps">
      <p>Without Object Destructing: {{ slotProps.msg }}</p>
    </scoped-slot>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleSlot from '@/components/SimpleSlot.vue';
import NamedSlot from '@/components/NamedSlot.vue';
import ScopedSlot from '@/components/ScopedSlot.vue';

export default {
  name: 'Home',
  components: {
    SimpleSlot,
    NamedSlot,
    ScopedSlot,
  },
  methods: {
    clicked() {
      console.log('Hello from parent');
    },
  },
};
</script>
