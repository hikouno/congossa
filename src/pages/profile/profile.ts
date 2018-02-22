import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

//pages
import { ModalViewCardPage } from "../modal-view-card/modal-view-card";
import { ListeConversationsPage } from "../listeConversations/listeConversations";
import { RecherchePage } from "../recherche/recherche";

import {MainProvider} from "../../providers/main/main"
import { ApiProvider } from "../../providers/api/api"
import { ListCategoriesPage } from "../list-categories/list-categories";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  @ViewChild('inputDiplome') input_Diplome ;

  nom: any;
  Prenom: any;
  Sexe: any;
  Mail: any;
  DateDeNaissance:any;
  Telephone: any;
  Description:any;
  onlineMode: boolean = false;

  profile: any;

  categorie: string = "Catégorie";

  formationDuration : string = "Durée de la formation";

  durations : any;


  constructor(public navCtrl: NavController, private navParams: NavParams, public modalCtrl: ModalController, private provider:MainProvider,private apiProvider: ApiProvider) {
	  this.getAll();
    this.durations = [
    {
      name: 'col1',
      options: [
        { text: '1 an', value: '1'},
        { text: '2 ans', value: '2'},
        { text: '3 ans', value: '3'},
        { text: '4 ans', value: '4'},
        { text: '5 ans', value: '5'},
        { text: '6 ans', value: '6'},
        { text: '7 ans', value: '7'},
        { text: '8 ans', value: '8'},
        { text: '9 ans', value: '9'},
        { text: '10 ans', value: '10'},
        { text: '11 ans', value: '11'}
      ]
    }
  ];
  }

  sendPrename(){
     this.Prenom = {
      login: this.profile.email,
      newPrenom: this.profile.firstname
    }
    this.apiProvider.changePrenom(this.Prenom)
  }
  sendName(){
     this.nom = {
      login: this.profile.email,
      newNom: this.profile.familyname
    }
    this.apiProvider.changeNom(this.nom)
  }
  sendSexe(){
     this.Sexe = {
      login: this.profile.email,
      newSexe: this.profile.sexe
    }
    this.apiProvider.changeSexe(this.Sexe)
  }
  sendEmail(){
    this.Mail= {
      login: this.profile.email,
      newEmail: this.profile.email
    }
    this.apiProvider.changeEmail(this.Mail)
  }
  sendDateDeNaissance(){
    console.log(this.profile.date)
    this.DateDeNaissance= {
      login: this.profile.email,
      newDateDeNaisance: this.profile.date
    }
    this.apiProvider.changeDateDeNaissance(this.DateDeNaissance)
  }
  sendMail(){
    //this.sendEmail()
    console.log("sendMail")
  }
  sendTelephone(){
    console.log(this.profile.telephone)
    this.Telephone= {
      login: this.profile.email,
      newTelephone: this.profile.telephone
    }
    this.apiProvider.changeTelephone(this.Telephone)
  }

  sendDescription(){
    console.log(this.profile.telephone)
    this.Description= {
      login: this.profile.email,
      newDescription: this.profile.shortDescription
    }
    this.apiProvider.changeDescription(this.Description)
  }
  addDiplome(){
    if (this.profile.diplomes == undefined){
      setTimeout(() => {
        this.input_Diplome.setFocus();
      },150);
      this.profile.diplomes = [];
      this.profile.diplomes.push({title: "newDiplome", diplome: ""});
    }
    else if (this.profile.diplomes.length == 0){
      setTimeout(() => {
        this.input_Diplome.setFocus();
      },150);
    this.profile.diplomes.push({title: "newDiplome1", diplome: ""});
    }

    if (this.profile.diplomes[this.profile.diplomes.length - 1].diplome != ""){
      setTimeout(() => {
        this.input_Diplome.setFocus();
      },150);
      this.profile.diplomes.push({title: "newDiplome1", diplome:""});
    }
  }

  addFormation(){
    if (this.profile.formations == undefined){
      this.profile.formations = [];
      this.profile.formations.push({title: "newFormation", formation: ""});
    } else if (this.profile.formations.length == 0){
    this.profile.formations.push({title: "newFormation1", formation: ""});
    }

    if (this.profile.formations[this.profile.formations.length - 1].formation != ""){
      this.profile.formations.push({title: "newFormation1", formation:""});
    }
  }

  addExperience(){
    if (this.profile.experiences == undefined){
      this.profile.experiences = [];
      this.profile.experiences.push({title: "newExperience", experience: "", dateDebut: "", dateFin: "", period: ""});
    } else if (this.profile.experiences.length == 0){
    this.profile.experiences.push({title: "newExperience", experience: "", dateDebut: "", dateFin: "", period: ""});
    }

    if (this.profile.experiences[this.profile.experiences.length - 1].experience != ""){
      this.profile.experiences.push({title: "newExperience1", experience:"", dateDebut: "", dateFin: "", period: ""});
    }
  }


  removeDiplome(i){
    this.profile.diplomes.splice(i, 1);
  }

  removeFormation(i){
    this.profile.formations.splice(i, 1);
  }

  removeExperience(i){
    this.profile.experiences.splice(i, 1);
  }

  showCategories(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction_categories});
  }

  myCallbackFunction_categories = (_params) => {
    return new Promise((resolve, reject) => {
            resolve();
            console.log(this.categorie);
            this.categorie=_params;
        });
 }

 showDurations(){
   this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction_durations});
 }

 myCallbackFunction_durations = (_params) => {
   return new Promise((resolve, reject) => {
           resolve();
           console.log(this.formationDuration);
           this.formationDuration=_params;
       });
}

  displayCard(){
    if (!this.onlineMode) {
      this.calculateAge();
      this.organizeSkills();
      this.organizeQualities();
      this.calculatePeriods();
      let viewCardModal = this.modalCtrl.create(ModalViewCardPage, {firstname: this.profile.firstname,
        familyname: this.profile.familyname,
        age: this.profile.age,
        shortDescription: this.profile.shortDescription,
        photo: this.profile.photo,
        tableSkills: this.profile.tableSkills,
        tableQualities: this.profile.tableQualities,
        formations: this.profile.formations,
        diplomes: this.profile.diplomes,
        experiences: this.profile.experiences
      });
      viewCardModal.present();
		} else {
			// http request
		}
	}

  calculateAge(){
    var currentDate = new Date();

    var dd = currentDate.getDate();
    var mm = Number(currentDate.getMonth()+1); //January is 0!
    var yyyy = Number(currentDate.getFullYear());

    if (this.profile.dateNaissance != undefined){
      var tableauDate = this.profile.dateNaissance.split("-");

      if (mm < Number(tableauDate[1])){
        this.profile.age = yyyy - Number(tableauDate[0]) - 1;
      }
      else {
        this.profile.age = yyyy - Number(tableauDate[0]);
      }
    }
  }

  calculatePeriods(){
    if (this.profile.experiences != undefined){
      for (var i=0; i<this.profile.experiences.length; i++){
        if (this.profile.experiences[i].dateDebut != "" && this.profile.experiences[i].dateFin != "")
          var tabPeriod1 = this.profile.experiences[i].dateDebut.split("-");
          var tabPeriod2 = this.profile.experiences[i].dateFin.split("-");
        var res = 12 * (Number(tabPeriod2[0]) - Number(tabPeriod1[0])) +  (Number(tabPeriod2[1]) - Number(tabPeriod1[1]));
        this.profile.experiences[i].period = String(res);
      }
    }
  }


  organizeSkills(){
    if (this.profile.skills != undefined){
      this.profile.tableSkills = this.profile.skills.split(",");
      for (var i=0; i<this.profile.tableSkills.length; i++){
        if (this.profile.tableSkills[i].charAt(0) != " "){
          this.profile.tableSkills[i] = " " + this.profile.tableSkills[i];
        }
      }
    }
  }

  organizeQualities(){
    if (this.profile.qualities != undefined){
      this.profile.tableQualities = this.profile.qualities.split(",");
      for (var i=0; i<this.profile.tableQualities.length; i++){
        if (this.profile.tableQualities[i].charAt(0) != " "){
          this.profile.tableQualities[i] = " " + this.profile.tableQualities[i];
        }
      }
    }
  }

  clone(obj){
    if (obj != undefined){
      try{
          var copy = JSON.parse(JSON.stringify(obj));
      } catch(ex){
          alert("CLONE ERROR");
      }
    }
    return copy;
    }


  enregistrer(){
    this.navCtrl.setRoot(RecherchePage);
  }


  getAll() {
		// Local mode
		if (!this.onlineMode) {

      this.profile = this.provider.get_profile();


      /*this.tableSkillsCopy = this.navParams.get('tableSkills');


      this.shortDescriptionCopy = this.navParams.get('shortDescription');


      this.experiencesCopy = this.navParams.get('experiences');*/
		} else {
			// Remote mode
			// http request
		}
	}

}
