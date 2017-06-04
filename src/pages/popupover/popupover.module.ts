import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupoverPage } from './popupover';

@NgModule({
  declarations: [
    PopupoverPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupoverPage),
  ],
  exports: [
    PopupoverPage
  ]
})
export class PopupoverPageModule {}
