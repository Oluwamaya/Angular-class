import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let user = localStorage.getItem("currentUser")!
  if (user) {
    return true;

  }else{
    alert("please login ")
    
    return false;
  }
};
