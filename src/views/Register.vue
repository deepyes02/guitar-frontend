<template>
    <div class="registration-form">
    <h1>Registration</h1>
      <h4>Please input your email and password to register</h4>
      <input type="email" v-model="email" name="email" placeholder="email" />
      <input type="password" v-model="password" name="password" placeholder="password" />
      <button @click="register">Register</button>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  data(){
    return{
      email:this.placeholder,password:this.placeholder
    }
  },
  // watch:{
  //   email(value){
  //     console.log("email has changed", value)
  //   }
  // },
  methods: {
    register(){
      console.log(`Clicked ${this.email}, password: ${this.password}`)

    }
  },
  // mounted(){
  //   setTimeout (()=>{
  //     this.email = 'Sign up!!'
  //   }, 2000)
  // }
};
</script>

<style scoped>

</style>

