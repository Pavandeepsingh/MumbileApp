import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SchedulePage } from '../schedule/schedule';
@Component({
  selector: 'page-choosecab',
  templateUrl: 'choosecab.html'
})
export class ChoosecabPage {

  constructor(public navCtrl: NavController) {

  }
  schedulePage(){
    this.navCtrl.push(SchedulePage);
    }

}
