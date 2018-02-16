import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from '../login/login';
import { SubPage } from '../sub/sub';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { RecherchePage } from '../recherche/recherche';
import { ParametresPage } from '../parametres/parametres';
import { AjoutOffrePage } from '../AjoutOffrePage/AjoutOffrePage';

import { ResultatRecherchePage } from "../resultat-recherche/resultat-recherche";
//Import les contantes
//import { serveurAdress } from "../../app/app.component"
//import { test } from "../../app/app.component"
//Pour utiliser this.http
import { HttpClientModule, HttpClient } from '@angular/common/http';



/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  public jsonObject: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http   : HttpClient) {
  }

  connexion(){
    this.navCtrl.push(LoginPage);
  }

  subscription(){
    this.navCtrl.push(SubPage);
  }

  recherche(){
    this.navCtrl.push(RecherchePage);
  }

  messagerie(){
    this.navCtrl.push(ListeConversationsPage);
  }

  parametres(){
    this.navCtrl.push(ParametresPage);
  }
  ajoutoffre(){
    this.navCtrl.push(AjoutOffrePage);
  }

  resultRecherche(){
    this.navCtrl.push(ResultatRecherchePage);
  }
  testServeur(){
     /*this.http.get(serveurAdress.concat(test)).subscribe((data : any) =>
      {
       console.dir(data);

       let alert = this.alertCtrl.create({
         title: data.data.pseudo,
         message: data['data'].formation,
         });
    alert.present();
      },
      (error : any) =>
      {
         console.dir(error);
      });*/
   }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

}
