import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerebros',
  templateUrl: './cerebros.component.html',
  styleUrls: ['./cerebros.component.css']
})
export class CerebrosComponent implements OnInit {

  // tslint:disable: no-inferrable-types
  sabor: string;
  descripcion: string;
  iq: number;
  imagen: string;
  owner: string;
  id: string;
  cerebros: any;

  constructor(private _dataService: DataService,  private _appComp: AppComponent, private _router: Router) { }

  ngOnInit(): void {
    this.owner = localStorage.getItem('us');
    if (!localStorage.getItem('loged')) {
      this._router.navigate(['login']);
    }

    console.log('Actualizando tabla');
    this.ActualizarTabla();
  }

  DeleteCerebro(id: string) {
    console.log(id);
    this._dataService.eliminarCerebro(id).subscribe((resultado) => {
      console.log(resultado);
    });
    this._dataService.obtenerCerebros(this.owner);
   }

   ActualizarTabla() {
    this._dataService.cerebroObservable.subscribe((resultados) => {
      this.cerebros = resultados;
    });
    this._dataService.obtenerCerebros(this.owner);
  }

}
