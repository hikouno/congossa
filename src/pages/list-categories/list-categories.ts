import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories = ["agriculteur", "technicien", "plombier", "ingénieur"];
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
