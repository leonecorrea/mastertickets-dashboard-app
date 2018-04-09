import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GastosPage } from '../pages/gastos/gastos';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProtocolosPage } from '../pages/protocolos/protocolos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GastosPage,
    PerfilPage,
    LoginPage,
    RegistrarPage,
    ConfiguracoesPage,
    ProtocolosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GastosPage,
    PerfilPage,
    LoginPage,
    RegistrarPage,
    ConfiguracoesPage,
    ProtocolosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
