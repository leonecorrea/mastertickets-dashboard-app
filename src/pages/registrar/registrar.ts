import { RegistrarProvider } from './../../providers/registrar/registrar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  // backgroundImage = 'assets/imgs/background/background-1.jpg';

  email: string;
  senha: string;
  senha2: string;
  nome: string;
  concordo: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public alertCtrl: AlertController, private toastCtrl: ToastController,
    public angularFireAuth: AngularFireAuth, private registrarProvider: RegistrarProvider
  ) {

  }

  goToLogin() {
    this.navCtrl.push('LoginPage');
  }

  registrar() {
    let loading = this.loadingCtrl.create();
    loading.present();

    setTimeout(() => {
      this.registrarProvider.registrar(this.email, this.senha)

        .then((retorn) => {
          loading.dismiss();
          this.navCtrl.push('SetupPage', { accountParams: retorn });
        })
        .catch((error) => {
          let toast = this.toastCtrl.create({ message: error.message, position: 'button', duration: 5000 });
          toast.present();
          loading.dismiss();
        });
    }, 500);

  }

}
