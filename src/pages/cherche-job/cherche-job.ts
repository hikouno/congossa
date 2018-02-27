import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { ListCategoriesPage } from "../list-categories/list-categories";

//pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ResultatRecherchePage } from "../resultat-recherche/resultat-recherche";
import { MainProvider } from "../../providers/main/main";
import { ApiProvider } from "../../providers/api/api"
import { CityPickerPage } from "../city-picker/city-picker";

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
  city: string= "Ville";

  durations_experiences: any;


  demande: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider:MainProvider,
    private apiProvider: ApiProvider,
    private alertCtrl: AlertController,
    public menu: MenuController) {
      this.getAll();
      this.profileCopy = this.clone(this.profile);
      this.durations_experiences = [
      {
        name: 'col2',
        options: [
          { text: '3 mois', value: '0.25'},
          { text: '6 mois', value: '0.5'},
          { text: '1 an', value: '1'},
          { text: '2 ans', value: '2'},
          { text: '3 ans', value: '3'},
          { text: '4 ans', value: '4'},
          { text: '5 ans', value: '5'},
          { text: '6 ans', value: '6'},
          { text: '7 ans', value: '7'},
          { text: '8 ans', value: '8'},
          { text: '9 ans', value: '9'},
          { text: '10 ans', value: '10'},
          { text: 'Plus de 10 ans', value: '11'}
        ]
      }
    ];
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
     this.profileCopy.experiences.push({title: "newExperience", experience: "", period: "", domaine: "Domaine"});
   } else if (this.profileCopy.experiences.length == 0){
   this.profileCopy.experiences.push({title: "newExperience", experience: "", period: "", domaine: "Domaine"});
   }

   if (this.profileCopy.experiences[this.profileCopy.experiences.length - 1].experience != ""){
     this.profileCopy.experiences.push({title: "newExperience1", experience:"", period: "", domaine: "Domaine"});
   }
 }

 removeExperience(i){
   this.profileCopy.experiences.splice(i, 1);
 }

 organizeSkills(){
   if (this.profileCopy.skills != ""){
     this.profileCopy.tableSkills = this.profileCopy.skills.split(",");
     for (var i=0; i<this.profileCopy.tableSkills.length; i++){
       if (this.profileCopy.tableSkills[i].charAt(0) != " "){
         this.profileCopy.tableSkills[i] = " " + this.profileCopy.tableSkills[i];
       }
     }
   }
 }

 organizeQualities(){
   if (this.profileCopy.qualities != ""){
     this.profileCopy.tableQualities = this.profileCopy.qualities.split(",");
     for (var i=0; i<this.profileCopy.tableQualities.length; i++){
       if (this.profileCopy.tableQualities[i].charAt(0) != " "){
         this.profileCopy.tableQualities[i] = " " + this.profileCopy.tableQualities[i];
       }
     }
   }
 }

 searchProfiles(){
   this.organizeSkills();
   this.organizeQualities();

   this.createDemande();
   this.apiProvider.sendDemande(this.demande);
   this.provider.addDemande(this.demande);
   this.navCtrl.push(ResultatRecherchePage);
 }

 showCategories_experience(i){
   var myCallbackFunction_categories_experience = (_params) => {
     return new Promise((resolve, reject) => {
             resolve();
             this.profileCopy.experiences[i].domaine=_params;
         });
  }
  console.log(this.profileCopy.experiences[i].domaine);
   this.navCtrl.push(ListCategoriesPage, {callback: myCallbackFunction_categories_experience});
 }

  showCategories(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction});
  }

  myCallbackFunction_city = (_params) => {
    return new Promise((resolve, reject) => {
            resolve();
            this.city=_params;
            console.error(this.categorie);
        });
  }

  goToCityPicker(){
    this.navCtrl.push(CityPickerPage, {callback: this.myCallbackFunction_city});
  }

  presentConfirm_experience(i) {
    let alert = this.alertCtrl.create({
      title: 'Supprimer cette expérience ?',
      message: 'Souhaitez vous supprimer cette expérience ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            this.removeExperience(i);
          }
        }
      ]
    });
    alert.present();
  }

  createDemande(){
    this.demande = {
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
