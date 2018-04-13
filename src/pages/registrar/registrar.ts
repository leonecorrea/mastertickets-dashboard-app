import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }
  backgroundImage = 'assets/imgs/background/background-2.jpg';

  registrar(){
    const loading = this.loadingCtrl.create({
      duration: 1000
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

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
