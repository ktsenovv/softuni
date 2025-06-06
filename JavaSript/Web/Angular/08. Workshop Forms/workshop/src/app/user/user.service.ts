import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      id: '5fa64ca72183ce1728ff3726',
      firstName: 'Petar',
      username: 'petarman',
      email: 'petarkirilov@gmail.com',
      password: '13579',
      phoneNumber: '0897213312',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }

  edit(username: string, email: string, phoneNumber: string) {
    this.user = {
      id: '5fa64ca72183ce1728ff3726',
      firstName: 'Petar',
      username: username,
      email: email,
      password: '13579',
      phoneNumber: phoneNumber,
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
}
