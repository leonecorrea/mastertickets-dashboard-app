import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProtocolosPage } from './protocolos';

@NgModule({
  declarations: [
    ProtocolosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProtocolosPage),
  ],
})
export class ProtocolosPageModule {}
