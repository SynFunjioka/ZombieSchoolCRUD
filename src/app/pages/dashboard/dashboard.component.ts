import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
//import * as CanvasJS from '../assets/canvasjs.min';

//var CanvasJS = require('src/assets/js/canvasjs.min');


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    owner: string;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.owner = localStorage.getItem('us');
    this.contarCerebrosF(this.owner);
    /*let chart = new CanvasJS.Chart('gFlavor', {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light2',
      title: {
        text: 'Basic Column Chart in Angular'
      },
      data: [{
        type: 'column',
        indexLabelFontColor: '#5A5757',
        indexLabelPlacement: 'outside',
        dataPoints: [
          { y: 71, label: 'Apple' },
          { y: 55, label: 'Mango' },
          { y: 50, label: 'Orange' },
          { y: 65, label: 'Banana' },
          { y: 95, label: 'Pineapple"'},
          { y: 68, label: 'Pears' },
          { y: 28, label: 'Grapes'},
          { y: 34, label: 'Lychee' },
          { y: 14, label: 'Jackfruit' }
        ]
      }]
    });

    chart.render();*/
    }

    contarCerebrosF(owner: string){
      this._dataService.contarSabores(owner).subscribe((resultado) => {
      console.log(resultado);
    }, (error) => {
    });
  }
}


