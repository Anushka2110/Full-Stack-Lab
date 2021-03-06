import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { authResult } from './_models/authResult';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
      return this.loggedInStatus;
  }
  setLoggedIn(status: boolean) {
      this.loggedInStatus = status;
  }
  login(username: string, password: string) {
    console.log('auth service - login called');

    var result = new authResult();
    
    if(username.toLowerCase() == "admin" && password.toLowerCase())
        result.isSuccess = true;
    else 
        result.message = 'authentication error, the username and password is incorrect';

    return result;
}

logout() {
    // remove user from local storage to log user out
    console.log('auth service - logout called');
    localStorage.removeItem('currentUser');
}
}

