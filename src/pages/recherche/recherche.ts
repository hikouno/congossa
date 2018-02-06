import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ChercheJobPage } from "../cherche-job/cherche-job";
import { ProposeJobPage } from "../propose-job/propose-job";

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }

  openProfilPage(){
    this.navCtrl.setRoot(ProfilePage);
  }

  openMessagesPage(){
    this.navCtrl.setRoot(ListeConversationsPage);
  }

  openChercheJobPage(){
    this.navCtrl.push(ChercheJobPage, {firstname: this.firstname,
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
  }


  openProposeJobPage() {
    this.navCtrl.push(ProposeJobPage, {firstname: this.firstname,
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
  }
}
