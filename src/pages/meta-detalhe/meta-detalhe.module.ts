import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetaDetalhePage } from './meta-detalhe';

@NgModule({
  declarations: [
    MetaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(MetaDetalhePage),
  ],
  exports: [
    MetaDetalhePage
  ]
})
export class MetaDetalhePageModule {}
