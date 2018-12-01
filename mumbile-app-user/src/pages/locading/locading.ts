import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-locading',
  templateUrl: 'locading.html'
})

export class LocadingPage {
	
	constructor(public navCtrl: NavController) {
		
	}
	
	/* ngAfterViewInit() {
		this.setChooseTimeout();
	}
	
	private setChooseTimeout() {
		setTimeout(function () { this.navCtrl.push(ChoosecabPage); }, 1000);
	} */
	
}
