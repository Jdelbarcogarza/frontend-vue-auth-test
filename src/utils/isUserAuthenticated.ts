
import { useAuthTokenStore } from '../stores/authTokenStore';



// funcion que retorna un booleano
export const isUserAthenticated = () : boolean => {
  
  const store = useAuthTokenStore()
  
  const authToken: string = store.getAuthToken()

  // checar que hay un authToken aqui. Y VALIDARLO
  if (authToken.length > 0 && authToken !== null) {
    
    return true;
  }

  return false;
  
}