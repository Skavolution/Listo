import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClienteLogin } from '../ModelsView/ClienteLoginMV';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  
  usuario: ClienteLogin = null
  user = new BehaviorSubject<ClienteLogin>(this.usuario);
  login = new BehaviorSubject('logout');

  constructor() { }
  ngOnInit(): void {
    this.login.next('logout')
    this.user.next(null)
  }
}
