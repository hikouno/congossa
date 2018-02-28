import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
//import {googlemaps} from 'googlemaps';

/**
 * Generated class for the CityPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-city-picker',
  templateUrl: 'city-picker.html',
})



export class CityPickerPage {

city:string;
callback:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.callback = this.navParams.get("callback");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPickerPage');
  }

  getCity(citySelected){
    this.callback(citySelected.structured_formatting.main_text).then(()=>{
    this.navCtrl.pop();
  });
  }

}
