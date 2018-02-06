import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListCategoriesPage } from "../list-categories/list-categories";

//pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ResultatRecherchePage } from "../resultat-recherche/resultat-recherche";

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

  categorie: string = "Catégorie";
  typeOfJob: any;

  onlineMode: boolean = false;

  firstname: string;
  familyname: string;
  age: number;
  shortDescription: string;
  photo: any;
  tableSkills: any;
  tableQualities: any;
  formations: Array<{title:string, formation:string}>;
  diplomes: Array<{title:string, diplome:string}>;
  experiences: Array<{title:string, experience:string, dateDebut:string, dateFin:string, period:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.experiences= [];
    this.firstname = navParams.get("firstname");
    this.familyname = navParams.get("familyname");
    this.age = navParams.get("age");
    this.shortDescription = navParams.get("shortDescription");
    this.photo = navParams.get("photo");
    this.tableSkills = navParams.get("tableSkills");
    this.tableQualities = navParams.get("tableQualities");
    this.formations = navParams.get("formations");
    this.diplomes = navParams.get("diplomes");
    this.experiences = navParams.get("experiences");

  }

  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
            resolve();
            this.categorie=_params;
            console.error(this.categorie);
        });
 }

 addExperience(){
   if (this.experiences.length == 0){
     this.experiences.push({title: "newExperience", experience: "", dateDebut: "", dateFin: "", period: ""});
     console.log(this.experiences);
     console.log(this.experiences.length);
   }

   if (this.experiences[this.experiences.length - 1].experience != ""){
     this.experiences.push({title: "newExperience1", experience:"", dateDebut: "", dateFin: "", period: ""});
     console.log(this.experiences);
   }

   console.log(this.experiences);
 }

 removeExperience(i){
   this.experiences.splice(i, 1);
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
   this.navCtrl.setRoot(ResultatRecherchePage);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposeJobPage');
  }

  showCategories(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction});
  }

  loadData() {
		// Local mode
		if (!this.onlineMode) {
			this.firstname = this.navParams.get('firstname');
			this.familyname = this.navParams.get('familyname');
			this.age = this.navParams.get('age');
			this.formations = this.navParams.get('formations');
      this.diplomes = this.navParams.get('diplomes');
			this.shortDescription = this.navParams.get('shortDescription');
		} else {
			// Remote mode
			// http request
		}
	}
}
