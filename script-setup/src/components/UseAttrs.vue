<template>
  <h2>UseAttrs Component</h2>
  <!-- No need for single root element -->
  <p v-bind="$attrs">Message that uses attributes from parent component</p>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped>
.green {
  color: green;
}
</style>
