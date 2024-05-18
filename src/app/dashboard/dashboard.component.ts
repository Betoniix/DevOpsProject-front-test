import { Component } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { CarService } from '../services/car.service';
import { ConductorService } from '../services/conductor.service';
import { RutasService } from '../services/rutas.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private adminService: AdministradorService, private carService: CarService, private conductorService: ConductorService, private rutasService: RutasService) { }
  numeroAdministradores: any = '';
  numeroViajes: any = '';
  numeroVehiculos: any = '';
  numeroConductores: any = '';
  numeroRutas: any = '';

  ngOnInit(): void {
    this.getNumeroUsuariosCreados();
    this.getNumeroConductoresCreados();
    this.getNumeroVehiculosCreados();
    this.getNumeroRutas();
  }

  getNumeroUsuariosCreados() {
    this.adminService.obtenerAdministradores().subscribe(
      (administradores: any[]) => {
        this.numeroAdministradores = administradores.length;
        console.log('Número de administradores:', this.numeroAdministradores);
      },
      (error) => {
        console.error('Error al obtener administradores', error);
      }
    );
  }
  getNumeroVehiculosCreados() {
    this.carService.getCars().subscribe(
      (vehiculos: any[]) => {
        this.numeroVehiculos = vehiculos.length;
        console.log('Número de vehiculos:', this.numeroVehiculos);
      },
      (error) => {
        console.error('Error al obtener vehiculos', error);
      }
    )
  }
  getNumeroConductoresCreados() {
    this.conductorService.obtenerConductores().subscribe(
      (response: any) => {
        if (response && response.data) {
          this.numeroConductores = response.data.length;
          console.log('Número de conductores:', this.numeroConductores);
        }
      },
      (error) => {
        console.error('Error al obtener conductores', error);
      }
    );
  }
  getNumeroRutas() {
    this.rutasService.obtenerRutas().subscribe(
      (rutas: any[]) => {
        console.log('rutasHoy:', rutas);
        this.numeroRutas = rutas.length;
        console.log('Número de rutas hoy:', this.numeroRutas);
      },
      (error: any) => {
        console.error('Error al obtener rutas de hoy', error);
      }
    );
  }


}
