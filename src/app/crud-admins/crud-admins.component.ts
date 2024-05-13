import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormGroup
import { Usuario } from '../interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-admins',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crud-admins.component.html',
  styleUrl: './crud-admins.component.css'
})
export class CrudAdminsComponent implements OnInit {
  administradores: any[] | undefined;
  formulario: FormGroup; // Define FormGroup
  administradorSeleccionado: Usuario | null = null;
  idAdministrador: any = '';

  constructor(private administradorService: AdministradorService, private router: Router) {
    this.formulario = new FormGroup({ // Inicializa FormGroup
      correo: new FormControl(''),
      contrasenia: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.obtenerAdministradores();
  }

  capturarAdministrador(administrador: any) {
    this.administradorSeleccionado = administrador;
    this.idAdministrador = administrador.id;
    this.rellenarFormulario(); // Llama a rellenarFormulario() al seleccionar un administrador
  }

  obtenerAdministradores(): void {
    this.administradorService.obtenerAdministradores().subscribe(
      (data: any) => {
        this.administradores = data;
      },
      (error) => {
        console.error('Error al obtener administradores', error);
      }
    );
  }

  eliminarAdmin(id: any) {
    this.administradorService.eliminarAdministrador(id).subscribe(
      (data: Usuario) => {
        this.administradorSeleccionado = data;
        this.refreshPage();
      },
      (error) => {
        console.error('Error al eliminar administrador', error);
      }
    );
  }

  rellenarFormulario() {
    if (this.administradorSeleccionado) {
      this.formulario.patchValue({ // Usa patchValue para rellenar el formulario
        correo: this.administradorSeleccionado.correo,
        contrasenia: this.administradorSeleccionado.contrasenia
      });
    }
  }

  editarAdmin() {
    if (this.formulario.valid) {
      const usuario = this.formulario.value;
      this.administradorService.editarAdministrador(this.idAdministrador, usuario).subscribe(
        (data: Usuario) => {
          this.administradorSeleccionado = data;
          this.refreshPage();
        },
        (error) => {
          console.error('Error al editar administrador', error);
        }
      );
    } else {
      console.error('El formulario es inválido');
    }
  }

  refreshPage() {
    window.location.reload();
  }
}
