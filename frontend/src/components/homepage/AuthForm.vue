<script lang="ts">
import { ref, type Ref, onMounted, defineComponent } from 'vue';
import FormInput from './FormInput.vue';
import { showText } from '../../utils/showText';

export default defineComponent({
  components: {
    FormInput,
  },
  props: {
    formType: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const isTextShowing: Ref<boolean> = ref(false);
    const email: Ref<string> = ref('');
    const password: Ref<string> = ref('');

    onMounted(() => {
      showText(isTextShowing)
    });

    return {
      isTextShowing,
      email,
      password,
      formType: props.formType
    };
  }
});
</script>

<template>
  <div class="slide-up" :class="{ 'show': isTextShowing }">
    <h1>{{ formType === 'signup' ? 'Sign Up' : "Log In" }}</h1>
    <form>
      <FormInput inputFunctionality="email" v-model="email"/>
      <FormInput inputFunctionality="password" v-model="password"/>
      <button type="submit">{{ formType === 'signup' ? "Create Account" : "Authenticate" }}</button>
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
    width: 100%;
  }

  button {
    width: 270px;
    border-radius: 0.5em;
    border: 1px solid white;
    background-color: rgb(94, 59, 145);
    color: white;
    padding: 15px 50px;
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