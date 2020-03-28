import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(public _ajustes: SettingsService) { }

  CambiarColor(colorEncabezado: string, colorMenuLateral) {
    this._ajustes.ajustes.temaEncabezado = colorEncabezado;
    this._ajustes.ajustes.temaMenuLateral = colorMenuLateral;
    this._ajustes.guardarAjustes();
  }

  ngOnInit(): void {
    this._ajustes.cargarAjustes();
  }

  seleccionar(event) {
    console.log(event.target.dataset.class);
    this.CambiarColor(event.target.dataset.class, this._ajustes.ajustes.temaMenuLateral);
  }

  seleccionarSide(event) {
    console.log(event.target.dataset.class);
    this.CambiarColor(this._ajustes.ajustes.temaEncabezado, event.target.dataset.class);
  }

}
