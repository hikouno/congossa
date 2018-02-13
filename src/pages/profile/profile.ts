import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

//pages
import { EditProfilePage } from '../editProfile/editProfile';
import { ModalViewCardPage } from "../modal-view-card/modal-view-card";
import { ListeConversationsPage } from "../listeConversations/listeConversations";
import { RecherchePage } from "../recherche/recherche";

import {MainProvider} from "../../providers/main/main"

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  onlineMode: boolean = false;

  profile: any;

  finExperience: string;
  finExperienceCopy: string;

  debutExperience: string;
  debutExperienceCopy: string;

  qualities: string;
  qualitiesCopy: string;

  skills: string;
  skillsCopy: string;

  phone: string;
  phoneCopy: string;

  email: string;
  emailCopy: string;

  date: string;
  dateCopy: string;

  familynameCopy: string;
  firstnameCopy: string;

  firstname: string;
  familyname: string;

  age: number;
  ageCopy: number;

  shortDescription: string;
  shortDescriptionCopy: string;

  photo: any;
  photoCopy: any;

  tableSkills: any;
  tableSkillsCopy: any;

  tableQualities: any;
  tableQualitiesCopy: any;

  formations: Array<{title:string, formation:string}>;
  formationsCopy: Array<{title:string, formation:string}> = [];

  diplomes: Array<{title:string, diplome:string}>;
  diplomesCopy: Array<{title:string, diplome:string}> = [];

  experiences: Array<{title:string, experience:string, dateDebut:string, dateFin:string, period:string}>;
  experiencesCopy: Array<{title:string, experience:string, dateDebut:string, dateFin:string, period:string}>;


  test: any;
  string1: string = "blablabla";


  constructor(public navCtrl: NavController, private navParams: NavParams, public modalCtrl: ModalController, private provider:MainProvider) {
	  this.getAll();

    //this.test = this.provider.get();
    console.log(this.test);
  }


  addDiplome(){
    if (this.profile.diplomes == undefined){
      this.profile.diplomes = [];
      this.profile.diplomes.push({title: "newDiplome", diplome: ""});
    }
    else if (this.profile.diplomes.length == 0){
    this.profile.diplomes.push({title: "newDiplome1", diplome: ""});
    }

    if (this.profile.diplomes[this.profile.diplomes.length - 1].diplome != ""){
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

    if (this.profile.date != undefined){
      var tableauDate = this.profile.date.split("-");

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
    this.setAll();
    this.navCtrl.setRoot(RecherchePage);
  }

  copy(){
    this.firstnameCopy = this.clone(this.firstname);
    this.familynameCopy = this.clone(this.familyname);;
    this.dateCopy = this.clone(this.date);
    this.ageCopy= this.clone(this.age);
    this.emailCopy= this.clone(this.email);
    this.phoneCopy= this.clone(this.phone);
    this.skillsCopy = this.clone(this.skills);
    this.tableSkillsCopy = this.clone(this.tableSkills);
    this.shortDescriptionCopy = this.clone(this.shortDescription);
    this.photoCopy = this.clone(this.photo);
    this.qualitiesCopy= this.clone(this.qualities);
    this.tableQualitiesCopy= this.clone(this.tableQualities);
    this.debutExperienceCopy= this.clone(this.debutExperience);
    this.finExperienceCopy= this.clone(this.finExperience);
    this.experiencesCopy = this.clone(this.experiences);
    this.diplomesCopy = this.clone(this.diplomes);
    this.formationsCopy = this.clone(this.formations);
  }

  setAll(){
    this.provider.set_firstname(this.firstname);
    this.provider.set_familyname(this.familyname);
    this.provider.set_date(this.date);
    this.provider.set_age(this.age);
    this.provider.set_email(this.email);
    this.provider.set_phone(this.phone);
    this.provider.set_skills(this.skills);
    this.provider.set_tableSkills(this.tableSkills);
    this.provider.set_shortDescription(this.shortDescription);
    this.provider.set_photo(this.photo);
    this.provider.set_qualities(this.qualities);
    this.provider.set_tableQualities(this.tableQualities);
    this.provider.set_debutExperience(this.finExperience);
    this.provider.set_finExperience(this.finExperience);
    this.provider.set_experiences(this.experiences);
    this.provider.set_diplomes(this.diplomes);
    this.provider.set_formations(this.formations);

    this.provider.set_profile(this.profile);
  }

  getAll() {
		// Local mode
		if (!this.onlineMode) {
      this.firstname = this.provider.get_firstname();
      this.familyname = this.provider.get_familyname();
      this.date = this.provider.get_date();
      this.age = this.provider.get_age();
      this.email = this.provider.get_email();
      this.phone = this.provider.get_phone();
      this.photo = this.provider.get_photo();
      this.shortDescription = this.provider.get_shortDescription();
      this.skills = this.provider.get_skills();
      this.tableSkills = this.provider.get_tableSkills();
      this.qualities = this.provider.get_qualities();
      this.tableQualities = this.provider.get_tableQualities();
      this.formations = this.provider.get_formations();
      this.diplomes = this.provider.get_diplomes();
      this.experiences = this.provider.get_experiences();
      this.debutExperience = this.provider.get_debutExperience();
      this.finExperience = this.provider.get_finExperience();

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
