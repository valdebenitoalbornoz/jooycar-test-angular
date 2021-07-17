import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoSpinnerComponent } from './components/logo-spinner/logo-spinner.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { appLogoIcon } from '../../assets/svg/logo';


@NgModule({
  declarations: [
    LogoSpinnerComponent
  ],
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [ appLogoIcon ]
    })
  ],
  exports: [ LogoSpinnerComponent ]
})
export class SharedModule { }
