import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from '../login/login';
import { SubPage } from '../sub/sub';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { RecherchePage } from '../recherche/recherche';
import { ParametresPage } from '../parametres/parametres';
import { ResultatRecherchePage } from "../resultat-recherche/resultat-recherche";


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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
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

  resultRecherche(){
    this.navCtrl.push(ResultatRecherchePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

}
