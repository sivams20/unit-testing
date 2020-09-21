import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate() {
    localStorage.setItem('user', 'testUser');
  }

  checkAuthentication() {
    return (localStorage.getItem('user')) ? true : false;
  }

  isAuthenticated(): Promise<boolean> {
    return Promise.resolve(!!localStorage.getItem('token'));
  }

}
