import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import * as CanvasJS from 'src/assets/js/canvasjs.min';

//var CanvasJS = require('src/assets/js/canvasjs.min');


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    sabores: any;
    owner: string;
    usuariosRegistrados: any;
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this.owner = localStorage.getItem('us');
    if (!localStorage.getItem('loged')) {
      this._router.navigate(['login']);
    }

    this.contarCerebrosF(this.owner);
    this.contarUsuarios();

    }

    async contarCerebrosF(owner: string) {
      await this._dataService.contarSabores(owner).subscribe((resultado) => {
       console.log(resultado);

       // Empezar a graficar
       let chart = new CanvasJS.Chart('gFlavor', {
        animationEnabled: true,
        exportEnabled: true,
        theme: 'light3',
        title: {
          text: 'Cantidad de cerebros por sabor'
        },
        data: [{
          type: 'column',
          indexLabelFontColor: '#5A5757',
          indexLabelPlacement: 'outside',
          dataPoints: [
            { y: resultado.cSpicy, label: 'Spicy' },
            { y: resultado.cSweet, label: 'Sweet' },
            { y: resultado.cBitter, label: 'Bitter' },
            { y: resultado.cSalty, label: 'Salty' }
          ]
        }]
      });
       chart.render();
    }, (error) => {
      console.log(error);
    });
  }



  contarUsuarios() {
    this._dataService.contarUsuariosCerebros().subscribe((resultado) => {
     console.log(resultado);

    // Empezar a graficar
     let chart = new CanvasJS.Chart('gUserBrains', {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light3',
      title: {
        text: 'Cantidad de cerebros por usuario'
      },
      data: [{
        type: 'column',
        indexLabelFontColor: '#5A5757',
        indexLabelPlacement: 'outside',
        dataPoints: resultado
      }]
    });

     chart.render();
    });
  }

  
    
  


  // addData(data) {
  //   // tslint:disable-next-line: prefer-for-of
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data);
  //   data.push({
  //     x: new Date(data[i].email),
  //     y: data[i].email
  //   });
  // }

  // }




}


