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
  diplome: any;



  onlineMode: boolean = false;

  profile: any;

  categorie_formation: string = "Domaine";

  categorie_experience: string = "Domaine";

  formationDuration : string = "Durée de la formation";

  durations : any;


  constructor(public navCtrl: NavController, private navParams: NavParams, public modalCtrl: ModalController, private provider:MainProvider,private apiProvider: ApiProvider) {
	  this.getAll();
    this.durations = [
    {
      name: 'col1',
      options: [
        { text: '3 mois', value: '0.25'},
        { text: '6 mois', value: '0.5'},
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
    this.apiProvider.changePrenom({"newPrenom":this.profile.firstname})
  }
  sendName(){
    this.apiProvider.changeNom({"newNom":this.profile.familyname})
  }
  sendSexe(){
    this.apiProvider.changeSexe({"newSexe":this.profile.sexe})
  }
  sendEmail(){
      this.apiProvider.changeEmail({"newEmail":this.profile.email})
  }
  sendDateDeNaissance(){
    this.apiProvider.changeDateDeNaissance({"newDateDeNaisance":this.profile.date})
  }

  sendTelephone(){
    this.apiProvider.changeTelephone({"newTelephone":this.profile.telephone})
  }

  sendDescription(){
    this.apiProvider.changeDescription({"newDescription":this.profile.shortDescription})
  }

  sendDomaineDiplome(i){
    if (this.profile.diplomes[i].niveau!=""){
      console.log("aya")
      //this.sendDiplome(i)
    }
  }
  sendDureeDiplome(i){
    if (this.profile.diplomes[i].domaine!=""){
      console.log("isse")
      //this.sendDiplome(i)
    }
  }
  sendDiplome(i){
    this.apiProvider.changeDiplome({"newDomaineDiplome": this.profile.profile.diplome[i].domaine,"newDureeDiplome": this.profile.diplome[i].niveau})
  }
  sendQualite(){
    
  }
  addDiplome(){
    var bool=false
    if (this.profile.diplomes == undefined){

      this.profile.diplomes = [];
      this.profile.diplomes.push({title: "newDiplome", domaine: "", niveau: "", id: ""});
      bool=true
    }
    else if (this.profile.diplomes.length == 0){
      bool=true
    this.profile.diplomes.push({title: "newDiplome1", domaine: "", niveau: "", id: ""});
    }
    else if (this.profile.diplomes[this.profile.diplomes.length - 1].domaine != ""){
      bool=true
      this.profile.diplomes.push({title: "newDiplome1", domaine:"", niveau: "", id:""});
    }
    if (bool){
      this.Diplome= {
        login: this.profile.email,
        newDomaineDiplome: 'null',
        newDureeDiplome: 'null'
      }
      this.profile.diplomes[this.profile.diplomes.length - 1].id=this.apiProvider.createDiplome(
      {"newDomaineDiplome": 'null'
        ,"newDureeDiplome": 'null'})
    }
      }
  //   setTimeout(() => {
//  #      this.input_Diplome.setFocus();
//  #    },150);
//  #  this.profile.diplomes.push({title: "newDiplome1", diplome: ""});
//  #  }
// #
//  #  if (this.profile.diplomes[this.profile.diplomes.length - 1].diplome != ""){
//   #   setTimeout(() => {
//    #    this.input_Diplome.setFocus();
//    #  },150);
 //   #  this.profile.diplomes.push({title: "newDiplome1", diplome:""});
//   # }
//
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
      this.Diplome= {
        login: this.profile.email,
        idDiplome: this.profile.diplomes[i].id
    }
    this.apiProvider.removeDiplome(this.Diplome)
    this.profile.diplomes.splice(i, 1);
  }

  removeFormation(i){
    this.profile.formations.splice(i, 1);
  }

  removeExperience(i){
    this.profile.experiences.splice(i, 1);
  }

  showCategories_formation(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction_categories_formation});
  }

  myCallbackFunction_categories_formation = (_params) => {
    return new Promise((resolve, reject) => {
            resolve();
            console.log(this.categorie_formation);
            this.categorie_formation=_params;
        });
 }

 showCategories_experience(){
   this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction_categories_experience});
 }

 myCallbackFunction_categories_experience = (_params) => {
   return new Promise((resolve, reject) => {
           resolve();
           console.log(this.categorie_experience);
           this.categorie_experience=_params;
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
    if (this.profile.skills != []){
      this.profile.tableSkills = this.profile.skills.split(",");
      for (var i=0; i<this.profile.tableSkills.length; i++){
        if (this.profile.tableSkills[i].charAt(0) != " "){
          this.profile.tableSkills[i] = " " + this.profile.tableSkills[i];
        }
      }
    }
  }

  organizeQualities(){
    if (this.profile.qualities != []){
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
