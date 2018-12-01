import { NavController } from 'ionic-angular';
import { RequestPage } from '../request/request';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import {} from '@types/googlemaps';
import { AcceptPage } from '../accept/accept';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	
	checked: boolean = false;
	
	constructor(public navCtrl: NavController, public geolocation: Geolocation) {
		
	}
	
	ionViewDidLoad() {
		let latLng = new google.maps.LatLng(20.5937, 78.9629);
		this.loadMap(latLng);
		
		/*
		this.geolocation.getCurrentPosition().then((position) => {
			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			this.loadMap(latLng);
		}, (err) => {
			console.log(err);
		});
		*/
	}
	
	loadMap(latLng: google.maps.LatLng) {
		let mapOptions = {
			center: latLng,
			zoom: 4,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}
	
	acceptPage() {
		this.navCtrl.push(AcceptPage);
    }
	
	onlineOfflineToggle() {
		console.log('checked ' + this.checked);
	}
	
	declinePage() {
		//this.navCtrl.push(AcceptPage);
	}

}
