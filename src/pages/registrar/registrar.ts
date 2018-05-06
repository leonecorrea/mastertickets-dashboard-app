import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  backgroundImage = 'assets/imgs/background/background-1.jpg';

  email: string;
  senha: string;
  senha2: string;
  nome: string;
  url: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public angularFireAuth: AngularFireAuth
  ) {

  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  voltar() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      this.navCtrl.push(LoginPage);
    });

    loading.present();
  }


  registrar() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {



    });

    loading.present();
  }

}
