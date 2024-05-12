import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { RegisterComponent } from './register/register.component';
import { CrudAdminsComponent } from './crud-admins/crud-admins.component';
import { CrudConductoresComponent } from './crud-conductores/crud-conductores.component';

export const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'manage-admin', component: CrudAdminsComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'manage-conductores', component: CrudConductoresComponent }
];
