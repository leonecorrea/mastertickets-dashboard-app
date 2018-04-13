import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TicketsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TicketsProvider Provider');
  }

}
