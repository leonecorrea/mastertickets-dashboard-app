import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    public navCtrl: NavController, public navParams: NavParams,
    private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth
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
      protocolos: []
    }

    this.afAuth.auth.currentUser.updateProfile({
      displayName: this.nome_cartorio,
      photoURL: ''
    });

    this.afDatabase.list(`contas/`).set(this.accountParams.uid, cartorio)
      .then(() => {
        this.afDatabase.list(`cartorios/`).set(this.accountParams.uid, cartorio);
      });
  }

}
