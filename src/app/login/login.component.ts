import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";
import {NgbToast} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-login',
  standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, NgbToast],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  correo = new FormControl('');
  contrasenia = new FormControl('');
  rememberMe = new FormControl(false);
  showToast:boolean = false;
  toastContent:string = '';

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) { }

  onSubmit() {

    // Obtener los valores actuales de matrícula y contraseña desde los FormControl
    const usuario = {
      correo: this.correo.value,
      contrasenia: this.contrasenia.value
    };

    this.loginService.login(usuario).subscribe(
      (data: any) => {
        console.log('Respuesta de la API:', data);
        const accessToken = data.data.access; // Obtener el token de la respuesta
        this.loginService.setToken(accessToken); // Llamar al método setToken del servicio con el token
        //this.router.navigateByUrl('/dashboard'); esto se pondrá cuando ya terminemos todo
        this.router.navigateByUrl('/register');
      },
      (error) => {
        console.error('Error en la solicitud a la API', error);
        this.toastContent = error.message;
        this.toggleToast();
      }
    );
  }

  toggleToast() {
    this.showToast = !this.showToast;
  }


}
