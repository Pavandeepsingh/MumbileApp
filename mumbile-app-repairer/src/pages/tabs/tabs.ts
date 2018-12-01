import { Component } from '@angular/core';

import { EarningsPage } from '../earnings/earnings';
import { RatingsPage } from '../ratings/ratings';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = RatingsPage;
  tab3Root = EarningsPage;
  tab4Root = ProfilePage;
  constructor() {
  }
}
