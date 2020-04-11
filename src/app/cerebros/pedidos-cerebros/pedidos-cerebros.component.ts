import { Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-pedidos-cerebros',
  templateUrl: './pedidos-cerebros.component.html',
  styleUrls: ['./pedidos-cerebros.component.css']
})
export class PedidosCerebrosComponent implements OnInit {
  @ViewChild('pedidosCerebrosTable')public modal: ElementRef;


  selectedBrain: string;  // id cerebro
  quantity: number;
  typeOrder: string;
  user: string;
  fechaEntrega: Date;

  cerebros: any;
  dataPedidos: any;
  constructor(private _dataService: DataService, private _router: Router, private _renderer: Renderer2) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('us');
    if (!localStorage.getItem('loged')) {
      this._router.navigate(['login']);
    }

    this.ActualizarSelect();
    this.ActualizarTablaPedidos();
  }

  // Obtener cerebros para el combo box
  ActualizarSelect() {
    this._dataService.cerebroObservable.subscribe((resultados) => {
      this.cerebros = resultados;
    });
    this._dataService.obtenerCerebros(this.user);
  }

  // Obtener datos de pedidos
  ActualizarTablaPedidos() {
    this._dataService.pedidoCerebroObservable.subscribe((resultados) => {
      this.dataPedidos = resultados;
    });
    this._dataService.obtenerInfoPedidos(this.user);
  }

  realizarPedido() {
    let hoy = new Date();
    let suma;
    let tipoDeOrden;
    var nivelOrden = parseInt(this.typeOrder, 10);

    switch (nivelOrden) {
      case 0:
        console.log('caso 0');
        let dias15 = 1000 * 60 * 60 * 24 * 15;
        suma = hoy.getTime() + dias15;
        this.fechaEntrega = new Date(suma);
        tipoDeOrden = 'Bronce';
        break;
      case 1:
        console.log('caso 1');
        let dias7 = 1000 * 60 * 60 * 24 * 7;
        suma = hoy.getTime() + dias7;
        this.fechaEntrega = new Date(suma);
        tipoDeOrden = 'Silver';
        break;
      case 2:
        console.log('caso 2');
        let dias3 = 1000 * 60 * 60 * 24 * 3;
        suma = hoy.getTime() + dias3;
        this.fechaEntrega = new Date(suma);
        tipoDeOrden = 'Gold';
        break;

      default:
        console.log('nada');
        break;
    }
    console.log(this.user, this.quantity, tipoDeOrden, this.selectedBrain);
    console.log(hoy.toDateString(), this.fechaEntrega.toDateString());

    this._dataService.guardarPedido(this.selectedBrain[0], this.quantity, this.user,
      tipoDeOrden, hoy.toDateString(), this.fechaEntrega.toDateString()).subscribe((resultados) => {
        console.log(resultados);
        alert("Su pedido está en camino, llegará a su domicilio el día: " + resultados.fechaEntrega);
        this.ActualizarTablaPedidos();
    });

  }
}


// document.getElementById('msgFechaEntrega').innerText = this.fechaEntrega.toDateString();