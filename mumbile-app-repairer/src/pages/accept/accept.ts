import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import {} from '@types/googlemaps';

declare var google;
import { ModalController, NavController  } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { CancelridePage } from '../cancelride/cancelride';

@Component({
  selector: 'page-accept',
  templateUrl: 'accept.html'
})

export class AcceptPage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	
	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public geolocation: Geolocation) {
		
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
	
	acceptriderPage() {
		this.navCtrl.push(LocationPage);
    }
	
	showInfo() {
		let modal = this.modalCtrl.create(CancelridePage);
		modal.present();
	}

}
