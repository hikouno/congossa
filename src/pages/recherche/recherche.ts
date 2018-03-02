import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ChercheJobPage } from "../cherche-job/cherche-job";
import { ProposeJobPage } from "../propose-job/propose-job";

import { MainProvider } from "../../providers/main/main"

/**
 * Generated class for the RecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {

  profile: any;

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

  categorie: string = "Catégorie";
  typeOfJob: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private provider:MainProvider) {
    this.profile = this.provider.get_profile();
    this.provider.currentView = 'RecherchePage';
    this.provider.previousView = 'RecherchePage';
    this.menu.swipeEnable(true, 'mainMenu');
    this.loadData();
  }

  ionViewDidLoad() {
    console.log(this.navCtrl.last().name);
    console.log("toto");
    this.menu.swipeEnable(true, 'mainMenu');
  }
  ionViewWillLeave() {
    console.log("tata");

  }

  loadData(){
    this.firstname = this.navParams.get("firstname");
    this.familyname = this.navParams.get("familyname");
    this.date = this.navParams.get("date");
    this.age = this.navParams.get("age");
    this.email = this.navParams.get("email");
    this.phone = this.navParams.get("phone");
    this.photo = this.navParams.get("photo");
    this.shortDescription = this.navParams.get("shortDescription");
    this.skills = this.navParams.get("skills");
    this.tableSkills = this.navParams.get("tableSkills");
    this.qualities = this.navParams.get("qualities");
    this.tableQualities = this.navParams.get("tableQualities");
    this.formations = this.navParams.get("formations");
    this.diplomes = this.navParams.get("diplomes");
    this.experiences = this.navParams.get("experiences");
    this.debutExperience = this.navParams.get("debutExperience");
    this.finExperience = this.navParams.get("finExperience");
    this.copy();
  }


  openProfilPage(){
    this.menu.swipeEnable(false, 'mainMenu');
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

  openMessagesPage(){
    this.menu.swipeEnable(false, 'mainMenu');
    this.navCtrl.push(ListeConversationsPage);
  }

  openChercheJobPage(){
    this.menu.swipeEnable(false, 'mainMenu');
    this.navCtrl.push(ChercheJobPage, {
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


  openProposeJobPage() {
    this.menu.swipeEnable(false, 'mainMenu');
    this.navCtrl.push(ProposeJobPage, {
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
