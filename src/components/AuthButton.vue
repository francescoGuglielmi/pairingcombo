<script>
  export default {
    props: {
      functionality: String
    },
    methods: {
      navigate() {
        if (this.functionality === 'signup') {
          this.$router.push('/signup');
        } else {
          this.$router.push('/login');
        }
      }
    },
    data() {
      return {
        signupOrLogin: this.functionality === "signup" ? "signup-button" : "login-button"
      };
    }
  };
</script>

<template>
  <button @click="navigate" :class="signupOrLogin">{{ functionality }}</button>
</template>

<style scoped>
  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-family: Ubuntu;
    font-size: 14px;
    border-radius: 0.5em;
    border: 1px solid white;
    color: rgb(255, 255, 255);
    transition: box-shadow 0.2s ease, color 0.2s ease;
  }

  button:hover {
    box-shadow: 0px 0px 7px yellow;
    color: yellow;
  }

  .login-button {
    background-color: rgb(0, 0, 0);
  }

  .signup-button {
    background-color: rgb(94, 59, 145);
  }
</style>