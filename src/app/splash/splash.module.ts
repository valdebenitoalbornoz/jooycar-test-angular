import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SplashComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SplashComponent
  ]
})
export class SplashModule { }
