import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('modalUserEdit')public modal: ElementRef;
  
  email: string;
  password: string;
  typeA: string;
  
  constructor( private _router: Router, private _authSer: AuthService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('us');
    if (!localStorage.getItem('loged')) {
      this._router.navigate(['login']);
    }
    this.getUserData();
  }

  getUserData(){
    this._authSer.authUser(this.email).subscribe((resultado) => {
      console.log('getUserData ►', resultado);

      this.password = resultado.body.Item.password;
      this.typeA = resultado.body.Item.typeA;

    }, (error) => {
      console.log(error);
      document.getElementById('ErrorMessageLogin').innerHTML = error.message.toString();
    });
  }

  updateUserData(){
    console.log('change data ►', this.email, this.password, this.typeA);
    this._authSer.changeUserData(this.email, this.password, this.typeA).subscribe(result =>{
      localStorage.removeItem('loged');
      localStorage.removeItem('us');
      this._router.navigate(['login']);
    }, err => {
      console.log('updateData ►', err);
    });
  }

  deleteUser(){
    this._authSer.deletUser(this.email).subscribe(result =>{
      localStorage.removeItem('loged');
      localStorage.removeItem('us');
      this._router.navigate(['login']);
    }, err => {
      console.log('updateData ►', err);
    });
  }

}
