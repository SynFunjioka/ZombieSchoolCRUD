import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;
  usuario: any;
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  crearCuenta() {
    console.log(this.email, this.password);
    this._authService.guardarUsuario(this.email, this.password).subscribe((resultado) => {
      console.log(resultado);
    }, (error) => {
      console.log(error);
      document.getElementById('ErrorMessageRegistro').innerHTML = error.error.mensajeError.toString();
      // document.getElementById('ErrorMessageZombie').innerHTML = error.error.mensajeError.toString();
    });
  }
}

