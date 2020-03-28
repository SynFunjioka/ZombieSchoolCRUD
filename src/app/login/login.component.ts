import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private _authSer: AuthService,  private _appComp: AppComponent, private _router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('loged')) {
      this._router.navigate(['dashboard']);
    }
  }

  login() {
    this._authSer.authUser(this.email, this.password).subscribe((resultado) => {
      console.log(resultado);
      this._appComp.loged = true;
      this._router.navigate(['dashboard']);
      localStorage.setItem('loged', 'true');
    }, (error) => {
      console.log(error);
      document.getElementById('ErrorMessageLogin').innerHTML = error.error.errors.toString();
    });
  }

}
