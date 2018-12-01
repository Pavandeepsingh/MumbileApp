import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';
//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
//import { OfflinePage } from '../pages/offline/offline';
//import { OnlinePage } from '../pages/online/online';
//import { RequestPage } from '../pages/request/request';
//import { AcceptriderPage } from '../pages/acceptrider/acceptrider';
//import { AcceptPage } from '../pages/accept/accept';
//import { RoderPage } from '../pages/roder/roder';
//import { CancelridePage } from '../pages/cancelride/cancelride';
//import { NevigatePage } from '../pages/nevigate/nevigate';
//import { LocationPage } from '../pages/location/location';
//import { FarePage } from '../pages/fare/fare';
//import { RatingsPage } from '../pages/ratings/ratings';
//import { EarningsPage } from '../pages/earnings/earnings';
//import { ProfilePage } from '../pages/profile/profile';
//import { HelpPage } from '../pages/help/help';
//import { DocumentsPage } from '../pages/documents/documents';
//import { SettingsPage } from '../pages/settings/settings';
//import { MytripsPage } from '../pages/mytrips/mytrips';
//import { SharePage } from '../pages/share/share';
//import { MyprofilePage } from '../pages/myprofile/myprofile';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
