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

  guardarUsuario(correo: string, contrasenia: string) {
    let nuevoUsuario = {
      email: correo,
      password: contrasenia
    };
    return this._http.post(apiUrl + 'registro/new', nuevoUsuario, {headers: this.headers}).pipe(map(data => data));
  }

  authUser(correo: string, contrasenia: string) {
    const usuario = {
      email: correo,
      password: contrasenia,
      typeA: ''
    };
    return this._http.get(apiUrl + 'usuario/' + correo, usuario);
  }

}
