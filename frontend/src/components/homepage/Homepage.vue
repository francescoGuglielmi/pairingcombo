<script lang="ts">
import AuthButton from "./AuthButton.vue";

export default {
  components: {
    AuthButton,
  },
};
</script>

<template>
  <div class="background"></div>
  <div class="sidebar"></div>
  <router-link to="/" class="logo">
    <h1>Pairing Combo</h1>
  </router-link>
  <div class="buttons-container">
    <AuthButton :authButtonFunctionality="'login'" />
    <AuthButton :authButtonFunctionality="'signup'" /> 
  </div>
</template>

<style scoped>
  .logo {
    text-decoration: none;
    font-size: 1.5vw;
    cursor: pointer;
    position: fixed;
    left: 3vw;
    width: 100px;
    top: 5%;
    h1 {
      font-family: Honk;
      font-size: 3vw;
      line-height: 1em;
    }
  }

  .sidebar {
    height: 100vh;
    width: 15vw;
    background-color: #000000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 6%;
    right: 3%;
    width: 200px;
    height: 40px;
    gap: 10px;
  }
  
  @media (max-width: 600px) {
    h1 {
      font-size: 5vw;
    }
  }
  </style>