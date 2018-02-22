import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListCategoriesPage } from "../list-categories/list-categories";

//pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ResultatRecherchePage } from "../resultat-recherche/resultat-recherche";
import { MainProvider } from "../../providers/main/main";
import { ApiProvider } from "../../providers/api/api"

/**
 * Generated class for the ProposeJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cherche-job',
  templateUrl: 'cherche-job.html',
})
export class ChercheJobPage {

  //If you want to test without the server connection
  onlineMode: boolean = false;

  profile: any;

  profileCopy: any;



  categorie: string = "Catégorie";
  typeOfJob: any;
  dateDebut: string;
  dateFin: string;
  city: string;


  demande: any;


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
            console.log(this.categorie);
            this.categorie=_params;
        });
 }

 addExperience(){
   if (this.profileCopy.experiences == undefined){
     this.profileCopy.experiences = [];
     this.profileCopy.experiences.push({title: "newExperience", experience: "", dateDebut: "", dateFin: "", period: ""});
   } else if (this.profileCopy.experiences.length == 0){
   this.profileCopy.experiences.push({title: "newExperience", experience: "", dateDebut: "", dateFin: "", period: ""});
   }

   if (this.profileCopy.experiences[this.profileCopy.experiences.length - 1].experience != ""){
     this.profileCopy.experiences.push({title: "newExperience1", experience:"", dateDebut: "", dateFin: "", period: ""});
   }
 }

 removeExperience(i){
   this.profileCopy.experiences.splice(i, 1);
 }

 calculatePeriods(){
   if (this.profileCopy.experiences != undefined){
     for (var i=0; i<this.profileCopy.experiences.length; i++){
       if (this.profileCopy.experiences[i].dateDebut != "" && this.profileCopy.experiences[i].dateFin != "")
         var tabPeriod1 = this.profileCopy.experiences[i].dateDebut.split("-");
         var tabPeriod2 = this.profileCopy.experiences[i].dateFin.split("-");
       var res = 12 * (Number(tabPeriod2[0]) - Number(tabPeriod1[0])) +  (Number(tabPeriod2[1]) - Number(tabPeriod1[1]));
       this.profileCopy.experiences[i].period = String(res);
     }
   }
 }

 searchProfiles(){
   this.createDemande();
   this.apiProvider.sendDemande(this.demande);
   this.provider.addDemande(this.demande);
   this.navCtrl.push(ResultatRecherchePage);
 }


  showCategories(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction});
  }

  createDemande(){
    this.demande = {
      'firstname': this.profileCopy.firstname,
      'familyname': this.profileCopy.familyname,
      'dateNaissance': this.profileCopy.dateNaissance,
      'age': this.profileCopy.age,
      'email': this.profileCopy.email,
      'phone': this.profileCopy.phone,
      'photo': this.profileCopy.photo,
      'categorie': this.categorie,
      'typeOfJob': (this.typeOfJob == null ? "" : this.typeOfJob),
      'dateDebut': (this.dateDebut == null ? "" : this.dateDebut),
      'dateFin': (this.dateFin == null ? "" : this.dateFin),
      'city': (this.city == null ? "" : this.city),
      'shortDescription': this.profileCopy.shortDescription,
      'skills': this.profileCopy.skills,
      'tableSkills': this.profileCopy.tableSkills,
      'qualities': this.profileCopy.qualities,
      'tableQualities': this.profileCopy.tableQualities,
      'formations': this.profileCopy.formations,
      'diplomes': this.profileCopy.diplomes,
      'experiences': this.profileCopy.experiences,
    }
    console.log("demande = ");
    console.log(this.demande);
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

}
