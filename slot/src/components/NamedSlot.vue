<template>
  <slot name="title" />
  <p>Some text from component</p>
  <slot name="subtitle" />
</template>

<script>
export default {
  name: 'NamedSlot',
};
</script>

<style scoped>

</style>
