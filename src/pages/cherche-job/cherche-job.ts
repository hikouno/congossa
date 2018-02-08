import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListCategoriesPage } from "../list-categories/list-categories";

//pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ResultatRecherchePage } from "../resultat-recherche/resultat-recherche";
import { MainProvider } from "../../providers/main/main";

/**
 * Generated class for the ProposeJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cherche-job',
  templateUrl: 'cherche-job.html',
})
export class ChercheJobPage {

  onlineMode: boolean = false;

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



  categorie: string = "Catégorie";
  typeOfJob: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider:MainProvider) {
    this.getAll();
  }

  getAll(){
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
    this.copy();
  }

  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
            resolve();
            this.categorie=_params;
            console.error(this.categorie);
        });
 }

 addExperience(){
   if (this.experiencesCopy == undefined){
     this.experiencesCopy = [];
     this.experiencesCopy.push({title: "newExperience", experience: "", dateDebut: "", dateFin: "", period: ""});
     console.log(this.experiencesCopy);
     console.log(this.experiencesCopy.length);
   } else if (this.experiencesCopy.length == 0){
     this.experiencesCopy.push({title: "newExperience", experience: "", dateDebut: "", dateFin: "", period: ""});
   }

   if (this.experiencesCopy[this.experiencesCopy.length - 1].experience != ""){
     this.experiencesCopy.push({title: "newExperience1", experience:"", dateDebut: "", dateFin: "", period: ""});
     console.log(this.experiencesCopy);
   }

   console.log(this.experiencesCopy);
 }

 removeExperience(i){
   this.experiencesCopy.splice(i, 1);
 }

 calculatePeriods(){
   if (this.experiences.length != 0){
     for (var i=0; i<this.experiences.length; i++){
       if (this.experiences[i].dateDebut != "" && this.experiences[i].dateFin != "")
         var tabPeriod1 = this.experiences[i].dateDebut.split("-");
         var tabPeriod2 = this.experiences[i].dateFin.split("-");
       var res = 12 * (Number(tabPeriod2[0]) - Number(tabPeriod1[0])) +  (Number(tabPeriod2[1]) - Number(tabPeriod1[1]));
       this.experiences[i].period = String(res);
     }
   }
 }

 searchProfiles(){
   this.navCtrl.push(ProfilePage, {
       firstname: this.firstname,
       familyname: this.familyname,
       date: this.date,
       age: this.age,
       email: this.email,
       phone: this.phone,
       photo: this.photo,
       shortDescription: this.shortDescription,
       skills: this.skills,
       tableSkills: this.tableSkills,
       qualities: this.qualities,
       tableQualities: this.tableQualities,
       formations: this.formations,
       diplomes: this.diplomes,
       experiences: this.experiences,
       debutExperience: this.debutExperience,
       finExperience: this.finExperience
     });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposeJobPage');
  }

  showCategories(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction});
  }

  clone(obj){
    if (obj != undefined){
      try{
          var copy = JSON.parse(JSON.stringify(obj));
      } catch(ex){
          alert("Vous utilisez un vieux navigateur bien pourri, qui n'est pas pris en charge par ce site");
      }
    }
    return copy;
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
}
