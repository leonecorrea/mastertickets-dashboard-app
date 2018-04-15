import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AlertController } from 'ionic-angular';

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

  public Email: string;
  public Password: string;
  public ConfirmarPassword: string;
  public camposVazios: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public angularFireAuth: AngularFireAuth
) {

  }

  backgroundImage = 'assets/imgs/background/background-1.jpg';

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  voltar() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      this.navCtrl.push(LoginPage);
    });

    loading.present();
  }


  registrar() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    let _email = this.Email;
    let _password = this.Password;
    let _confirmarPassword = this.ConfirmarPassword;
    let _camposVazios = this.camposVazios;

    loading.onDidDismiss(() => {
  
      if(_email == "" || _email == undefined){
        _camposVazios += "Preencha o campo Email\n";
      }
       if(_password == "" || _password == undefined){
        _camposVazios += "Preencha o campo Senha";
      }
      if(_password.length < 6){
        _camposVazios += "O Campo senha deve conter no mínimo 6 caracteres"
      }
       if(_password != _confirmarPassword) {
        _camposVazios += "O Campo senha e Confirmação de Senha devem conter o mesmo valor"
      }

      if(_camposVazios == ""){
        this.angularFireAuth.auth.createUserWithEmailAndPassword(this.Email, this.Password).then(data => {
          alert("Usuário Cadastrado com Sucesso!");
          this.navCtrl.setRoot(LoginPage);
        }).catch(error => {
          
          var errorCode = error.code;
          var errorMessage = error.message;
          if(errorMessage == "auth/invalid-email"){
           alert("Email Inválido");
          }else if(errorMessage == "The email address is badly formatted."){
   
           alert("Insira um Email válido");
   
          }else if(errorMessage == "Password should be at least 6 characters"){
   
           alert("A senha precisa de no mínimo 6 caracteres");
   
          }
  
        });
      } else {
        alert(_camposVazios);
      }

    });

    loading.present();
  }

}
