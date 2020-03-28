import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loged = false;

  
  // tslint:disable: no-inferrable-types
  sabor: string = '';
  descripcion: string = '';
  iq: number = null;
  imagen: string = '';

  title = 'zombies';
  name = 'E1000io';
  persona = {
    edad: 19,
    altura: '178',
    carrera: 'ISW'
  };
  cerebros = [
    {
      sabor: 'Chocolate',
      iq: 100,
      descripcion: 'Con chispas de chocolate',
      imagen: 'Chocolate.jpg'
    },
    {
      sabor: 'Fresa',
      iq: 90,
      descripcion: 'Con pedacitos de fresa',
      imagen: 'Fresa.jpg'
    },
    {
      sabor: 'Vainilla',
      iq: 80,
      descripcion: 'Con sabor a vainilla',
      imagen: 'Vainilla.jpg'
    },
    {
      sabor: 'Franbuesa',
      iq: 70,
      descripcion: 'Con sabor a frambuesa',
      imagen: 'Frambuesa.jpg'
    }
  ];
  Agregar() {
    // tslint:disable-next-line: prefer-const
    let cerebro = {
      sabor: this.sabor,
      iq: this.iq,
      descripcion: this.descripcion,
      imagen: this.imagen
    };
    this.cerebros.push(cerebro);
  }

  Borrar(sabor: string) {
    this.cerebros = this.cerebros.filter(item => item.sabor !== sabor);
  }

  Actualizar(sabor: string, iq: number, descripcion: string, imagen: string) {
    if (this.iq !== null) {
      this.cerebros.find(item => item.sabor === sabor).iq = this.iq;
    }
    if (this.descripcion !== '') {
      this.cerebros.find(item => item.sabor === sabor).descripcion = this.descripcion;
    }
    if (this.imagen !== '') {
      this.cerebros.find(item => item.sabor === sabor).imagen = this.imagen;
    }
    if (this.sabor !== '') {
      this.cerebros.find(item => item.sabor === sabor).sabor = this.sabor;
    }
  }
}
