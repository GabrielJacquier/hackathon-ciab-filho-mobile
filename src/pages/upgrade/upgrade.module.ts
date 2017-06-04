import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpgradePage } from './upgrade';

@NgModule({
  declarations: [
    UpgradePage,
  ],
  imports: [
    IonicPageModule.forChild(UpgradePage),
  ],
  exports: [
    UpgradePage
  ]
})
export class UpgradePageModule {}
