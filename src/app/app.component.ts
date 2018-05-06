import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { GastosPage } from '../pages/gastos/gastos';
import { PerfilPage } from '../pages/perfil/perfil';
import { ProtocolosPage } from '../pages/protocolos/protocolos';

<<<<<<< HEAD
import { fbConfig } from './firebase_config/firebase_config';
import firebase from 'firebase';
=======
>>>>>>> e7d5069cf46faebe09699ec26052871d224fb6c4

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {

    this.initializeApp();

    firebase.initializeApp(fbConfig);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'home' },
      { title: 'Protocolos', component: ProtocolosPage, icon: 'alarm' },
      { title: 'Gastos', component: GastosPage, icon: 'analytics' },
      { title: 'Perfil', component: PerfilPage, icon: 'person' },
      { title: 'Login', component: LoginPage, icon: 'swap' },
      { title: 'Registrar', component: RegistrarPage, icon: 'trophy' },
      { title: 'Configurações', component: ConfiguracoesPage, icon: 'settings' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
