import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './components/content/tabs/home-tab/home-tab.component';
import { BudgetTabComponent } from './components/content/tabs/budget-tab/budget-tab.component';
import { TeamTabComponent } from './components/content/tabs/team-tab/team-tab.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'home',
        component: HomeTabComponent,
      },
      {
        path: 'budget',
        component: BudgetTabComponent
      },
      {
        path: 'team',
        component: TeamTabComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ]
})
export class DashboardRoutingModule { }
