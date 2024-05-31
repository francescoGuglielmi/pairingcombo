<script lang="ts">
  export default {
    props: {
      authButtonFunctionality: {
        type: String,
        required: true,
        validator: (value: string) => ['login', 'signup'].includes(value)
      }
    },
    methods: {
      goToAuth(): void {
        this.$router.push(`/${this.authButtonFunctionality}`)
      }
    }
  };
</script>

<template> 
  <button :class="authButtonFunctionality" @click="goToAuth">
    {{ authButtonFunctionality }}
  </button>
</template>

<style scoped>
  button {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    border: 1px solid white;
    cursor: pointer;
    font-size: 14px;
    font-family: Ubuntu;
    transition: box-shadow 0.2s ease, color 0.2s ease;
  }

  button:hover {
    box-shadow: 0px 0px 8px yellow;
    color: yellow;
  }

  .login {
    background-color: rgb(0, 0, 0);
  }

  .signup {
    background-color: rgb(94, 59, 145);
  }
</style>