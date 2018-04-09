import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProtocolosDetalhePage } from './protocolos-detalhe';

@NgModule({
  declarations: [
    ProtocolosDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ProtocolosDetalhePage),
  ],
})
export class ProtocolosDetalhePageModule {}
