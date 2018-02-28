import { ProfilePage } from "../../pages/profile/profile";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Pour utiliser this.http
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {MainProvider} from "../main/main"

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
  login_path = 'login/';
  register = 'register';
  consulterSonProfil = 'consulterSonProfil';
  editerSonProfil = 'editerSonProfil';
  changerMdp = 'changerMdp';
  changeName = 'changerNom/';
  changePrename = 'changerPrenom/';
  changeSex = 'changerSexe/';
  changeMail = 'changerMail/';
  changeDateDeNaissanc = 'changerDateDeNaissance/';
  changerTelephone = 'changeTelephone/';
  changerDescription = 'changeDescription/'
  changerDiplome = 'changeDiplome/'
  creerDiplome = 'createDiplome/'
  detruireDiplome= 'removeDiplome/'
  changerQualite= 'changeQualite/'
  changerCompetence= 'changeCompetence/'
  changerExperienceFormation= 'changeExperienceFormation/'
  getname='getName/';
  getage='getAge/';

  // requête vers le module composantProfil

  // requête vers le module offre
  ajoutOffre = 'ajoutOffre/';
  ajoutDemande = 'ajoutDemande/';
  getlocalisation='getLocalisation/';
  getcompetences='getCompetences/';
  getexperiences='getExperiences/';
  getecoledescription='getEcoleDescription/';
  getecole='getEcole/';
  getqualite='getQualite/';
  gettitre='getTitre/';
  gettypeemploi='getTypeEmploi/';
  idObtenu;

  test = 'hello.php';


  constructor(public http: HttpClient,private provider:MainProvider,) {
    console.log('Hello ApiProvider Provider');
  }


// OFFRE
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
    console.log(objet);
    this.http.post(this.serverAddress + this.offre + this.ajoutDemande, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  getLocalisation(objet) {
    this.http.post(this.serverAddress + this.offre + this.getlocalisation, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  getCompetences(objet) {
    this.http.post(this.serverAddress + this.offre + this.getcompetences, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  getExperiences(objet) {
    this.http.post(this.serverAddress + this.offre + this.getexperiences, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  getEcoleDescription(objet) {
    this.http.post(this.serverAddress + this.offre + this.getecoledescription, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  getEcole(objet) {
    this.http.post(this.serverAddress + this.offre + this.getecole, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  getQualite(objet) {
    this.http.post(this.serverAddress + this.offre + this.getqualite, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  getTitre(objet) {
    this.http.post(this.serverAddress + this.offre + this.gettitre, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

  getTypeEmploi(objet) {
    this.http.post(this.serverAddress + this.offre + this.gettypeemploi, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }

// UTILISATEUR
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
  changeDiplome(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changerDiplome, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  createDiplome(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.creerDiplome, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
        this.idObtenu=data.id
     },
     (error : any) => {
        console.log(error);
     });
    return this.idObtenu
  }

  removeDiplome(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.detruireDiplome, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
        this.idObtenu=data.id
     },
     (error : any) => {
        console.log(error);
     });
    return this.idObtenu
  }

  changeQualite(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changerQualite, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
        this.idObtenu=data.id
     },
     (error : any) => {
        console.log(error);
     });
     return this.idObtenu
  }

   getName(objet) {
     this.http.post(this.serverAddress + this.utilisateur + this.getname, objet)
     .subscribe(
       (data : any) => {
         console.log(data);
         console.log(data.status);
       },
       (error : any) => {
          console.log(error);
       });
    }


  getAge(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.getage, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
      },
      (error : any) => {
         console.log(error);
      });
   }

  changeCompetence(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changerCompetence, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
        this.idObtenu=data.id
     },
     (error : any) => {
        console.log(error);
     });
    return this.idObtenu
  }
  
 changeExperienceFormation(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changerExperienceFormation, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  // Login request
  login(login, password, nav) {
  var donneeUtilisateur;
  var profile;
  var objet = {'login': login, 'password': password};
  this.http.post(this.serverAddress + this.utilisateur + this.login_path, objet)
  .subscribe(
    (data : any) => {
      if (data.success) {
        donneeUtilisateur=data.userData
        console.log(donneeUtilisateur)
        profile = this.provider.get_profile();
        profile.firstname=donneeUtilisateur.prenom
        profile.familyname=donneeUtilisateur.nom
        profile.sexe=donneeUtilisateur.sexe
        profile.dateNaissance=donneeUtilisateur.dateDeNaissance
        profile.email=donneeUtilisateur.email
        profile.phone=+donneeUtilisateur.telephone
        profile.shortDescription=donneeUtilisateur.description
        profile.skills=donneeUtilisateur.competence
        profile.qualities=donneeUtilisateur.qualite
        var j=0
        for (var i =0 ;i<donneeUtilisateur.formation.length;i=i+3){
          profile.formations.push({title: "newFormation"+String(j), formation:donneeUtilisateur.formation[i], period: donneeUtilisateur.formation[i+1],domaine:donneeUtilisateur.formation[i+2]})
          j++
        }
        var j=0
        for (var i =0 ;i<donneeUtilisateur.experience.length;i=i+3){
          profile.experiences.push({title: "newFormation"+String(j), experience:donneeUtilisateur.experience[i], period: donneeUtilisateur.experience[i+1],domaine:donneeUtilisateur.experience[i+2]})
          j++
        }
        nav.push(ProfilePage);
      } else {

      }
      console.log(data)
   },
   (error : any) => {
      console.log(error);
   });

  }
}
