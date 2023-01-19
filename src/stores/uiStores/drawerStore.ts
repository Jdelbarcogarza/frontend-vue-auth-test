
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useToggleDrawer = defineStore('toggleDrawer', () => {

  const isDrawerOpen = ref<boolean>(true);

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }

  return { toggleDrawer, isDrawerOpen }

})