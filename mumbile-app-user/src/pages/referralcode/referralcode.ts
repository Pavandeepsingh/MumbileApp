import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


import { HomePage } from '../home/home';

@Component({
  selector: 'page-referralcode',
  templateUrl: 'referralcode.html'
})
export class ReferralcodePage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  homePage(){
    this.navCtrl.push(HomePage);
    }
    
     dismiss() {
    this.viewCtrl.dismiss();
  }
    
}
