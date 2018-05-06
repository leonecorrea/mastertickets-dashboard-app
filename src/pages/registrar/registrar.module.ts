import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarPage } from './registrar';
import { RegistrarProvider } from '../../providers/registrar/registrar';

@NgModule({
  declarations: [
    RegistrarPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarPage)
  ],
  providers: [
    RegistrarProvider
  ]
})
export class RegistrarPageModule {}
