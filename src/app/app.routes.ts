import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { RegisterComponent } from './register/register.component';
import { CrudAdminsComponent } from './crud-admins/crud-admins.component';
import { CrudConductoresComponent } from './crud-conductores/crud-conductores.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'manage', component: CrudTableComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'asignation', component: AsignacionesComponent },
  { path: 'manage-conductores', component: CrudConductoresComponent}
];
