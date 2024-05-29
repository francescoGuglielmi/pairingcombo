<script>
  export default {
    props: {
      inputFunctionality: 'email' | 'password',
      email: String,
      password: String
    }
  }
</script>

<template>
  <div :class="`${inputFunctionality}-field`">
    <label :for="inputFunctionality"></label>
    <input 
      :type="inputFunctionality" 
      :name="inputFunctionality" 
      :id="inputFunctionality" 
      :placeholder="`Your ${inputFunctionality}`" 
      required
    />
  </div>
</template>

<style scoped>
  input {
    border: 1px solid white;
    border-radius: 0.5em;
    background-color: rgb(0, 0, 0);
    padding: 15px 10px;
    width: 250px;
    font-family: Ubuntu;
    font-size: 14px;
  }

  input::placeholder {
    color: white;
    font-family: Ubuntu;
    font-size: 14px;
  }
</style>