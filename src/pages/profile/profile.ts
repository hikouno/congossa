import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

//pages
import { EditProfilePage } from '../editProfile/editProfile';
import { ModalViewCardPage } from "../modal-view-card/modal-view-card";
import { ListeConversationsPage } from "../listeConversations/listeConversations";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

	// online mode enable or not
	onlineMode: boolean = false;

	firstname: string;
	familyname: string;
  date: string;
	age: number;
	email: string;
	phone: string;
	skills : string;
  tableSkills : any;
	shortDescription : string;
  photo : any;
  qualities: string;
  tableQualities: any;
  debutExperience: string;
  finExperience: string;

  diplomes: Array<{title:string, diplome:string}>;
  formations: Array<{title:string, formation:string}>;
  experiences: Array<{title:string, experience:string, dateDebut:string, dateFin:string}>;

  constructor(public navCtrl: NavController, private navParams: NavParams, public modalCtrl: ModalController) {
	  this.loadData();
    this.diplomes= [];
    this.formations= [];
    this.experiences= [];
  }


  addDiplome(){
    if (this.diplomes.length == 0){
      this.diplomes.push({title: "newDiplome", diplome: ""});
      console.log(this.diplomes);
      console.log(this.diplomes.length);
    }

    if (this.diplomes[this.diplomes.length - 1].diplome != ""){
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

  addExperience(){
    if (this.experiences.length == 0){
      this.experiences.push({title: "newExperience", experience: "", dateDebut: "", dateFin: ""});
      console.log(this.experiences);
      console.log(this.experiences.length);
    }

    if (this.experiences[this.experiences.length - 1].experience != ""){
      this.experiences.push({title: "newExperience1", experience:"", dateDebut: "", dateFin: ""});
      console.log(this.experiences);
    }

    console.log(this.experiences);
  }


  removeDiplome(i){
    this.diplomes.splice(i, 1);
  }

  removeFormation(i){
    this.formations.splice(i, 1);
  }

  removeExperience(i){
    this.experiences.splice(i, 1);
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
			this.shortDescription = this.navParams.get('shortDescription');
		} else {
			// Remote mode
			// http request
		}
	}

  displayCard(){
    if (!this.onlineMode) {
      this.calculateAge();
      this.organizeSkills();
      this.organizeQualities();
      let viewCardModal = this.modalCtrl.create(ModalViewCardPage, {firstname: this.firstname,
        familyname: this.familyname,
        age: this.age,
        shortDescription: this.shortDescription,
        photo: this.photo,
        tableSkills: this.tableSkills,
        tableQualities: this.tableQualities,
        formations: this.formations,
        diplomes: this.diplomes,
        experiences: this.experiences
      });
      viewCardModal.present();
		} else {
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
				shortDescription: this.shortDescription}

			this.navCtrl.push(EditProfilePage, {firstname: this.firstname,
        familyname: this.familyname,
        age: this.age,
        shortDescription: this.shortDescription,
        formations: this.formations,
        skills: this.skills});
		} else {
			// http request
		}
	}

  calculateAge(){
    var currentDate = new Date();

    var dd = currentDate.getDate();
    var mm = Number(currentDate.getMonth()+1); //January is 0!
    var yyyy = Number(currentDate.getFullYear());

    var tableauDate = this.date.split("-");

    if (mm < Number(tableauDate[1])){
      this.age = yyyy - Number(tableauDate[0]) - 1;
    }
    else {
      this.age = yyyy - Number(tableauDate[0]);
    }
  }

  /*calculatePeriod(){
    var tabDebutExperience = this.experiences.dateDebut.split("-");
    var tabFinExperience = this.finExperience.split("-");

    console.log(tabDebutExperience[0]);
    ecartAnnees = tabFinExperience[0] - tabDebutExperience[0]
  }*/

  organizeSkills(){
    this.tableSkills = this.skills.split(",");
    for (var i=0; i<this.tableSkills.length; i++){
      if (this.tableSkills[i].charAt(0) != " "){
        this.tableSkills[i] = " " + this.tableSkills[i];
      }
      console.log(this.tableSkills[i]);
    }
  }

  organizeQualities(){
    this.tableQualities = this.qualities.split(",");
    for (var i=0; i<this.tableQualities.length; i++){
      if (this.tableQualities[i].charAt(0) != " "){
        this.tableQualities[i] = " " + this.tableQualities[i];
      }
      console.log(this.tableQualities[i]);
    }
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
