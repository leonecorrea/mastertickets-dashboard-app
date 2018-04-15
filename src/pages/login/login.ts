import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { HomePage } from '../home/home';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public Email: string;
  public Password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public angularFireAuth: AngularFireAuth
    // private alertCtrl: AlertController
  ) {

  }
  backgroundImage = 'assets/imgs/background/background-1.jpg';

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      // const alert = this.alertCtrl.create({
      //   title: 'Logged in!',
      //   subTitle: 'Thanks for logging in.',
      //   buttons: ['Dismiss']
      // });
      // alert.present();

      //this.navCtrl.setRoot(HomePage);
    });

    loading.present();

    this.angularFireAuth.auth.signInWithEmailAndPassword(this.Email, this.Password).then(function(AuthReturn){
      console.log(AuthReturn);
    }).catch(function(error){
      console.log(error);
    });

  }

  goToSignup() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      // const alert = this.alertCtrl.create({
      //   title: 'Logged in!',
      //   subTitle: 'Thanks for logging in.',
      //   buttons: ['Dismiss']
      // });
      // alert.present();

      this.navCtrl.push(RegistrarPage);
    });

    loading.present();
    
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }

}
