import { MobileRepairFee } from './../../models/mobileRepairFee';
import { MobileRepairFeesProvider } from './../../providers/mobiles-providers/mobileRepairFees.provider';
import { Mobile } from './../../models/mobile';
import { MobileService } from './../../services/mobile.service';
import { Brand } from './../../models/brand';
import { BrandAutoCompleteProvider } from './../../providers/brand-providers/brand.autocomplete.providers';
import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { MobilesAutoCompleteProvider } from '../../providers/mobiles-providers/mobiles.autocomplete.provider';
import {} from '@types/googlemaps';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-choosecab',
  templateUrl: 'choosecab.html'
})
export class ChoosecabPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
	map: any;

  brand: Brand;
  showMobileAutoSearch: boolean = false;
  showMobileRepairFees: boolean = false;
  IssueTypeList: MobileRepairFee[] = [];
  dummyMarker: any;

  mobile: Mobile;
  constructor(public navCtrl: NavController,
    public brandAutoCompleteDataProvider: BrandAutoCompleteProvider,
    public mobileAutoCompleteDataProvider: MobilesAutoCompleteProvider,
    public mobileRepairFeesProvider: MobileRepairFeesProvider,
    public mobileService: MobileService,
    public geolocation: Geolocation,
    private androidPermissions: AndroidPermissions
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

  ionViewDidLoad() {
		// let latLng = new google.maps.LatLng(20.5937, 78.9629);
    // this.loadMap(latLng);
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
    // this.dummyMarker = document.getElementById("centerMarkerImg");
    // this.dummyMarker.style.display = 'block';
		
		this.getAndPlotCurrentLocation();
	}
	
	private getAndPlotCurrentLocation() {
		this.geolocation.getCurrentPosition({enableHighAccuracy: true }).then((position) => {
      debugger;
			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			this.loadMap(latLng);
		}, (err) => {
			console.log(err);
		});
	}
	
	loadMap(latLng: google.maps.LatLng) {
		let mapOptions = {
			center: latLng,
			zoom: 18,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
  }
  
}
