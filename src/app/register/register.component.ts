import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  correo = new FormControl('');
  contrasenia = new FormControl('');
  codigoInvitacion = new FormControl('');

  constructor(private registerService: RegisterService, private http: HttpClient, private router: Router) { }

  onSubmit() {

    // Obtener los valores actuales de matrícula y contraseña desde los FormControl
    const usuario = {
      correo: this.correo.value,
      contrasenia: this.contrasenia.value
    };

    this.registerService.preRegister(usuario).subscribe(
      (data: any) => {
        console.log('Respuesta de la API:', data);
      },
      (error) => {
        console.error('Error en la solicitud a la API', error);
      }
    );

  }


  register() {

    // Obtener los valores actuales de matrícula y contraseña desde los FormControl
    const usuario = {
      correo: this.correo.value,
      contrasenia: this.contrasenia.value,
      codigoInvitacion: this.codigoInvitacion.value
    };

    this.registerService.register(usuario).subscribe(
      (data: any) => {
        console.log('Respuesta de la API:', data);

        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error('Error en la solicitud a la API', error);
      }
    );

  }

}
