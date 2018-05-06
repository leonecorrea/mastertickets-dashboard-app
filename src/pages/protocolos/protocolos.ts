import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProtocolosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-protocolos',
  templateUrl: 'protocolos.html',
})
export class ProtocolosPage {
  protocolos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.protocolos = 
  }  

}
