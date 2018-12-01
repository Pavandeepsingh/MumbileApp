import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ChoosecabPage } from '../choosecab/choosecab';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import {} from '@types/googlemaps';
 
declare var google;

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})

export class LocationPage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	
	constructor(public navCtrl: NavController, public geolocation: Geolocation, private androidPermissions: AndroidPermissions) {
		
	}
	
	ionViewDidLoad() {
		let latLng = new google.maps.LatLng(20.5937, 78.9629);
		this.loadMap(latLng);
		
		this.getAndPlotCurrentLocation();
	}
	
	private getAndPlotCurrentLocation() {
		this.geolocation.getCurrentPosition().then((position) => {
			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			this.loadMap(latLng);
		}, (err) => {
			console.log(err);
		});
	}
	
	loadMap(latLng: google.maps.LatLng) {
		let mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}
	
	choosecabPage() {
		this.navCtrl.push(ChoosecabPage);
	}

}
