<script lang="ts">
import { defineComponent } from 'vue'

  export default defineComponent ({
    props: {
      inputFunctionality: {
        type: String,
        required: true,
        validator: (value: string) => ['email', 'password'].includes(value)
      },
      modelValue: String,
    },
    emits: ['update:modelValue'],
    setup(_, {emit}) {
      const handleInput = (event: Event) => {
        emit('update:modelValue', (event.target as HTMLInputElement).value);
      };
      return {
        handleInput
      }
    }
})
</script>


<template>
  <div :class="`${inputFunctionality}-field`">
    <label :for="inputFunctionality"></label>
    <input 
      :type="inputFunctionality" 
      :name="inputFunctionality" 
      :id="inputFunctionality" 
      :placeholder="`Your ${inputFunctionality}`" 
      :value="modelValue"
      @input="handleInput"
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