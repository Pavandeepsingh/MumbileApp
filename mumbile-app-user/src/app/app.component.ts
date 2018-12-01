import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

  import { HomePage } from '../pages/home/home';
  import { ListPage } from '../pages/list/list';
  //import { SplashPage } from '../pages/splash/splash';
  import { LoginPage } from '../pages/login/login';
  import { SettingsPage } from '../pages/settings/settings';
  import { HelpPage } from '../pages/help/help';
  import { ProfilePage } from '../pages/profile/profile';
  //import { SignupPage } from '../pages/signup/signup';
  //import { VerificationPage } from '../pages/verification/verification';
  //import { AddcardPage } from '../pages/addcard/addcard';
  import { ReferralcodePage } from '../pages/referralcode/referralcode';
  //import { LocationPage } from '../pages/location/location';
  //import { ChoosecabPage } from '../pages/choosecab/choosecab';
  //import { SchedulePage } from '../pages/schedule/schedule';
  //import { LocadingPage } from '../pages/locading/locading';
  //import { BookridePage } from '../pages/bookride/bookride';
  //import { RidefullinfoPage } from '../pages/ridefullinfo/ridefullinfo';
  //import { FareratePage } from '../pages/farerate/farerate';
  import { MytripsPage } from '../pages/mytrips/mytrips';
  import { ReferPage } from '../pages/refer/refer';
  

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  homePage() {
    this.nav.setRoot(HomePage);
  }
  mytripsPage() {
    this.nav.setRoot(MytripsPage);
  }
 settingsPage() {
    this.nav.setRoot(SettingsPage);
  }
  helpPage() {
    this.nav.setRoot(HelpPage);
  }
   referPage() {
    this.nav.setRoot(ReferPage);
  }
   loginPage() {
    this.nav.setRoot(LoginPage);
  }
  profilePage() {
    this.nav.setRoot(ProfilePage);
  }
  referralcodePage() {
    this.nav.setRoot(ReferralcodePage);
  }
}
