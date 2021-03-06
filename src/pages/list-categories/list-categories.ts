import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MainProvider } from "../../providers/main/main";

/**
 * Generated class for the ListCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-categories',
  templateUrl: 'list-categories.html',
})
export class ListCategoriesPage {

  categories: string[];
  callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private provider:MainProvider) {
    this.provider.currentView = 'ListCategoriesPage';
    this.categories = ["Autre", "Agriculture", "Agro-alimentaire", "Informatique", "Mécanique (ingénieurie)", "Aéronautique", "Mathématiques", "Commerce", "Management", "Relationnel", "Électronique", "Électrotechnique", "Hydraulique", "Communication", "Télécommunications", "Chimie", "Biochimie", "Bâtiment", "Plomberie", "Service Public", "Multimédia", "Langues", "Psychologie", "Droit", "Notariat" ];
      this.callback = this.navParams.get("callback");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCategoriesPage');
  }

  itemTapped(event, item) {
    this.callback(item).then(()=>{
       this.navCtrl.pop();
    });
  }

}
