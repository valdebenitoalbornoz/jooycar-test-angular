import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [ LoginGuard ],
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }