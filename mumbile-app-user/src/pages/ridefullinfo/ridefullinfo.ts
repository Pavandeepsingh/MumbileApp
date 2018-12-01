import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FareratePage } from '../farerate/farerate';

@Component({
  selector: 'page-ridefullinfo',
  templateUrl: 'ridefullinfo.html'
})
export class RidefullinfoPage {

  constructor(public navCtrl: NavController) {

  }
   fareratePage(){
    this.navCtrl.push(FareratePage);
    }

}
