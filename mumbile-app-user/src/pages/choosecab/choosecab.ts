import { MobileRepairFee } from './../../models/mobileRepairFee';
import { MobileRepairFeesProvider } from './../../providers/mobiles-providers/mobileRepairFees.provider';
import { Mobile } from './../../models/mobile';
import { MobileService } from './../../services/mobile.service';
import { Brand } from './../../models/brand';
import { BrandAutoCompleteProvider } from './../../providers/brand-providers/brand.autocomplete.providers';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { MobilesAutoCompleteProvider } from '../../providers/mobiles-providers/mobiles.autocomplete.provider';


@Component({
  selector: 'page-choosecab',
  templateUrl: 'choosecab.html'
})
export class ChoosecabPage implements OnInit {
  brand: Brand;
  showMobileAutoSearch: boolean = false;
  showMobileRepairFees: boolean = false;
  IssueTypeList: MobileRepairFee[] = [];

  mobile: Mobile;
  constructor(public navCtrl: NavController,
    public brandAutoCompleteDataProvider: BrandAutoCompleteProvider,
    public mobileAutoCompleteDataProvider: MobilesAutoCompleteProvider,
    public mobileRepairFeesProvider: MobileRepairFeesProvider,
    public mobileService: MobileService,
  ) { }

  schedulePage() {
    this.navCtrl.push(SchedulePage);
  }

  ngOnInit() {
    debugger;
    this.mobileRepairFeesProvider.MobileRepairFees = this.mobileService.getMockDataForRepairFee();
  }

  onSelectMobileBrand() {
    debugger;
    this.mobileService.getMobiles(this.brand.BrandId).subscribe(mobiles => {
      this.mobileAutoCompleteDataProvider.Mobiles = mobiles;
      this.showMobileAutoSearch = this.mobileAutoCompleteDataProvider.Mobiles.length > 0;
    })
  }

  onSelectMobile() {
    this.mobileService.getMobileRepairFees(this.mobile.MobileId).subscribe(response => {
      this.mobileRepairFeesProvider.MobileRepairFees = response;
      this.showMobileRepairFees = response.length > 0
    })
  }

  onSelectIssueType(issue) {
    issue.IsActive = !issue.IsActive;
    if(issue.IsActive)
    {
      this.IssueTypeList.push(issue);
    }
    else{
    }
  }
}
