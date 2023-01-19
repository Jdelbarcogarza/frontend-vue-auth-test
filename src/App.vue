

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

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppBar from './components/AppBar.vue';

import { ref } from 'vue'
import { isUserAthenticated } from './utils/isUserAuthenticated'

const userIsAuthenticated = ref<boolean>(false);

userIsAuthenticated.value = isUserAthenticated()


</script>