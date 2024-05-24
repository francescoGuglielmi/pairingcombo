<script lang="ts">
import { ref, onMounted, defineProps, defineComponent } from 'vue';
import FormInput from './FormInput.vue';

export default defineComponent({
  components: {
    FormInput,
  },
  setup() {
    const showText = ref(false);
    const email = ref('');
    const password = ref('');

    onMounted(() => {
      setTimeout(() => {
        showText.value = true;
      }, 200);
    });

    return {
      showText,
    };
  }
});
</script>

<template>
  <div class="slide-up" :class="{ 'show': showText }">
    <h1>Log In</h1>
    <form>
      <FormInput inputFunctionality="email" />
      <FormInput inputFunctionality="password" />
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }

  button {
    border-radius: 0.5em;
    border: 1px solid white;
    background-color: rgb(94, 59, 145);
    color: white;
    padding: 15px 116px;
    cursor: pointer;
    font-family: Ubuntu;
    font-weight: 400;
    font-size: 14px;
    transition: box-shadow 0.2s ease, color 0.2s ease;
  }

  button:hover {
    box-shadow: 0px 0px 8px yellow;
    color: yellow;
  }
</style>