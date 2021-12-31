<template>
  <div>
    <h1>Hi {{ name }}</h1>
    <p>{{ msg }}</p>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  // it's still possible to use components or props
  components: {
    HelloWorld,
  },
  props: {
    msg: {
      type: String,
      default: 'A default message.',
    },
  },
  setup() {
    const name = 'Daniel'; // like variables in data function

    return {
      name,
    };
  },
};
</script>
