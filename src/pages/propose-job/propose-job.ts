import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListCategoriesPage } from "../list-categories/list-categories";

//pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ResultatRecherchePage } from "../resultat-recherche/resultat-recherche";

import { MainProvider } from "../../providers/main/main"
import { ApiProvider } from "../../providers/api/api"
/**
 * Generated class for the ProposeJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-propose-job',
  templateUrl: 'propose-job.html',
})
export class ProposeJobPage {

  onlineMode: boolean = false;

  profile: any;

  title : string;
  city: any;
  typeOfJob: any;
  categorie: string = "Catégorie";
  dateDebut: any;
  dateFin: any;
  description: any;

  profileRecherche: {
    skills: string[];
    qualities: string[];

  };

  offre: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider:MainProvider,
    private apiProvider: ApiProvider) {
    this.getAll();
  }

  getAll(){
    this.profile = this.provider.get_profile();
  }

  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
            resolve();
            this.categorie=_params;
            console.error(this.categorie);
        });
 }

 searchProfiles(){
     this.createOffre();
     this.provider.addOffre(this.offre);
     //this.apiProvider.sendOffre(this.offre);
     this.navCtrl.push(ResultatRecherchePage);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposeJobPage');
  }

  showCategories(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction});
  }

  clone(obj){
    if (obj != undefined){
      try{
          var copy = JSON.parse(JSON.stringify(obj));
      } catch(ex){
          alert("Vous utilisez un vieux navigateur bien pourri, qui n'est pas pris en charge par ce site");
      }
    }
    return copy;
    }

    createOffre(){
      this.offre = {
        title: this.title,
        city: this.city,
        categorie: this.categorie,
        typeOfJob: this.typeOfJob,
        dateDebut: this.dateDebut,
        dateFin: this.dateFin,
        description: this.description
      }
    }

}
