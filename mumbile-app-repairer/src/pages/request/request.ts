import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcceptPage } from '../accept/accept';

@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})

export class RequestPage {
	
	constructor(public navCtrl: NavController) {
		
	}
	
	acceptPage() {
		this.navCtrl.push(AcceptPage);
	}

}
