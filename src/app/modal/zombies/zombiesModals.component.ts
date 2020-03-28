import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'modal-zombies',
  templateUrl: './zombiesModals.component.html',
  styles: []
})
export class ZombiesModalsComponent implements OnInit {
  @ViewChild('modal') public modal: ElementRef;

  nombre: string;
  email: string;
  tipo: string;
  constructor(private _dataService: DataService, private _rendered: Renderer2) { }

  ngOnInit(): void {

  }
  guardarZombie() {
    console.log(this.nombre, this.email, this.tipo);
    this._dataService.agregarZombie(this.nombre, this.email, this.tipo).subscribe((resultado) => {
      console.log(resultado);
      this._rendered.selectRootElement(
        this.modal.nativeElement, true).click();
      this._dataService.obtenerZombies();
      this.nombre = ' ';
      this.email = ' ';
      this.tipo = ' ';
    }, (error) => {
      console.log(error);
      document.getElementById('ErrorMessageZombie').innerHTML = error.error.mensajeError.toString();
    }
    );
  }
}
