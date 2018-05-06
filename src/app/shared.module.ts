import { HttpModule } from '@angular/http';

// Modules
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

// Pipes

// Components

@NgModule({
  imports: [
    HttpModule,
    IonicModule,
  ],
  declarations: [
  ],
  exports: [
    HttpModule,
  ]
})

export class SharedModules { }