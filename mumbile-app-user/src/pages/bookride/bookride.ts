import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RidefullinfoPage } from '../ridefullinfo/ridefullinfo';

@Component({
  selector: 'page-bookride',
  templateUrl: 'bookride.html'
})
export class BookridePage {

  constructor(public navCtrl: NavController) {

  }
ridefullinfoPage(){
    this.navCtrl.push(RidefullinfoPage);
    }
}
