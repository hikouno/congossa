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
  serverAddress: string = '/'

  //Differentes routes
  composantProfil = 'composantProfil/'
  offre = 'offre/'
  utilisateur = 'utilisateur/'


  // definition de toutes les fonctions
  // requête vers le module utilisateur
  login = 'login';
  register = 'register';
  consulterSonProfil = 'consulterSonProfil';
  editerSonProfil = 'editerSonProfil';
  changerMdp = 'changerMdp';

  // requête vers le module composantProfil

  // requête vers le module offre
  ajoutOffre = 'ajoutOffre/';
  ajoutDemande = 'ajoutDemande/';


  test = 'hello.php';


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
        console.log("Status = " + data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }




}
