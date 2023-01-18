<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppBar from './components/AppBar.vue';

</script>

<template>
  
  <header>
  </header>
  
  <q-layout view="hHh lpR fFf">
    
    <AppBar />

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>

</template>