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

  profile: any;

  profileCopy: any;

  city: any;

  onlineMode: boolean = false;

  title : string;

  categorie: string = "Catégorie";
  typeOfJob: any;


  offre: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider:MainProvider,
    private apiProvider: ApiProvider) {
    this.getAll();
    this.profileCopy = this.clone(this.profile);
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
        firstname: this.profileCopy.firstname,
        familyname: this.profileCopy.familynameCopy,
        date: this.profileCopy.dateCopy,
        age: this.profileCopy.ageCopy,
        email: this.profileCopy.emailCopy,
        phone: this.profileCopy.phoneCopy,
        photo: this.profileCopy.photoCopy,
        shortDescription: this.profileCopy.shortDescriptionCopy,
        skills: this.profileCopy.skillsCopy,
        tableSkills: this.profileCopy.tableSkillsCopy,
        qualities: this.profileCopy.qualitiesCopy,
        tableQualities: this.profileCopy.tableQualitiesCopy,
        formations: this.profileCopy.formationsCopy,
        diplomes: this.profileCopy.diplomesCopy,
        experiences: this.profileCopy.experiencesCopy,
        debutExperience: this.profileCopy.debutExperienceCopy,
        finExperience: this.profileCopy.finExperienceCopy,
        title: this.title,
        city: this.city
      }
    }

}
