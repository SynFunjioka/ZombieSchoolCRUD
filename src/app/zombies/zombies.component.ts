import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { TitleComponent } from '../shared/title/title.component';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Zombie } from '../src/app/shared/Models/zombie';

@Component({
  selector: 'app-zombies',
  templateUrl: './zombies.component.html',
  styleUrls: ['./zombies.component.css']
})
export class ZombiesComponent implements OnInit {
  @ViewChild('zombieTable')public modal: ElementRef;

  // tslint:disable: no-inferrable-types
  id: string ; //Email zombie
  zombieName: string; 
  type: string ;
  owner: string; //Email User

  zombies: Zombie;
  zombieInfo: any;
  constructor(private _dataService: DataService,  private _appComp: AppComponent, private _router: Router, private _rendered: Renderer2) { }

  ngOnInit(): void {
    this.owner = localStorage.getItem('us');
    if (!localStorage.getItem('loged')) {
      this._router.navigate(['login']);
    }

    console.log('Actualizando tabla');
    this.ActualizarTabla();
  }

  ActualizarTabla() {
    this._dataService.listarZombies().subscribe((zombies: Zombie) => {
      console.log('ActualizarTabla ►' + zombies);
      this.zombies = zombies;
    }, error => {
      console.log('actualizarTabla ► error ►', error);
    });

    /*this._dataService.zombieObservable.subscribe(resultados => {
      console.log('Actualizar tabla ►', resultados);
      this.zombies = resultados.body.Items;
    }, err => {
      console.log('actualizar tabla ► error►', err);
    });
    this._dataService.obtenerZombies();*/
  }

 DeleteZombie(id: string) {
   console.log(this.id);
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
