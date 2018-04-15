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

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyA3okSt79NEJ6bjA9_8K958u1I90rXaJmE",
  authDomain: "mastertickets-4df61.firebaseapp.com",
  databaseURL: "https://mastertickets-4df61.firebaseio.com",
  projectId: "mastertickets-4df61",
  storageBucket: "mastertickets-4df61.appspot.com",
  messagingSenderId: "613727395354"
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
    ProtocolosPage
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
    ProtocolosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
