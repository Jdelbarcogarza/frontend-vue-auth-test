<template>

  <h2>START (authenticated)</h2>
  <p>Token {{ authToken }}</p>

  <q-drawer show-if-above v-model="isDrawerOpen" side="left" bordered>
      <!-- drawer content -->
  </q-drawer>

</template>

<script lang="ts" setup>

import { useAuthTokenStore } from '@/stores/authTokenStore';
import { useToggleDrawer } from '@/stores/uiStores/drawerStore';

import { ref } from 'vue'

const authStore = useAuthTokenStore()
const openDrawerStore = useToggleDrawer()

const authToken = authStore.getAuthToken()
const isDrawerOpen = openDrawerStore.isDrawerOpen

const authTokenRef = ref<string>('')

authTokenRef.value = authToken




</script>