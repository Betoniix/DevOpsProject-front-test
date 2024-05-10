import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  correo: string = '';
  contrasenia: string = '';
  codigoInvitacion: string = '';
  mantenerLogueado: boolean = false;

  submitForm() {
    // Add your form submission logic here
  }
  mostrarCampoInvitacion() {

  }

  openModal() {
    const modal = document.getElementById('invitationModal');
    if (modal) {
      // Verifica si el modal existe
      modal.classList.add('show');
    }
  }
}
