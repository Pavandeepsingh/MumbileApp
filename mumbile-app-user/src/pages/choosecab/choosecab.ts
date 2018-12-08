import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProvidersAutoCompleteProvider} from '../../providers/providers-auto-complete/providers-auto-complete';
import { SchedulePage } from '../schedule/schedule';

@Component({
  selector: 'page-choosecab',
  templateUrl: 'choosecab.html'
})
export class ChoosecabPage {

  constructor(public navCtrl: NavController,public searchService:ProvidersAutoCompleteProvider) { }
  
  schedulePage(){
    this.navCtrl.push(SchedulePage);
    }

}
