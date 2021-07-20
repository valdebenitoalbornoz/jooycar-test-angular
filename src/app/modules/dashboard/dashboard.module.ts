import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarHeaderComponent } from './components/sidebar/sidebar-header/sidebar-header.component';
import { SharedModule } from '../shared/shared.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faUserCircle,
  faCalendarCheck,
  faChartPie,
  faCalendar,
  faComments,
  faUsers,
  faShoppingCart,
  faCloud,
  faEnvelope,
  faPencilAlt,
  faBars,
  faSearch
}
from '@fortawesome/free-solid-svg-icons';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  faBell
} from '@fortawesome/free-regular-svg-icons';
import { SidebarHeaderNotificationComponent } from './components/sidebar/sidebar-header/sidebar-header-notification/sidebar-header-notification.component';
import { SidebarHeaderUserComponent } from './components/sidebar/sidebar-header/sidebar-header-user/sidebar-header-user.component';
import { SidebarBodyComponent } from './components/sidebar/sidebar-body/sidebar-body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomeTabComponent } from './components/tabs/home-tab/home-tab.component';
import { BudgetTabComponent } from './components/tabs/budget-tab/budget-tab.component';
import { TeamTabComponent } from './components/tabs/team-tab/team-tab.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { HomeChartComponent } from './components/tabs/home-tab/home-chart/home-chart.component';
import { HomeSummaryBoxComponent } from './components/tabs/home-tab/home-summary-box/home-summary-box.component';
import { DashboardService } from '../../services/dashboard.service';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarHeaderNotificationComponent,
    SidebarHeaderUserComponent,
    SidebarBodyComponent,
    NavbarComponent,
    BannerComponent,
    TabsComponent,
    HomeTabComponent,
    BudgetTabComponent,
    TeamTabComponent,
    ContentComponent,
    HomeChartComponent,
    HomeSummaryBoxComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    NgApexchartsModule,
    RouterModule,
    DashboardRoutingModule
  ],
  providers: [ DashboardService ]
})
export class DashboardModule {
  constructor(lib: FaIconLibrary) {
    lib.addIcons(
      faBell,
      faUserCircle,
      faCalendarCheck,
      faChartPie,
      faCalendar,
      faComments,
      faUsers,
      faShoppingCart,
      faCloud,
      faEnvelope,
      faPencilAlt,
      faBars,
      faSearch
    )
  }
}
