import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

//pages
import { EditProfilePage } from '../editProfile/editProfile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	
	// online mode enable or not
	onlineMode: boolean = false;
	
	firstname: string; 
	familyname: string;
	age: string;
	email: string;
	phone: string;
	formation : string;
	skills : string;
	description : string;
	
	
  constructor(public navCtrl: NavController, private navParams: NavParams) {
	  this.loadData();
  }
  
	// Load the data and display them in the view
	// Loading from local or from remote depending
	// if online mode is enable or not.
	loadData() {
		// Local mode
		if (!this.onlineMode) {
			this.firstname = this.navParams.get('firstname'); 
			this.familyname = this.navParams.get('familyname');
			this.age = this.navParams.get('age');
			this.email = this.navParams.get('email');
			this.phone = this.navParams.get('phone');
			this.formation = this.navParams.get('formation');
			this.skills = this.navParams.get('skills');
			this.description = this.navParams.get('description');
		} else {
			// Remote mode
			// http request
		}
	}

	goToEditProfile() {
		if (!this.onlineMode) {
			var profileObject = {
				firstname: this.firstname,
				familyname: this.familyname,
				age: this.age,
				email: this.email,
				phone: this.phone,
				formation: this.formation,
				skills: this.skills,
				description: this.description}
				
			this.navCtrl.push(EditProfilePage, profileObject);
		} else {
			// http request
		}
	}
	
	//Let the user see his card from his profile
	displayCard() {
		
	}

}
