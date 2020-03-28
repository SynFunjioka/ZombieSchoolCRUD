import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

let apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json'
  });

  guardarUsuario(correo: string, contrasenia: string) {
    let nuevoUsuario = {
      email: correo,
      password: contrasenia
    };
    return this._http.post(apiUrl + 'registro/new', nuevoUsuario, {headers: this.headers}).pipe(map(data => data));
  }

  LoginUser(correo: string, contrasenia: string): Observable<any> {
    let loginUser = {
      email: correo,
      password: contrasenia
    };
    return this._http.post(apiUrl + 'autenticar', loginUser, {headers: this.headers}).pipe(map(data => data));
    
  }

  setUser(user): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user);
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  getCurrentUser() {
    let user_string = localStorage.getItem('currentUser');
    if(!isNullOrUndefined(user_string)) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser(){
    let accessToken= localStorage.getItem('accessToken'); 
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
  }


  //---------------------------------------------------------------

  authUser(correo: string, contrasenia: string) {
    const usuario = {
      email: correo,
      password: contrasenia}
      ;
    return this._http.post(apiUrl + 'usuario/login', usuario);
  }

}
