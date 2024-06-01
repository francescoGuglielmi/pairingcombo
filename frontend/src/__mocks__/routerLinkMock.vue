<template>
  <a @click="$emit('click')">
    <slot></slot>
  </a>
</template>