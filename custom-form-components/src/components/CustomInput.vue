<template>
  <div>
    <label :for="id">{{ name }}</label>
    <!-- bind attributes from parent to this html element -->
    <!-- via v-bind="$attrs" or :class="$attrs.class" -->
    <input
      :id="id"
      :placeholder="name"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    // for v-model functionality
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  emits: ['update:modelValue'],
};
</script>
