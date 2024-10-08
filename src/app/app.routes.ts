import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'results', component: ResultsComponent},
    {path: 'dashboard/:id', component: DashboardComponent},
    {path:'**', redirectTo: '/home'}
];
