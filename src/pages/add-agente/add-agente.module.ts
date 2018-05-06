import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAgentePage } from './add-agente';

@NgModule({
  declarations: [
    AddAgentePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAgentePage),
  ],
})
export class AddAgentePageModule {}
