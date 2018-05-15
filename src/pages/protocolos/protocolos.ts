import { Component } from '@angular/core';
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

  public today:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    

      
  }  

  ngOnInit(){

    let data = new Date();
    let ano = data.getFullYear().toString();
    let mes:any = data.getMonth() + 1;
    mes = mes.toString();

    if(mes.length == 1){
        mes = "0" + mes;
    }
    var dia = data.getDate().toString();
    if(dia.length == 1){
        dia = "0" + dia;
    }

    this.today = dia + "/" + mes + "/" + ano;
    
    this.protocolosRDF = this.db.list("/reconhecimentoFirma", ref => ref.orderByChild('status').equalTo('Aberto')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { key: snap.key }) ).filter(i => i.date == this.today)
    });

    this.protocolosESC = this.db.list("/escritura", ref => ref.orderByChild('status').equalTo('Aberto')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { key: snap.key }) ).filter(i => i.date == this.today)
    });

    this.protocolosRGC = this.db.list("/registroCivil", ref => ref.orderByChild('status').equalTo('Aberto')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { key: snap.key }) ).filter(i => i.date == this.today)
    });

    this.protocolosPRC = this.db.list("/procuracao", ref => ref.orderByChild('status').equalTo('Aberto')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { key: snap.key }) ).filter(i => i.date == this.today)
    });

    this.protocolosAtendimentoRDF = this.db.list("/reconhecimentoFirma", ref => ref.orderByChild('status').equalTo('Em Atendimento')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { key: snap.key }) ).filter(i => i.date == this.today)
    });
    this.protocolosAtendimentoESC = this.db.list("/escritura", ref => ref.orderByChild('status').equalTo('Em Atendimento')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { key: snap.key }) ).filter(i => i.date == this.today)
    });
    this.protocolosAtendimentoRGC = this.db.list("/registroCivil", ref => ref.orderByChild('status').equalTo('Em Atendimento')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { key: snap.key }) ).filter(i => i.date == this.today)
    });
    this.protocolosAtendimentoPRC = this.db.list("/procuracao", ref => ref.orderByChild('status').equalTo('Em Atendimento')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { key: snap.key }) ).filter(i => i.date == this.today)
    });
  }


}
