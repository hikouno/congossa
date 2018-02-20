import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Pour utiliser this.http
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



/*
This provider is used to separate the requests to the server from the main code.
*/

@Injectable()
export class ApiProvider {

  // Adresse du serveur
  export const serveurAdresse: string = '/'
  export const serverAddress: string = '/'

  //Differentes routes
  export const composantProfil = 'composantProfil/'
  export const offre = 'offre/'
  export const utilisateur = 'utilisateur/'


  // definition de toutes les fonctions
  // requête vers le module utilisateur
  export const login = 'login';
  export const register = 'register';
  export const consulterSonProfil = 'consulterSonProfil';
  export const editerSonProfil = 'editerSonProfil';
  export const changerMdp = 'changerMdp';
  export const changeName = 'changerNom/';
  export const changePrename = 'changerPrenom/';
  export const changeSex = 'changerSexe/';
  export const changeMail= 'changerMail/';
  export const changeDateDeNaissanc = 'changerDateDeNaissance/';
  export const changerTelephone = 'changeTelephone/';
  export const changerDescription ='changeDescription/'

  // requête vers le module composantProfil

  // requête vers le module offre
  export const ajoutOffre = 'ajoutOffre/';
  export const ajoutDemande = 'ajoutDemande/';



  export const test = 'hello.php';


  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }




  sendOffre(objet) {
    this.http.post(this.serverAddress + this.offre + this.ajoutOffre, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  sendDemande(objet) {
    this.http.post(this.serverAddress + this.offre + this.ajoutDemande, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  changeNom(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changeName, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  changePrenom(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changePrename, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  changeSexe(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changeSex, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  changeEmail(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changeMail, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  changeDateDeNaissance(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changeDateDeNaissanc, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  changeTelephone(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changerTelephone, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  changeDescription(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changerDescription, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }



}
