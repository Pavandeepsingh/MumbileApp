import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mytrips',
  templateUrl: 'mytrips.html'
})
export class MytripsPage {
     tab: string = "past";
  constructor(public navCtrl: NavController) {

  }

}
