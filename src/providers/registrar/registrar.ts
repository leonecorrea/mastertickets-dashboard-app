import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class RegistrarProvider {

  constructor(private authProvider: AngularFireAuth) { }

  public registrar(login: string, senha: string){
    return this.authProvider.auth.createUserWithEmailAndPassword(login, senha);
  }

}
