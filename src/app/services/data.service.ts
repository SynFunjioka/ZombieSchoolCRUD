import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

let apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private updateZombies$ = new Subject<any>();
  zombieObservable = this.updateZombies$.asObservable();

  private updateCerebros$ = new Subject<any>();
  cerebroObservable = this.updateCerebros$.asObservable();

  constructor(private _client: HttpClient) { }

async obtenerZombies() {
  let zombies = await this._client.get<any>(apiUrl + 'zombies');
  console.log(zombies);
  return this.updateZombies$.next(zombies);
}

async obtenerZombieData(id: string) {
  let zombie = await this._client.get<any>(apiUrl + 'zombieData/' + id);
  // return this.updateZombies$.next(zombie);
  return zombie;
}

agregarZombie(nombre: string, correo: string, tipo: string) {
  let nuevoZombie = {
    name: nombre,
    email: correo,
    type: tipo
  };
  return this._client.post(apiUrl + 'zombies/new', nuevoZombie);
}

actualizarZombie(nombre: string, correo: string, tipo: string, id: string) {
  let cambioZombie = {
    name: nombre,
    email: correo,
    type: tipo,
    _id: id
  };
  return this._client.put(apiUrl + 'zombies/edit/' + cambioZombie._id, cambioZombie);
}

eliminarZombie(id) {
  return this._client.delete(apiUrl + 'zombies/delete/' + id);
}

//_____________________________________________________________________ CEREBRO
async obtenerCerebros() {
  let cerebros = await this._client.get<any>(apiUrl + 'cerebros');
  console.log(cerebros);
  return this.updateCerebros$.next(cerebros);
}

agregarCerebro(sabor: string, iq: number, descripcion: string) {
  let nuevoCerebro = {
    flavor: sabor,
    IQ: iq,
    Description: descripcion
  };
  return this._client.post(apiUrl + 'cerebro/new', nuevoCerebro);
}

eliminarCerebro(id) {
  return this._client.delete(apiUrl + 'cerebros/delete/' + id);
}
}


