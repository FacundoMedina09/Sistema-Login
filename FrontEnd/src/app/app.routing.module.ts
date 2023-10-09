import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

//Componentes que utilizamos
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes= [
    {path: '', redirectTo: 'login', pathMatch: 'full' }, //Cuando la ruta sea vacia, se lo lleva a login
    {path: 'login', component: LoginComponent }, //Cuando la ruta sea "login", se invoca el login
    {path: 'registro', component: RegistroComponent },//Cuando la ruta sea "registro", se invoca el registro
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},//Cuando la ruta sea "dashboard", se invoca el dashboard
    {path: '**', redirectTo: 'login', pathMatch: 'full' }, //Cuando la ruta no sea una registrada, se lo lleva a login
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})



export class AppRoutingModule{}
export default routes;
