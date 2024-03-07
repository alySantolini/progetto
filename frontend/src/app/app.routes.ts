import { Routes } from '@angular/router';
import { RicercaComponent } from './ricerca/ricerca.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"home",
        component: HomeComponent
        },
        {
        path:"login",
        component: LoginComponent
        },
        {
        path:"profilo",
        component: ProfiloComponent
        },
        {
        path:"ricerca",
        component: RicercaComponent
        },
        {
        path:"*",
        redirectTo: "home"
        }
];
