<template>

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
        <p><router-link to="about">About</router-link> | <router-link to="/">Home</router-link></p>
      </q-toolbar>
    </q-header>
</template>

<script lang="ts" setup>

import { isUserAthenticated } from '@/utils/isUserAuthenticated';
import { useToggleDrawer } from '@/stores/uiStores/drawerStore';

const store = useToggleDrawer()

const toggleDrawer = () => {
  store.toggleDrawer()
}

</script>