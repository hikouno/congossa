import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import {ListEmploi} from '../ListEmploi/ListEmploi'
@Component({
  selector: 'page-AjoutOffrePage',
  templateUrl: 'AjoutOffrePage.html'
})
export class AjoutOffrePage {
  emploiPropose:String;
  typeContrat:String;
  myDateDeDebut:Date;
  myDateDeFin:Date;
  localisation:String;
  description:String;

  

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }
   myCallbackFunction = (_params) => {
     return new Promise((resolve, reject) => {
             resolve();
             this.emploiPropose=_params;
             console.error(this.emploiPropose)
         });
  }
 openPageEmploi(){
   this.navCtrl.push(ListEmploi, {
     callback: this.myCallbackFunction
  });
  }
proposer(){
  }
}
