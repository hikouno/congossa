import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

//pages
import { ModalViewCardPage } from "../modal-view-card/modal-view-card";
import { ListeConversationsPage } from "../listeConversations/listeConversations";
import { RecherchePage } from "../recherche/recherche";

import {MainProvider} from "../../providers/main/main"
import { ApiProvider } from "../../providers/api/api"

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  diplome: any;

  nom: any;
  Prenom: any;
  Sexe: any;
  Mail: any;
  DateDeNaissance:any;
  Telephone: any;
  Description:any;
  Diplome: any;
  onlineMode: boolean = false;

  profile: any;


  constructor(public navCtrl: NavController, private navParams: NavParams, public modalCtrl: ModalController, private provider:MainProvider,private apiProvider: ApiProvider) {
	  this.getAll();
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
  
  sendDomaineDiplome(i){
    console.log("aya")
    if (this.profile.diplomes[i].niveau!=""){
      console.log("aya")
      //this.sendDiplome(i)
    }
  }
  sendDureeDiplome(i){
    console.log("isse")
    if (this.profile.diplomes[i].domaine!=""){
      console.log("isse")
      //this.sendDiplome(i)
    }
  }
  sendDiplome(i){
    console.log(this.profile.telephone)
    this.Diplome= {
      login: this.profile.email,
      newDomaineDiplome: this.profile.profile.diplome[i].domaine,
      newDureeDiplome: this.profile.diplome[i].niveau
    }
    this.apiProvider.changeDiplome(this.Diplome)
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
      this.profile.diplomes[this.profile.diplomes.length - 1].id=this.apiProvider.createDiplome(this.Diplome)
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
