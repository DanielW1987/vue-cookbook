<template>
  <div class="form">
    <div class="name-field">
      <label for="name">Name:</label>
      <input
        id="name"
        v-model="name"
        type="text"
      >
      <div
        v-if="v$.name.$error"
        class="error"
      >
        <ul
          v-for="(error, index) in v$.name.$errors"
          :key="index"
        >
          <li>{{ error.$message }}</li>
        </ul>
      </div>
    </div>
    <div class="email-field">
      <label for="email">Email:</label>
      <input
        id="email"
        v-model="email"
        type="email"
      >
      <div
        v-if="v$.email.$error"
        class="error"
      >
        <ul
          v-for="(error, index) in v$.email.$errors"
          :key="index"
        >
          <li>{{ error.$message }}</li>
        </ul>
      </div>
    </div>
    <div class="year-of-birth-field">
      <label for="year-of-birth">Year of Birth:</label>
      <input
        id="year-of-birth"
        v-model="yearOfBirth"
        type="number"
      >
      <div
        v-if="v$.yearOfBirth.$error"
        class="error"
      >
        <ul
          v-for="(error, index) in v$.yearOfBirth.$errors"
          :key="index"
        >
          <li>{{ error.$message }}</li>
        </ul>
      </div>
    </div>
    <div class="password-field">
      <label for="password">Password:</label>
      <input
        id="password"
        v-model="password"
        type="password"
      >
      <div
        v-if="v$.password.$error"
        class="error"
      >
        <ul
          v-for="(error, index) in v$.password.$errors"
          :key="index"
        >
          <li>{{ error.$message }}</li>
        </ul>
      </div>
    </div>
    <div class="password-confirm-field">
      <label for="password-confirm">Password Confirm:</label>
      <input
        id="password-confirm"
        v-model="passwordConfirm"
        type="password"
      >
      <div
        v-if="v$.passwordConfirm.$error"
        class="error"
      >
        <ul
          v-for="(error, index) in v$.passwordConfirm.$errors"
          :key="index"
        >
          <li>{{ error.$message }}</li>
        </ul>
      </div>
    </div>
    <button
      type="submit"
      @click="submit"
    >
      Submit
    </button>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {
  required, email, sameAs, minLength, minValue, helpers,
} from '@vuelidate/validators';

export default {
  name: 'SimpleForm',
  data() {
    return {
      v$: useVuelidate(),
      name: '',
      email: '',
      yearOfBirth: '',
      password: '',
      passwordConfirm: '',
      customValidation: (value) => value.length >= 3,
    };
  },
  validations() {
    return {
      name: {
        required,
        customValidation: helpers.withMessage(
          'Must be at least 3 characters',
          this.customValidation,
        ),
      },
      email: {
        required,
        email: helpers.withMessage( // override default error message with individual error messages
          'Oups, The email format is not valid',
          email,
        ),
      },
      yearOfBirth: { minValue: minValue(1970) },
      password: { required, minLength: minLength(8) },
      passwordConfirm: { sameAs: sameAs(this.password, 'Password') },
    };
  },
  methods: {
    submit() {
      console.log(this.v$);
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log('form successfully submitted');
      } else {
        console.log('Validation failed');
      }
    },
  },
};
</script>

<style scoped>
.error li {
  color: red;
  list-style: none;
}
</style>
