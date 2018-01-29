import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

//pages
import { ProfilePage } from '../profile/profile';

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
	
	// Save button Action
	saveProfile() {
		var profileObject = {
		firstname: this.firstname,
		familyname: this.familyname,
		age: this.age,
		email: this.email,
		phone: this.phone,
		formation: this.formation,
		skills: this.skills,
		description: this.description}
		
	this.navCtrl.setRoot(ProfilePage, profileObject);
	}
	
	//Let the user see his card from his profile
	displayCard() {
	}
	
	


}
