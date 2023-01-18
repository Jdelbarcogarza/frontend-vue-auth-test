
<template>
  <main>
    <h4 class="text-center">Registrate o inicia sesion en la plataforma</h4>

    <div class="row justify-center ">
      <LoginForm />
    </div>

    <p class="q-pt-sm text-blue-grey-4 text-center">Already have an account? <RouterLink :to="{name: 'home'}" >Sign up</RouterLink></p>

  </main>
</template>

<script lang="ts" setup>

import SignUpForm from '../components/loginForm/SignUpForm.vue'
import LoginForm from '../components/loginForm/LoginForm.vue'

import router from '@/router';

</script>