import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

//pages
import { EditProfilePage } from '../editProfile/editProfile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';

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
	skills : string;
	description : string;

  diplomes: Array<{title:string, diplome:string}>;
  formations: Array<{title:string, formation:string}>;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
	  this.loadData();
    this.diplomes= [];
    this.formations= [];
  }


  addDiplome(){
    if (this.diplomes.length == 0){
      this.diplomes.push({title: "newDiplome", diplome: ""});
      console.log(this.diplomes);
      console.log(this.diplomes.length);
    }

    if (this.diplomes[this.diplomes.length - 1].diplome != ""){
      //this.diplomes[this.diplomes.length - 1].diplome = this.tmpDiplome.slice(0);;
      this.diplomes.push({title: "newDiplome1", diplome:""});
      console.log(this.diplomes);
    }

    console.log(this.diplomes);
  }

  addFormation(){
    if (this.formations.length == 0){
      this.formations.push({title: "newFormation", formation: ""});
      console.log(this.formations);
      console.log(this.formations.length);
    }

    if (this.formations[this.formations.length - 1].formation != ""){
      this.formations.push({title: "newFormation1", formation:""});
      console.log(this.formations);
    }

    console.log(this.formations);
  }


  removeDiplome(i){
    this.diplomes.splice(i, 1);
  }

  removeFormation(i){
    this.formations.splice(i, 1);
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
			this.formations = this.navParams.get('formations');
      this.diplomes = this.navParams.get('diplomes');
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
				formations: this.formations,
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

  clone(obj){
    try{
        var copy = JSON.parse(JSON.stringify(obj));
    } catch(ex){
        alert("Vous utilisez un vieux navigateur bien pourri, qui n'est pas pris en charge par ce site");
    }
    return copy;
    }
    
    // Go to profilePage
  openProfilPage(){
    this.navCtrl.setRoot(ProfilePage);
  }

	// Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.setRoot(ListeConversationsPage);
  }

}
