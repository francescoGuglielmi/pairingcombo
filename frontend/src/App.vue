<script setup lang="ts">
</script>

<template>
  <router-view name="component" />
  <div class="modal-container" data-testid="modal-container">
    <router-view name="modal" :key="$route.fullPath"/>
  </div>
</template>

<style scoped>
  .modal-container {
    font-family: Ubuntu;
    color: white;
    width: 70%;
    height: 30%;
    position: absolute;
    left: 18vw;
    top: 12vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .slide-up {
    opacity: 0;
    transition: opacity 1s, transform 1s;
    transform: translateY(15%);
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
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
</style>
