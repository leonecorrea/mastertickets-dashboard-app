import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {

  accountParams: any;
  nome_cartorio: string;
  num_funcionarios: string;
  endereco = { cep: '', numero: '', logradouro: '', complemento: '', bairro: '', cidade: '', estado: '', pais: '' };

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,
    private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, private loadingCtrl: LoadingController
  ) {
    if (this.navParams.get('accountParams')) {
      this.accountParams = this.navParams.get('accountParams');
    } else {
      // this.navCtrl.setRoot('LoginPage');
    }
  }

  next() {
    let cartorio = {
      nome: this.nome_cartorio,
      num_funcionarios: this.num_funcionarios,
      email: this.accountParams.email,
      cep: this.endereco
    }

    this.afAuth.auth.currentUser.updateProfile({
      displayName: this.nome_cartorio,
      photoURL: ''
    });

    this.afDatabase.list(`cartorios/`).set(this.accountParams.uid, cartorio)
      .then(() => {
        let loading = this.loadingCtrl.create();
        setTimeout(() => {
          loading.present();
        }, 3000);
        loading.dismiss();
        this.navCtrl.setRoot('DashboardPage');
      })
      .catch((err) => {
        this.toastCtrl.create({ message: err, position: 'button', duration: 5000 }).present();
      });
  }

}
