import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'manage', component: CrudTableComponent },
   { path: 'register', component: RegisterComponent }
];
