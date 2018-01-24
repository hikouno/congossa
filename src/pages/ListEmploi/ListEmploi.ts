import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AjoutOffrePage } from '../AjoutOffrePage/AjoutOffrePage';

@Component({
  selector: 'page-ListEmploi',
  templateUrl: 'ListEmploi.html'
})
  
export class ListEmploi {
  metier: string[];
  items: Array<{nomEmploi: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.metier = ['Agriculteur', 'Avocat', 'Boulanger', 'Coursier'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        nomEmploi: this.metier[i]
      });
    }
  }
  itemTapped(event, item) {
  this.navCtrl.push(AjoutOffrePage, {
      item: item
    });
  }
}

