import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtratoPage } from './extrato';

@NgModule({
  declarations: [
    ExtratoPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtratoPage),
  ],
  exports: [
    ExtratoPage
  ]
})
export class ExtratoPageModule {}
