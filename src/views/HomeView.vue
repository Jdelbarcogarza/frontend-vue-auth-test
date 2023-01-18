
<template>
  <main>
    <h4 class="text-center">Registrate o inicia sesion en la plataforma</h4>
    <div class="row justify-center">
      <SignUpForm />
    </div>

    <p class="q-pt-sm text-blue-grey-4 text-center">Already have an account? <RouterLink :to="{name: 'login'}" >Login</RouterLink></p>

    <q-btn @click="btnHandler" label="redirect me" color="secondary" />
  </main>
</template>

<script setup lang="ts">
import SignUpForm from '../components/loginForm/SignUpForm.vue'
import router from '@/router';

const btnHandler = () => {

  console.log('redirecciono')
  router.push({ name: 'home' })

}

</script>
