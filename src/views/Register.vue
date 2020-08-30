<template>
  <div class="registration-form">
    <h1>Registration</h1>
    <h4>Please input your email and password to register</h4>
    <input type="email" v-model="email" name="email" placeholder="email" />
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="password"
    />
    <button @click="register">Register</button>
  </div>
</template>
<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>
