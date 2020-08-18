// (1) import constant
import { USER_LOGIN, USER_LOGOUT } from "./constants";

// (2) action userLogin 
export function userLogin(user, token){
  return {
    type: USER_LOGIN,
    user,
    token
  }
}

// (3) action userLogout
export function userLogout(){
  return {
    type: USER_LOGOUT
  }
}
