import { MobileRepairFeesProvider } from './../providers/mobiles-providers/mobileRepairFees.provider';
import { MobileService } from './../services/mobile.service';
import { MobilesAutoCompleteProvider } from './../providers/mobiles-providers/mobiles.autocomplete.provider';
import { BrandServices } from './../services/brand.service';
import { BrandAutoCompleteProvider } from './../providers/brand-providers/brand.autocomplete.providers';
import { URLConstants } from './../services/constants';
import { ConsoleLoggerService } from './../services/console-logger.service';
import { BaseService } from './../services/base.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from '../pages/signup/signup';
import { VerificationPage } from '../pages/verification/verification';
import { AddcardPage } from '../pages/addcard/addcard';
import { ReferralcodePage } from '../pages/referralcode/referralcode';
import { LocationPage } from '../pages/location/location';
import { ChoosecabPage } from '../pages/choosecab/choosecab';
import { SchedulePage } from '../pages/schedule/schedule';
import { LocadingPage } from '../pages/locading/locading';
import { BookridePage } from '../pages/bookride/bookride';
import { RidefullinfoPage } from '../pages/ridefullinfo/ridefullinfo';
import { FareratePage } from '../pages/farerate/farerate';
import { MytripsPage } from '../pages/mytrips/mytrips';
import { ReferPage } from '../pages/refer/refer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { LoginProvider } from '../providers/login/login';
import { HTTP } from '@ionic-native/http';
// ionic 2 auto search
import { AutoCompleteModule, } from 'ionic2-auto-complete';
import { HttpClientModule } from '@angular/common/http';
import { LoggerService } from '../services/logger.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SplashPage,
    LoginPage,
    SettingsPage,
    HelpPage,
    ProfilePage,
    SignupPage,
    VerificationPage,
    ReferralcodePage,
    LocationPage,
    ChoosecabPage,
    SchedulePage,
    LocadingPage,
    BookridePage,
    RidefullinfoPage,
    FareratePage,
    MytripsPage,
    ReferPage,
    AddcardPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AutoCompleteModule,
    HttpClientModule,
    // for auto search in choose page
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SplashPage,
    LoginPage,
    SettingsPage,
    HelpPage,
    ProfilePage,
    SignupPage,
    VerificationPage,
    ReferralcodePage,
    LocationPage,
    ChoosecabPage,
    SchedulePage,
    LocadingPage,
    BookridePage,
    RidefullinfoPage,
    FareratePage,
    MytripsPage,
    ReferPage,
    AddcardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AndroidPermissions,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    HTTP,
    LoggerService,
    URLConstants,
    ConsoleLoggerService,
    BaseService,
    MobilesAutoCompleteProvider,
    BrandAutoCompleteProvider,
    BrandServices,
    MobileService,
    MobileRepairFeesProvider
  ]
})
export class AppModule { }
