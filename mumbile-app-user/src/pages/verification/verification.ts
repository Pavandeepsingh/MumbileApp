import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { AddcardPage } from '../addcard/addcard';

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage {

  constructor(public navCtrl: NavController) {

  }
  addcardPage(){
    this.navCtrl.push(AddcardPage);
    }

}
