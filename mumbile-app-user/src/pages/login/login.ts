import { Component } from '@angular/core';
import { NavController, TabHighlight } from 'ionic-angular';
import { LoginProvider} from "../../providers/login/login";
//import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ChoosecabPage } from '../choosecab/choosecab';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  users: any;
  constructor(public navCtrl: NavController,  public loginProvider: LoginProvider) {
  
  } 
  homePage(){
    //this.navCtrl.push(HomePage);
    this.navCtrl.push(ChoosecabPage);
    }
    signupPage(){
    this.navCtrl.push(SignupPage);
    }
} 