import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { TitleComponent } from '../shared/title/title.component';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zombies',
  templateUrl: './zombies.component.html',
  styleUrls: ['./zombies.component.css']
})
export class ZombiesComponent implements OnInit {
  @ViewChild('zombieTable')public modal: ElementRef;

  // tslint:disable: no-inferrable-types
  nombre: string ;
  email: string ;
  tipo: string ;
  zombies: any;
  id: string;
  zombieInfo: any;
  constructor(private _dataService: DataService,  private _appComp: AppComponent, private _router: Router, private _rendered: Renderer2) { }

  ngOnInit(): void {
    if (!localStorage.getItem('loged')) {
      this._router.navigate(['login']);
    }

    console.log('Actualizando tabla');
    this.ActualizarTabla();
  }

  ActualizarTabla() {
    this._dataService.zombieObservable.subscribe((resultados) => {
      this.zombies = resultados;
    });
    this._dataService.obtenerZombies();
  }

 DeleteZombie(id: string) {
   console.log(this.email);
   return this._dataService.eliminarZombie(id).subscribe((resultado) => {
    console.log(resultado);
    this._dataService.obtenerZombies();
    }, (error) => {
      console.log(error);
      document.getElementById('ErrorMessageZombie').innerHTML = error.error.mensajeError.toString();
    }
    );
  }

  DatosZombie(id: string, nombre: string, email: string, tipo: string) {
    console.log(id, nombre, email, tipo);

    document.getElementById('_id').value = id;
    document.getElementById('nombreE').value = nombre;
    document.getElementById('emailE').value = email;
    document.getElementById('tipoE').value = tipo;

   
  }

 }
