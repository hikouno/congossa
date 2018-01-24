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
	description : string = "Looking for an internship in computer science. Quanta autem vis amicitiae sit, ex hoc intellegi \
	maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta \
	in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.";
	
  constructor(public navCtrl: NavController) {
    //this.firstname = navParams.get("firstname");
    //document.getElementById("firstname");
    //this.username.value = this.firstname;
    
    //this.firstname.insertAdjacentHTML("Alexis");
  }
  


}
