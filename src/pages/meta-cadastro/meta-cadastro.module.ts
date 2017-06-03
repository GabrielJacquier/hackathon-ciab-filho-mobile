import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetaCadastroPage } from './meta-cadastro';

@NgModule({
  declarations: [
    MetaCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(MetaCadastroPage),
  ],
  exports: [
    MetaCadastroPage
  ]
})
export class MetaCadastroPageModule {}
