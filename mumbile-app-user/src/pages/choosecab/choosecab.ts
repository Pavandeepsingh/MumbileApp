import { BrandAutoCompleteProvider } from './../../providers/brand-providers/brand.autocomplete.providers';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SchedulePage } from '../schedule/schedule';
//import { MobilesProvider } from '../../providers/mobiles-providers/mobiles.provider';


@Component({
  selector: 'page-choosecab',
  templateUrl: 'choosecab.html'
})
export class ChoosecabPage {
  model: string = "";
  isSearch: boolean = false;
  constructor(public navCtrl: NavController, public brandAutoCompleteDataProvider: BrandAutoCompleteProvider
  ) { }

  schedulePage() {
    this.navCtrl.push(SchedulePage);
  }

  getMobiles() {
    //cALL API TO GET Mobile list from brand Id
    if (this.model === '')
      this.isSearch = false;
    else
      this.isSearch = true;
  }
}
