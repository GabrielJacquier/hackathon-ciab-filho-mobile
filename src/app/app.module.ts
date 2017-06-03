import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ExtratoPage } from '../pages/extrato/extrato';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MetaCadastroPage } from '../pages/meta-cadastro/meta-cadastro';
import { MetaDetalhePage } from '../pages/meta-detalhe/meta-detalhe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ExtratoPage,
    HomePage,
    LoginPage,
    MetaCadastroPage,
    MetaDetalhePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExtratoPage,
    HomePage,
    LoginPage,
    MetaCadastroPage,
    MetaDetalhePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
