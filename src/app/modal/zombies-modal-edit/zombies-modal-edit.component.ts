import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-zombies-modal-edit',
  templateUrl: './zombies-modal-edit.component.html',
  styles: []
})
export class ZombiesModalEditComponent implements OnInit {
  @ViewChild('modal')public modal: ElementRef;

  nombre: string;
  email: string;
  tipo: string;
  zombies: any;
  id: string;
  constructor(private _dataService: DataService, private _rendered: Renderer2) { }

  ngOnInit(): void {
    let zombieData = this._dataService.obtenerZombieData(this.id);
  }

  EditarZombie() {
    this.id = document.getElementById('_id').value;
    this.nombre = document.getElementById('nombreE').value;
    this.email = document.getElementById('emailE').value;
    this.tipo = document.getElementById('tipoE').value ;
  

    console.log(this.nombre, this.email, this.tipo, this.id);
    this._dataService.actualizarZombie(this.nombre, this.email, this.tipo, this.id).subscribe((resultado) => {
      console.log(resultado);
      this._rendered.selectRootElement(
        this.modal.nativeElement, true).click();
      this._dataService.obtenerZombies();
      this.nombre = ' ';
      this.email = ' ';
      this.tipo = ' ';
    }, (error) => {
      console.log(error);
      document.getElementById('ErrorMessageZombieE').innerHTML = error.error.mensajeError.message.toString();
    }
    );

  }
}
