import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;
  usuario: any;
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  crearCuenta() {
    console.log(this.email, this.password);
    this._authService.guardarUsuario(this.email, this.password).subscribe((resultado) => {
      console.log(resultado);
      this._router.navigate(['login']);
    }, (error) => {
      console.log(error);
      document.getElementById('ErrorMessageRegistro').innerHTML = error.message.toString();
      // document.getElementById('ErrorMessageZombie').innerHTML = error.error.mensajeError.toString();
    });
  }
}

