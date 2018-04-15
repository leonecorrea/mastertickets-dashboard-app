import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { HomePage } from '../home/home';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public Email: string;
  public Password: string;
  public camposVazios: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public angularFireAuth: AngularFireAuth
    // private alertCtrl: AlertController
  ) {

  }
  backgroundImage = 'assets/imgs/background/background-1.jpg';

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
