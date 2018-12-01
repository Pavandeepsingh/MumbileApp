import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AboutPage } from '../about/about';
import { HelpPage } from '../help/help';
import { DocumentsPage } from '../documents/documents';
import { SettingsPage } from '../settings/settings';
import { MytripsPage } from '../mytrips/mytrips';
import { SharePage } from '../share/share';
import { MyprofilePage } from '../myprofile/myprofile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }
    aboutPage(){
    this.navCtrl.push(AboutPage);
    }
    helpPage(){
    this.navCtrl.push(HelpPage);
    }
    documentsPage(){
    this.navCtrl.push(DocumentsPage);
    }
    settingsPage(){
    this.navCtrl.push(SettingsPage);
    }
    mytripsPage(){
    this.navCtrl.push(MytripsPage);
    }
    sharePage(){
    this.navCtrl.push(SharePage);
    }
    myprofilePage(){
    this.navCtrl.push(MyprofilePage);
    }

}
