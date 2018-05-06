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
import { AtenderSenhaPage } from '../pages/atender-senha/atender-senha'

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyBVYgNcTwZUwxA8NnRPxY7a2T92IOLDSBk",
  authDomain: "mastertickets-2018.firebaseapp.com",
  databaseURL: "https://mastertickets-2018.firebaseio.com",
  projectId: "mastertickets-2018",
  storageBucket: "mastertickets-2018.appspot.com",
  messagingSenderId: "596850746328"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GastosPage,
    PerfilPage,
    LoginPage,
    RegistrarPage,
    ConfiguracoesPage,
    ProtocolosPage,
    AtenderSenhaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    ProtocolosPage,
    AtenderSenhaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
