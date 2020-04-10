import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-pedidos-cerebros',
  templateUrl: './pedidos-cerebros.component.html',
  styleUrls: ['./pedidos-cerebros.component.css']
})
export class PedidosCerebrosComponent implements OnInit {
  selectedBrain: string;
  quantity: string;
  typeOrder: number;
  user: string;

  cerebros: any;
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('us');
    if (!localStorage.getItem('loged')) {
      this._router.navigate(['login']);
    }

    this.ActualizarSelect();
  }


  ActualizarSelect() {
    this._dataService.cerebroObservable.subscribe((resultados) => {
      this.cerebros = resultados;
    });
    this._dataService.obtenerCerebros(this.user);
  }

  realizarPedido() {
    let hoy = new Date();
    let suma;
    let fechaEntrega;


    switch (this.typeOrder) {
      case 0:
        let dias15 = 1000 * 60 * 60 * 24 * 15;
        suma = hoy.getTime() + dias15;
        fechaEntrega = new Date(suma);
        break;
      case 1:
        let dias7 = 1000 * 60 * 60 * 24 * 7;
        suma = hoy.getTime() + dias7;
        fechaEntrega = new Date(suma);
        break;
      case 3:
        let dias3 = 1000 * 60 * 60 * 24 * 3;
        suma = hoy.getTime() + dias3;
        fechaEntrega = new Date(suma);
        break;
    }
    console.log(this.user, this.quantity, this.typeOrder, this.selectedBrain);
    console.log(hoy, fechaEntrega);
  }
}
