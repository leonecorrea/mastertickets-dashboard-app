import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

/**
 * Generated class for the AtenderSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atender-senha',
  templateUrl: 'atender-senha.html',
})
export class AtenderSenhaPage {
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

  public AtendimentoAtual: any;
  public EmAtendimento: boolean;
  public CaixaLivre: boolean = true;
  public tipoSenha: string;
  public Preferencial: boolean;

  public today: string;

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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtenderSenhaPage');
  }

  AtenderSenha() {
    let senhaAtendida: any;
    let idSenhaAtendida: any;
    let itens: Observable<any>;
    let caminhoDB;
    let tipoTicket;

    if(this.tipoSenha != undefined){
      if(this.Preferencial == true){
        tipoTicket = "Preferencial";
      } else {
        tipoTicket = "Normal";
      }
  
      switch(this.tipoSenha){
        case "RDF":
            caminhoDB = "reconhecimentoFirma/";
            itens = this.protocolosRDF;
          break;
  
        case "ESC":
            caminhoDB = "escritura/";
            itens = this.protocolosESC;
          break;
  
        case "RGC":
            caminhoDB = "registroCivil/";
            itens = this.protocolosRGC;
          break;
  
        case "PRC":
            caminhoDB = "procuracao/";
            itens = this.protocolosPRC;
          break;
      }
  
      let itemFiltrado;
      
      itens.take(1).forEach(item => {
        itemFiltrado = item.filter(i => i.typeTicket === tipoTicket);
        
        if(itemFiltrado[0] != null && itemFiltrado[0].typeTicket == tipoTicket){
          senhaAtendida = itemFiltrado[0];
          idSenhaAtendida = itemFiltrado[0].key;
          senhaAtendida.status = "Em Atendimento";
          console.log(this.db.object(caminhoDB + idSenhaAtendida));
          this.db.object(caminhoDB + idSenhaAtendida).update(senhaAtendida);
          this.CaixaLivre = false;
          this.EmAtendimento = true;
          this.AtendimentoAtual = senhaAtendida;
        } else {
          alert("Nao há senhas deste tipo em aberto para atendimento");
          return "Nao há senhas deste tipo em aberto para atendimento";
        }
      });
    } else {
      alert("Escolha o tipo de Senha");
    }
    
  }

  FinalizarAtendimento(){
    let senhaAtendida: any;
    let idSenhaAtendida: any;
    let itens: Observable<any>;
    let caminhoDB;
    let tipoTicket;


    switch(this.tipoSenha){
      case "RDF": 
          itens = this.protocolosRDF;
          caminhoDB = "reconhecimentoFirma/";
        break;

      case "ESC":
          itens = this.protocolosESC;
          caminhoDB = "escritura/"
        break;

      case "RGC":
          itens = this.protocolosRGC;
          caminhoDB = "registroCivil/";
        break;

      case "PRC":
          itens = this.protocolosPRC;
          caminhoDB = "procuracao/"
        break;
    }

    idSenhaAtendida = this.AtendimentoAtual.key;
    this.AtendimentoAtual.status = "Concluído";

    this.db.object(caminhoDB + idSenhaAtendida).update(this.AtendimentoAtual);
    alert("Atendimento ticket " + this.AtendimentoAtual.ticket + " Finalizado!");
    this.CaixaLivre = true;
    this.EmAtendimento = false;
  }

}
