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
import { useQuasar } from 'quasar'
import axios from 'axios';

import { useAuthTokenStore } from '@/stores/authTokenStore';
import { API } from '../../api/baseUrl';

import router from '../../router/index'


const userEmail = ref<string>('')
const userPassword = ref<string>('')

const $q = useQuasar()

const store = useAuthTokenStore()

const onSubmit = async () => {

  const authToken = store.getAuthToken()

  const req = await axios.post(API.baseUrl + "/api/v1/auth/authenticate", {
    email: userEmail.value,
    password: userPassword.value,
  })

  // if query was successfull
	if (req.status === 200) {
		$q.notify({
			color: "green-4",
			textColor: "white",
			icon: "cloud_done",
			message: "Submitted",
		});

		// ------------- INFO -------------
		// save auth token in axios default header from this point on.
		// or in a pinia store. But the best solution is to have a backend endpoint
		// to check if there is a session token stored there any time.

		// Pinia store
		store.setAuthToken(req.data.token);

		// programatically redirect to new route
		router.push({ name: "start" });

	} else {
		$q.notify({
			color: "red-6",
			textColor: "white",
			icon: "cloud_done",
			message: "something went wrong",
		});
	}

}

</script>