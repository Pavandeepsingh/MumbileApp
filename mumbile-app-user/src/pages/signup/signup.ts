import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VerificationPage } from '../verification/verification';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
  verificationPage(){
    this.navCtrl.push(VerificationPage);
    }
loginPage(){
    this.navCtrl.push(LoginPage);
    }

}
