import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  public Email: string;
  public Password: string;
  public ThisPage = this;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public angularFireAuth: AngularFireAuth
) {

  }

  backgroundImage = 'assets/imgs/background/background-1.jpg';

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
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
      this.angularFireAuth.auth.createUserWithEmailAndPassword(this.Email, this.Password).then(function(){
        alert("Usuario Cadastrado com sucesso");
        //NavController.prototype.push(LoginPage)
      }).catch(function(error){
        console.log(error);
      });
      this.navCtrl.push(LoginPage);
    });

    loading.present();
  }

}
