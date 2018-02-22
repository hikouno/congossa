import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormationDurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-formation-duration',
  templateUrl: 'formation-duration.html',
})
export class FormationDurationPage {

  formations: string[];
  callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.formations = ["agriculteur", "technicien", "plombier", "ingénieur"];
      this.callback = this.navParams.get("callback");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormationDurationPage');
  }

}
