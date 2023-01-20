<template>
	<h2>START (authenticated)</h2>
	<p>Token {{ authToken }}</p>

	<q-drawer show-if-above v-model="isDrawerOpen" side="left" bordered>
		<q-item>
			<q-item-section>
				<q-avatar>
					<img src="src\assets\images\test image.jpg" alt="avatar" />
				</q-avatar>
			</q-item-section>

			<q-item-section>
				<p>jeb@email.com</p>
				<p>$99.34</p>
			</q-item-section>
		</q-item>
		<!-- drawer content -->

		<q-separator />

		<!-- encerrar esto en un template -->
		<q-item clickable v-ripple>
			<q-item-section avatar>
				<p class="bg-purple-2">ICON</p>
			</q-item-section>
			<q-item-section>
				<RouterLink :to="{ name: 'addProspect' }">Agregar prospecto</RouterLink>
			</q-item-section>
		</q-item>
		<q-separator />

    <q-item clickable v-ripple>
			<q-item-section avatar>
				<p class="bg-purple-2">ICON 2</p>
			</q-item-section>
			<q-item-section>
				<RouterLink :to="{ name: 'prospectList' }">Lista de prospecto</RouterLink>
			</q-item-section>
		</q-item>
		<q-separator />

		<div class="column q-pt-xl">
			<div class="q-py-sm">item 1</div>

			<div class="q-py-sm">item 2</div>

			<div class="q-py-sm">item 3</div>
		</div>
	</q-drawer>

  <RouterView />

</template>

<script lang="ts" setup>
import { useAuthTokenStore } from "@/stores/authTokenStore";
import { useToggleDrawer } from "@/stores/uiStores/drawerStore";

import { ref } from "vue";
import { storeToRefs } from "pinia";

// avatar test image
import avatarTestImage from "../../assets/images/test image.jpg";
import { RouterLink } from "vue-router";

const authStore = useAuthTokenStore();
const openDrawerStore = useToggleDrawer();

const authToken = authStore.getAuthToken();

const { isDrawerOpen } = storeToRefs(openDrawerStore);

const authTokenRef = ref<string>("");

authTokenRef.value = authToken;
</script>
