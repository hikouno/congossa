import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html'
})

export class ParametresPage {
    
  gps_enabled:boolean;
  distance_max:number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    
    this.gps_enabled = true;
    this.distance_max = 40;
    
  }
  
}
