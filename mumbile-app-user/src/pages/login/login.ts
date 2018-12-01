import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider} from "../../providers/login/login";


import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  users: any;
  constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {
    this.getUsers();
  }
  
  homePage(){
    this.navCtrl.push(HomePage);
    }
    signupPage(){
    this.navCtrl.push(SignupPage);
    }

    getUsers() {
      this.loginProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
    }

} 