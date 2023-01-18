<template>
  <div class="q-pa-md shadow-1" style="width: 500px; max-width: 600px">
  <q-form @submit="onSubmit" class="q-gutter-md">

    <q-input 
      filled  
      v-model="userEmail"
      type="email"
      label="Email"
    />

    <q-input 
    filled
    v-model="userPassword"
    type="password"
    label="Password"
    />

    <q-btn type="submit" label="Log in" color="primary" />

  </q-form>
</div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const userEmail = ref<string>('')
const userPassword = ref<string>('')


const onSubmit = async () => {

}

</script>