import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { MainProvider } from "../../providers/main/main";

@Component({
  selector: 'page-ListEmploi',
  templateUrl: 'ListEmploi.html'
})

export class ListEmploi {
  callback: any;
  metier: string[];
  items: Array<{nomEmploi:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private provider:MainProvider) {
    this.provider.currentView = 'ListEmploiPage';
    this.metier = ['Agriculteur', 'Avocat', 'Boulanger', 'Coursier'];
    this.callback = this.navParams.get("callback");


    this.items = [];
    for(let i = 0;i<this.metier.length;i++){
      this.items.push({
        nomEmploi: this.metier[i]
      });
    }
  }
  itemTapped(event, item) {
 this.callback(item).then(()=>{
    this.navCtrl.pop();
 });
  }
}
