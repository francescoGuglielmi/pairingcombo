<script>
  import AuthButton from "./AuthButton.vue";
  import AboutText from "./AboutText.vue";

  export default {
    components: {
      AuthButton,
      AboutText
    },
    data() {
      return {
        login: 'login',
        signup: 'signup',
        showText: false,
      };
    },
    mounted() {
      setTimeout(() => {
        this.showText = true;
      }, 200);
    }
  };
</script>

<template>
  <div class="background"></div>
  <div class="sidebar"></div>
  <h1>Pairing Combo</h1>
  <div class="buttons-container">
    <AuthButton :functionality="login"/>
    <AuthButton :functionality="signup"/>
  </div>
  <div class="text-container" :class="{ 'show': showText }">
    <AboutText />
  </div>

</template>

<style scoped>
  h1 {
    font-family: Honk;
    font-size: 3vw;
    position: fixed;
    width: 30px;
    line-height: 1em;
    margin: 3vw;
  }

  a {
    color: white;
    position: fixed;
    font-size: 1.5vw;
    font-family: Ubuntu;
    left: 4.3vw;
    cursor: pointer;
    &:first-of-type {
      top: 30%;
    }
    &:nth-of-type(2) {
      top: 45%;
    }
    &:nth-of-type(3) {
      top: 60%;
      left: 5.8vw;
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

  .text-container {
    font-family: Ubuntu;
    color: white;
    opacity: 0;
    width: 70%;
    height: 30%;
    position: absolute;
    left: 18vw;
    top: 12vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: translateY(15%);
    transition: opacity 1s, transform 1s;
  }

  .show {
    opacity: 1;
    transform: translateY(0%);
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 5vw;
    }
  }
</style>