import { NavController } from 'ionic-angular';
import { FarePage } from '../fare/fare';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import {} from '@types/googlemaps';

declare var google;

@Component({
  selector: 'page-acceptrider',
  templateUrl: 'acceptrider.html'
})

export class AcceptriderPage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	
	constructor(public navCtrl: NavController, public geolocation: Geolocation) {
		
	}
	
	farePage() {
		this.navCtrl.push(FarePage);
	}
	
	ionViewDidLoad() {
		let latLng = new google.maps.LatLng(20.5937, 78.9629);
		this.loadMap(latLng);
		
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
			zoom: 12,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}

}
