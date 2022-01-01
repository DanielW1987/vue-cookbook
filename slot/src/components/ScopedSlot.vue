<template>
  <slot
    :msg="msg"
    :hello="helloFromChild"
  />
</template>

<script>
export default {
  name: 'ScopedSlot',
  data() {
    return {
      msg: 'This is a message from the child',
    };
  },
  methods: {
    helloFromChild() {
      console.log('Hello from child');
    },
  },
};
</script>

<style scoped>

</style>
