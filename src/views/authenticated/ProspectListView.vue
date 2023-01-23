<template>

<h4>Prospect List view</h4>

  <div class="q-pa-md">
    <q-btn 
    label="request"
    @click="makeRequest"
    />
  </div>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'

import { API } from '../../api/baseUrl'
import { useAuthTokenStore } from '@/stores/authTokenStore';

const authStore = useAuthTokenStore()

const token = authStore.getAuthToken()

// llenar tabla con informacion de la base de datos

  const makeRequest = async () => {
  
  const req = await axios.get(API.baseUrl + '/api/v1/prospect/all',
  {
    headers: { Authorization: `Bearer ${token}` } 
  })

  console.log('llego la respuesta', req.data)

  }
  


</script>