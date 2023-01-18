<template>
	<div class="q-pa-md" style="max-width: 400px">
		<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
			<q-input
				filled
				v-model="userName"
				label="Your name *"
				hint="Name and surname"
				lazy-rules
				:rules="[(val) => (val && val.length > 0) || 'Please type something']"
			/>

			<q-input filled label="Last name" v-model="userLastName" />

			<q-input
				filled
				v-model="userEmail"
				label="E-mail"
				type="email"
				lazy-rules
				:rules='[ (val: string) => val.includes("@") || "please type a valid email" ]'
			/>

			<q-input
				filled
				type="password"
				v-model="userPassword"
				label="Password"
				lazy-rules
				:rules="[
					(val) => (val !== null && val !== '') || 'Please type a password',
					(val) =>
						val.length > 3 || 'Password must be more than 3 characters long',
				]"
			/>

			<div>
				<q-btn label="Submit" type="submit" color="primary" />
				<q-btn
					label="Reset"
					type="reset"
					color="primary"
					flat
					class="q-ml-sm"
				/>
			</div>
		</q-form>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";

import { API } from "../../api/baseUrl";

const $q = useQuasar();

// form refs
const userName = ref<string>("");
const userPassword = ref<string>("");
const userEmail = ref<string>("");
const userLastName = ref<string>("");

const onReset = () => {
	userName.value = "";
	userPassword.value = "";
	userEmail.value = "";
	userLastName.value = "";
};

const onSubmit = async () => {
	const req = await axios.post(API.baseUrl + "/api/v1/auth/register", {
		names: userName.value,
		lastNames: userLastName.value,
		email: userEmail.value,
		password: userPassword.value || null,
	});

  // if query was successfull
  if (req.status === 200) {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }



};
</script>
