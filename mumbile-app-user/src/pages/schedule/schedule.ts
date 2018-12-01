import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { BookridePage } from '../bookride/bookride';
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  constructor(public navCtrl: NavController) {

  }
  bookridePage(){
    this.navCtrl.push(BookridePage);
    }

}
