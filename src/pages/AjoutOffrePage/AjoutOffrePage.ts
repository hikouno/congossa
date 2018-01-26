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
<<<<<<< HEAD
    public navParams: NavParams) {
  }
   myCallbackFunction = (_params) => {
     return new Promise((resolve, reject) => {
             resolve();
             this.emploiPropose=_params;
             console.error(this.emploiPropose)
         });
=======
              public navParams: NavParams){
>>>>>>> 7d422c4baba2751ff668cbccc1a1fdd3268b4fac
  }
 openPageEmploi(){
   this.navCtrl.push(ListEmploi, {
     callback: this.myCallbackFunction
  });
  }
proposer(){
         console.error(this.emploiPropose)
  }
}
