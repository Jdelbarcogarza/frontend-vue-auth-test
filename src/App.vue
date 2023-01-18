<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppBar from './components/AppBar.vue';

</script>

<template>
  
  <header>
    <AppBar />
  </header>

  <RouterView />
</template>