import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RutasTableComponent } from './rutas-table/rutas-table.component';
import {CarCrudTableComponent} from "./car-crud-table/car-crud-table.component";
import { CrudAdminsComponent } from './crud-admins/crud-admins.component';
import { CrudConductoresComponent } from './crud-conductores/crud-conductores.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'manage', component: CrudTableComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'asignation', component: AsignacionesComponent },
  { path: 'manage-conductores', component: CrudConductoresComponent },
  { path: 'manage-admin', component: CrudAdminsComponent },
  { path: 'cars', component: CarCrudTableComponent },
  { path: 'manage-rutas', component: RutasTableComponent},
  { path: 'dashboard', component: DashboardComponent}
];
