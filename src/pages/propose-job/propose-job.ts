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
  selector: 'page-propose-job',
  templateUrl: 'propose-job.html',
})
export class ProposeJobPage {

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

  categorie: string = "Catégorie";
  typeOfJob: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

 searchProfiles(){
   this.navCtrl.setRoot(ResultatRecherchePage);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposeJobPage');
  }

  showCategories(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction});
  }
}
