import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';
import { MainProvider } from "../../providers/main/main";

/**
 * Generated class for the ModalViewCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-view-card',
  templateUrl: 'modal-view-card.html',
})
export class ModalViewCardPage {
  profile: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public menu: MenuController, private provider:MainProvider) {
    this.profile = this.provider.get_profile();
    this.provider.currentView = 'ModalViewCardPage';
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
    console.log('ionViewDidLoad ModalViewCardPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
