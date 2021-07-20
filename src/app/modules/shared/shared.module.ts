import { NgModule } from '@angular/core';
import { LogoSpinnerComponent } from './components/logo-spinner/logo-spinner.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { appLogoIcon } from '../../../assets/svg/logo';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SummaryBoxComponent } from './components/summary-box/summary-box.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LogoSpinnerComponent,
    AvatarComponent,
    SummaryBoxComponent
  ],
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [ appLogoIcon ]
    })
  ],
  exports: [ 
    LogoSpinnerComponent,
    AvatarComponent,
    SummaryBoxComponent
  ]
})
export class SharedModule {
 
}
