import { Component } from '@angular/core';
import {ModalController, NavController  } from 'ionic-angular';

import { HomePage } from '../home/home';

import { ReferralcodePage } from '../referralcode/referralcode';
@Component({
  selector: 'page-addcard',
  templateUrl: 'addcard.html'
})
export class AddcardPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
  homePage(){
    this.navCtrl.push(HomePage);
    }
    
       referralcodePage() {
    let modal = this.modalCtrl.create(ReferralcodePage);
    modal.present();
  }

}
