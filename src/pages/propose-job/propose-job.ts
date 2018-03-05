import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController } from 'ionic-angular';
import { ListCategoriesPage } from "../list-categories/list-categories";

//pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ResultatRecherchePage } from "../resultat-recherche/resultat-recherche";

import { MainProvider } from "../../providers/main/main"
import { ApiProvider } from "../../providers/api/api"
import { CityPickerPage } from "../city-picker/city-picker";
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

  title : string = "";
  city: string = "Ville";
  typeOfJob: string = "";
  categorie: string = "Catégorie";
  dateDebut: string = "";
  dateFin: string = "";
  description: string = "";

  profileRecherche: {
    skills: string;
    tableSkills: string[];
    qualities: string;
    tableQualities: string[];
    experiences:any[];
    formations:any[];
  };

  durations_experiences: any;

  offre: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider:MainProvider,
    private apiProvider: ApiProvider,
    private alertCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController) {
    this.provider.currentView = 'ProposeJobPage';
    this.profileRecherche = {skills : "", tableSkills: [], qualities: "", tableQualities: [], experiences: []};
    this.getAll();
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

  ionViewWillLeave() {
    console.log("tutu");
    this.menu.swipeEnable(true, 'mainMenu');
  }

  getAll(){
    this.profile = this.provider.get_profile();
  }


  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Veuillez compléter le titre, le type d\'emploi, les dates et la ville dans laquelle vous souhaitez trouver un job',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  removeUselessVariables(){
    for (var i=0; i<this.profileRecherche.experiences.length; i++){
      if (this.profileRecherche.experiences[i].experience == ""){
        this.profileRecherche.experiences.splice(i,1);
      }
    }
  }

 searchProfiles(){/*
   if (this.title == "" ||
       this.typeOfJob == "" ||
       this.city == "Ville" ||
       (this.typeOfJob == "CDI" && this.dateDebut == "") ||
       (this.typeOfJob == "CDD" && (this.dateDebut == "" || this.dateFin == "")) ||
       (this.typeOfJob == "Stage" && (this.dateDebut == "" || this.dateFin == ""))){
         this.showToastWithCloseButton();
    }
<<<<<<< HEAD
    else{*/
=======
    else{
      this.provider.propose_ou_cherche = "propose";
      this.removeUselessVariables();
>>>>>>> b75087ae69a10bbd1be5aac35df2a18e9e28fb2f
      this.organizeSkills();
      this.organizeQualities();
      this.createOffre();
      this.provider.addOffre(this.offre);
      this.apiProvider.sendOffre(this.offre);
      this.navCtrl.push(ResultatRecherchePage);
    /*}*/
 }

 addExperience(){
   if (this.profileRecherche.experiences == undefined){
     this.profileRecherche.experiences = [];
     this.profileRecherche.experiences.push({title: "newExperience", experience: "", period: "", domaine: "Domaine"});
   } else if (this.profileRecherche.experiences.length == 0){
     this.profileRecherche.experiences.push({title: "newExperience", experience: "", period: "", domaine: "Domaine"});
   }
   if (this.profileRecherche.experiences[this.profileRecherche.experiences.length - 1].experience != ""){
     this.profileRecherche.experiences.push({title: "newExperience1", experience:"", period: "", domaine: "Domaine"});
   }
 }

 removeExperience(i){
   this.profileRecherche.experiences.splice(i, 1);
 }

 showCategories_experience(i){
   var myCallbackFunction_categories_experience = (_params) => {
     return new Promise((resolve, reject) => {
             resolve();
             this.profileRecherche.experiences[i].domaine=_params;
         });
  }
  console.log(this.profileRecherche.experiences[i].domaine);
   this.navCtrl.push(ListCategoriesPage, {callback: myCallbackFunction_categories_experience});
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposeJobPage');
  }

  showCategories(){
    this.navCtrl.push(ListCategoriesPage, {callback: this.myCallbackFunction_categorie});
  }

  myCallbackFunction_categorie = (_params) => {
    return new Promise((resolve, reject) => {
            resolve();
            this.categorie=_params;
            console.error(this.categorie);
        });
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

    organizeSkills(){
      if (this.profileRecherche.skills != ""){
        this.profileRecherche.tableSkills = this.profileRecherche.skills.split(",");
        for (var i=0; i<this.profileRecherche.tableSkills.length; i++){
          if (this.profileRecherche.tableSkills[i].charAt(0) != " "){
            this.profileRecherche.tableSkills[i] = " " + this.profileRecherche.tableSkills[i];
          }
        }
      }
    }

    organizeQualities(){
      if (this.profileRecherche.qualities != ""){
        this.profileRecherche.tableQualities = this.profileRecherche.qualities.split(",");
        for (var i=0; i<this.profileRecherche.tableQualities.length; i++){
          if (this.profileRecherche.tableQualities[i].charAt(0) != " "){
            this.profileRecherche.tableQualities[i] = " " + this.profileRecherche.tableQualities[i];
          }
        }
      }
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

    createOffre(){
      this.offre = {
        'title': this.title,
        'categorie': this.categorie,
        'typeOfJob': (this.typeOfJob == null ? "" : this.typeOfJob),
        'dateDebut': (this.dateDebut == "" ? null : this.dateDebut),
        'dateFin': (this.dateFin == "" ? null : this.dateFin),
        'city': (this.city == null ? "" : this.city),
        'description': this.description,

        'skills': this.profileRecherche.skills,
        'tableSkills': this.profileRecherche.tableSkills,
        'qualities': this.profileRecherche.qualities,
        'tableQualities': this.profileRecherche.tableQualities,
        'formations': this.profileRecherche.formations,
        'experiences': this.profileRecherche.experiences,
      }/*
      this.offre = {
        'title': (this.title == "" ?
        'categorie': this.categorie,
        'typeOfJob': (this.typeOfJob == null ? "" : this.typeOfJob),
        'dateDebut': (this.dateDebut == "" ? null : this.dateDebut),
        'dateFin': (this.dateFin == "" ? null : this.dateFin),
        'city': (this.city == null ? "" : this.city),
        'shortDescription': this.profileCopy.shortDescription,
        'skills': this.profileCopy.skills,
        'tableSkills': this.profileCopy.tableSkills,
        'qualities': this.profileCopy.qualities,
        'tableQualities': this.profileCopy.tableQualities,
        'formations': this.profileCopy.formations,
        'diplomes': this.profileCopy.diplomes,
        'experiences': this.profileCopy.experiences,
      }*/
      console.log("offre = ");
      console.log(this.offre);
    }

}
