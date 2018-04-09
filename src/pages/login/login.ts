import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
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
      this.navCtrl.setRoot(HomePage);
    });

    loading.present();

  }

  goToSignup() {
    this.navCtrl.push(RegistrarPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }

}
