import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './components/tabs/home-tab/home-tab.component';
import { BudgetTabComponent } from './components/tabs/budget-tab/budget-tab.component';
import { TeamTabComponent } from './components/tabs/team-tab/team-tab.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
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
