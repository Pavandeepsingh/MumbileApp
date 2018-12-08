import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProvidersAutoCompleteProvider} from '../../providers/providers-auto-complete/providers-auto-complete';
import { SchedulePage } from '../schedule/schedule';
import {ProvidersMobilesProvider} from '../../providers/providers-mobiles/providers-mobiles'

@Component({
  selector: 'page-choosecab',
  templateUrl: 'choosecab.html'
})
export class ChoosecabPage {
  model:string ="";
  isSearch:boolean=false;
  constructor(public navCtrl: NavController,private searchService:ProvidersAutoCompleteProvider,
    private mobileService:ProvidersMobilesProvider
    ) { }
  
  schedulePage(){
    this.navCtrl.push(SchedulePage);
    }
    getMobiles(){
      //cALL API TO GET Mobile list from brand Id
      if(this.model==='')
      this.isSearch=false;
      else
      this.isSearch=true;
    }
}
