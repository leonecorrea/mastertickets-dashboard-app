import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

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
  //Reconhecimento de Firma
  public protocolosRDF: Observable<any[]>;
  public protocolosAtendimentoRDF: Observable<any[]>;
  //Escritura
  public protocolosESC: Observable<any[]>;
  public protocolosAtendimentoESC: Observable<any[]>;
  //Registro Civil
  public protocolosRGC: Observable<any[]>
  public protocolosAtendimentoRGC: Observable<any[]>;
  //Procuração
  public protocolosPRC: Observable<any[]>;
  public protocolosAtendimentoPRC: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    

      
  }  


}
