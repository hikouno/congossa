import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

	firstname: string = "Jacques"; 
	familyname: string = "Dujardin";
	email: string;
	phone: string = "0678954512";
	formation : string = "PSMSC Master - Performance in Software, Media and Scientific";
	skills : string = "Organisé, Cultivé, Interessant, Handsome"
	description : string = "Looking for an internship in computer science.";
	
  constructor(public navCtrl: NavController) {
    //this.firstname = navParams.get("firstname");
    //document.getElementById("firstname");
    //this.username.value = this.firstname;
    
    //this.firstname.insertAdjacentHTML("Alexis");
  }
  


}
