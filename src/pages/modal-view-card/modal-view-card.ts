import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
  firstname: string;
  familyname: string;
  age: number;
  shortDescription: string;
  photo: any;
  tableSkills: any;
  tableQualities: any;
  formations: Array<{title:string, formation:string}>;
  diplomes: Array<{title:string, diplome:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.firstname = navParams.get("firstname");
    this.familyname = navParams.get("familyname");
    this.age = navParams.get("age");
    this.shortDescription = navParams.get("shortDescription");
    this.photo = navParams.get("photo");
    this.tableSkills = navParams.get("tableSkills");
    this.tableQualities = navParams.get("tableQualities");
    this.formations = navParams.get("formations");
    this.diplomes = navParams.get("diplomes");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalViewCardPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
