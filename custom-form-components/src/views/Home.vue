<template>
  <div class="home">
    <custom-input
      id="firstName"
      v-model="formData.firstName"
      name="First name"
      type="text"
    />

    <custom-input
      id="lastName"
      v-model="formData.lastName"
      name="Last name"
      type="text"
    />

    <custom-input
      id="yearOfBirth"
      v-model="formData.yearOfBirth"
      name="Year of birth"
      type="number"
    />

    <p>{{ formData }}</p>
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'Home',
  components: {
    CustomInput,
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        yearOfBirth: '',
      },
    };
  },
};
</script>
