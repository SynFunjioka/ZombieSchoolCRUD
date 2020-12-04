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
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  guardarUsuario(correo: string, contrasenia: string, type: string) {
    let nuevoUsuario = {
      email: correo,
      password: contrasenia,
      typeA: type
    };
    return this._http.post(apiUrl + 'registro', nuevoUsuario);
  }

  authUser(correo: string) {
    let usuario = this._http.get(apiUrl + 'usuario/' + correo);
    return usuario;
  }

  changeUserData(email: string, password: string, typeA: string) {
    let userData = {
      email: email,
      password: password,
      typeA: typeA
    };
    return this._http.put(apiUrl + 'usuario/' + email, userData );
  }

  deletUser(email){
    return this._http.delete(apiUrl + 'usuario/' + email);
  }
}
