import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import {ListEmploi} from '../ListEmploi/ListEmploi'
@Component({
  selector: 'page-AjoutOffrePage',
  templateUrl: 'AjoutOffrePage.html'
})
export class AjoutOffrePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams){    
  }
 openPageEmploi(){
  this.navCtrl.push(ListEmploi, {delegate: this});
  }
}
