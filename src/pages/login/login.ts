import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { HomePage } from '../home/home';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public Email: string;
  public Password: string;
  public camposVazios: string = "";

  public totalReconhecimentoFirma : Observable<any[]>;
  public senhasReconhecimentoFirma: any = { Aberto: [], EmAtendimento: [] };
  public senhasReconhecimentoFirmaPreferencial: any = { Aberto: [], EmAtendimento: [] };

  public totalEscritura : Observable<any[]>;
  public senhasEscritura: any = { Aberto: [], EmAtendimento: [] };
  public senhasEscrituraPreferencial: any = { Aberto: [], EmAtendimento: [] };

  public totalProcuracao : Observable<any[]>;
  public senhasProcuracao: any = { Aberto: [], EmAtendimento: [] };
  public senhasProcuracaoPreferencial: any = { Aberto: [], EmAtendimento: [] };

  public totalRegistroCivil : Observable<any[]>;
  public senhasRegistroCivil: any = { Aberto: [], EmAtendimento: [] };
  public senhasRegistroCivilPreferencial: any = { Aberto: [], EmAtendimento: [] };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public angularFireAuth: AngularFireAuth,
    public database:AngularFireDatabase
    // private alertCtrl: AlertController
  ) {
    this.totalReconhecimentoFirma = this.database.list('/reconhecimentoFirma', ref => ref.orderByChild('id')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    });


    this.totalReconhecimentoFirma.forEach(item => {

      for(let i = 0; i < item.length; i++){
        if(item[i].typeTicket == "Preferencial"){
          if(item[i].status == "Aberto"){
            this.senhasReconhecimentoFirmaPreferencial.Aberto[this.senhasReconhecimentoFirmaPreferencial.Aberto.length] = item[i];
          } else if(item[i].status == "Em Atendimento"){
            this.senhasReconhecimentoFirmaPreferencial.EmAtendimento[this.senhasReconhecimentoFirmaPreferencial.EmAtendimento.length] = item[i];
          }
          
        } else if(item[i].typeTicket == "Normal"){
          if(item[i].status == "Aberto"){
            this.senhasReconhecimentoFirma.Aberto[this.senhasReconhecimentoFirma.Aberto.length] = item[i];
          } else if(item[i].status == "Em Atendimento"){
            this.senhasReconhecimentoFirma.EmAtendimento[this.senhasReconhecimentoFirma.EmAtendimento.length] = item[i];
          }
        }
      }
      console.log("Reconhecimento de Firma");
      console.log(this.senhasReconhecimentoFirma);
      console.log(this.senhasReconhecimentoFirmaPreferencial);
    });

    this.totalEscritura = this.database.list('/escritura', ref => ref.orderByChild('id')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    });
    
    this.totalEscritura.forEach(item => {
      
      for(let i = 0; i < item.length; i++){
        if(item[i].typeTicket == "Preferencial"){
          if(item[i].status == "Aberto"){
            this.senhasEscrituraPreferencial.Aberto[this.senhasEscrituraPreferencial.Aberto.length] = item[i];
          } else if(item[i].status == "Em Atendimento"){
            this.senhasEscrituraPreferencial.EmAtendimento.push(item[i]);
            this.senhasEscrituraPreferencial.EmAtendimento[this.senhasEscrituraPreferencial.EmAtendimento.length] = item[i];
          }
          
        } else if(item[i].typeTicket == "Normal"){
          if(item[i].status == "Aberto"){
            this.senhasEscritura.Aberto[this.senhasEscritura.Aberto.length] = item[i];
          } else if(item[i].status == "Em Atendimento"){
            this.senhasEscritura.EmAtendimento[this.senhasEscritura.EmAtendimento.length] = item[i];
          }
        }
      }
      console.log("Escritura");
      console.log(this.senhasEscritura);
      console.log(this.senhasEscrituraPreferencial);
    });

    this.totalProcuracao = this.database.list('/procuracao', ref => ref.orderByChild('id')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    });

    this.totalProcuracao.forEach(item => {
      for(let i = 0; i < item.length; i++){
        if(item[i].typeTicket == "Preferencial"){
          if(item[i].status == "Aberto"){
            this.senhasProcuracaoPreferencial.Aberto[this.senhasProcuracaoPreferencial.Aberto.length] = item[i];
          } else if(item[i].status == "Em Atendimento"){
            this.senhasProcuracaoPreferencial.EmAtendimento[this.senhasProcuracaoPreferencial.EmAtendimento.length] = item[i];
          }
          
        } else if(item[i].typeTicket == "Normal"){
          if(item[i].status == "Aberto"){
            this.senhasProcuracao.Aberto[this.senhasProcuracao.Aberto.length] = item[i];
          } else if(item[i].status == "Em Atendimento"){
            this.senhasProcuracao.EmAtendimento[this.senhasProcuracao.EmAtendimento.length] = item[i];
          }
        }
      }
      console.log("Procuração");
      console.log(this.senhasProcuracao);
      console.log(this.senhasProcuracaoPreferencial);
    });

    this.totalRegistroCivil = this.database.list('/registroCivil', ref => ref.orderByChild('id')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    });
    
    this.totalRegistroCivil.forEach(item => {
      for(let i = 0; i < item.length; i++){
        if(item[i].typeTicket == "Preferencial"){
          if(item[i].status == "Aberto"){
            this.senhasRegistroCivilPreferencial.Aberto[this.senhasRegistroCivilPreferencial.Aberto.length] = item[i];
          } else if(item[i].status == "Em Atendimento"){
            this.senhasRegistroCivilPreferencial.EmAtendimento[this.senhasRegistroCivilPreferencial.EmAtendimento.length] = item[i];
          }
          
        } else if(item[i].typeTicket == "Normal"){
          if(item[i].status == "Aberto"){
            this.senhasRegistroCivil.Aberto[this.senhasRegistroCivil.Aberto.length] = item[i];
          } else if(item[i].status == "Em Atendimento"){
            this.senhasRegistroCivil.EmAtendimento[this.senhasRegistroCivil.EmAtendimento.length] = item[i];
          }
        }
      }
      console.log("Registro Civil");
      console.log(this.senhasRegistroCivil);
      console.log(this.senhasRegistroCivilPreferencial);
    });
    this.atenderPreferencial("ReconhecimentoFirma");
  }
  backgroundImage = 'assets/imgs/background/background-1.jpg';

  atenderPreferencial(tipoSenha){
    let senhas: any = [];
    
    switch(tipoSenha){
      case "Escritura":
        senhas.push(this.senhasEscrituraPreferencial.Aberto);
        break;
      case "Procuracao":
        senhas.push(this.senhasProcuracaoPreferencial.Aberto);
        break;
      case "ReconhecimentoFirma":
        senhas.push(this.senhasReconhecimentoFirma.Aberto);
        break;
      case "RegistroCivil":
        senhas.push(this.senhasRegistroCivilPreferencial.Aberto);
        break;
    }

    console.log(senhas);
  };

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });
    let _email = this.Email;
    let _password = this.Password;
    let _camposVazios = this.camposVazios;


    loading.onDidDismiss(() => {

      if(_email == "" || _email == undefined){
        _camposVazios += "Preencha o campo Email\n";
      }
       if(_password == "" || _password == undefined){
        _camposVazios += "Preencha o campo Senha";
      }

      if(_camposVazios == ""){
        this.angularFireAuth.auth.signInWithEmailAndPassword(this.Email, this.Password).then(data => {
          this.navCtrl.setRoot(HomePage);
        }).catch(error => {
          
          var errorCode = error.code;
          var errorMessage = error.message;
  
          if(errorMessage == "auth/invalid-email"){
            alert("Email ou senha Incorretos");
          }else if(errorMessage == "auth/wrong-password"){
            alert("Email ou senha Incorretos");
          }else if(errorMessage == "auth/user-not-found"){
            alert("Usuário não Cadastrado");
          }else if(errorMessage == "The email address is badly formatted."){
            alert("Insira um Email válido");
          }else{
            alert("Usuário ou senha inválidos");
          }
  
        });  
      } else {
        alert(_camposVazios);
      }

    });

    loading.present();

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
