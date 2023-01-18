import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthTokenStore = defineStore('authToken', () => {

  const token = ref<string>('')

  function getAuthToken(){
    return token.value
  }

  function setAuthToken(authToken: string) {
    token.value = authToken
  }


  return { getAuthToken, setAuthToken }
})