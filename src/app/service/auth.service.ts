import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate() {
    localStorage.setItem('token', 'testUser');
  }

  checkAuthentication() {
    return (localStorage.getItem('token')) ? true : false;
  }

  isAuthenticated(): Promise<boolean> {
    return Promise.resolve(!!localStorage.getItem('token'));
  }

}
