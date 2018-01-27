import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

//pages
import { EditProfilePage } from '../editProfile/editProfile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	
	// online mode enable or not
	onlineMode: boolean;
	
	firstname: string; 
	familyname: string;
	age: string;
	email: string;
	phone: string;
	formation : string;
	skills : string;
	description : string;
	
	
  constructor(public navCtrl: NavController) {
	  this.loadData();
	  console.log("constructor test");
  }
  
// Load the data and display them in the view
// Loading from local or from remote depending
// if online mode is enable or not.
loadData() {
	// Local mode
	if (!this.onlineMode) {
		this.firstname = "Jacques"; 
		this.familyname = "Dujardin";
		this.age = "22";
		this.email = "eLiTeZnipErDu31@msn.fr";
		this.phone = "0678954512";
		this.formation = "PSMSC Master - Performance in Software, Media and Scientific";
		this.skills = "Organisé, Cultivé, Interessant, Handsome";
		this.description = "Looking for an internship in computer science.";
	} else {
		// Remote mode
	}
}

goToEditProfile() {
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
}

}
