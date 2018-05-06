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

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase) {
    if (this.navParams.get('accountParams')) {
      this.accountParams = this.navParams.get('accountParams');
    } else {
      this.navCtrl.setRoot('LoginPage');
    }
  }

  next() {
    let cartorio = {
      nome: this.nome_cartorio,
      num_funcionarios: this.num_funcionarios
    }
    this.afDatabase.object(`contas/${this.accountParams.uid}`).set(this.accountParams);
    this.afDatabase.object(`cartorios/${this.accountParams.uid}`).set(cartorio);
  }

}
