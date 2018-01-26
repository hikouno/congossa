import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-editProfile',
  templateUrl: 'editProfile.html'
})
export class EditProfilePage {

	firstname: string; 
	familyname: string;
	age: string;
	email: string;
	phone: string;
	formation : string;
	skills : string;
	description : string;

	constructor(public navCtrl: NavController, private navParams: NavParams) {
		this.firstname = navParams.get('firstname');
		this.familyname = navParams.get('familyname');
		this.age = navParams.get('age');
		this.email = navParams.get('email');
		this.phone = navParams.get('phone');
		this.formation = navParams.get('formation');
		this.skills = navParams.get('skills');
		this.description = navParams.get('description');
	}
	
	


}
