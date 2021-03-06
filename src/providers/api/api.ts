import { ProfilePage } from "../../pages/profile/profile";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Pour utiliser this.http
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {MainProvider} from "../main/main";

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
  chat = 'chat/'


  // definition de toutes les fonctions
  // requête vers le module utilisateur
  login_path = 'login/';
  register_path='register/'
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
  changeAvatar= 'changeAvatar/';


  // requête vers le module composantProfil

  // requête vers le module offre
  getOffres_path = "offres/"
  getDemandes_path = "demandes/"
  getMatches_path = "matches/"

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

  //chat
  alldialoguser='allDialogUser/'
  addmessage='addMessage/'

  constructor(public http: HttpClient,private provider:MainProvider,) {
    console.log('Hello ApiProvider Provider');
  }


// OFFRE

    /* parse JSON offre to offre */
  parseOffre(data)
  {
      //Skills string
      var skills = []
      var skills_str = "";

      if ( data.competencesRequises !== undefined) {
        for (var _i = 0; _i < data.competencesRequises.length; _i++) {

            skills.push( ' ' + data.competencesRequises[_i].contenu );

            skills_str += data.competencesRequises[_i].contenu;
            if (_i != data.competencesRequises.length - 1) {
                skills_str += ',';
            }
        }
      }

      //Qualities string
      var qualities = [];
      var qualities_str = "";

      if ( data.qualitesRequises !== undefined) {
        for (var _i = 0; _i < data.qualitesRequises.length; _i++) {

            qualities.push( ' ' + data.qualitesRequises[_i].contenu );

            qualities_str += data.qualitesRequises[_i].contenu;
            if (_i != data.qualitesRequises.length - 1) {
                qualities_str += ',';
            }
        }
      }

      //Formations
      var formations = [];
      if ( data.recruteur.formation !== undefined) {
        for (var formation of data.recruteur.formation) {
            formations.push( {title: formation.titre,
              experience: ' ' + formation.titre,
              period: formation.duree,
              domaine: formation.domaine.intitule} );
        }
      }

      //Experiences
      var experiences = [];
      if ( data.experiencesRequises !== undefined) {
        for (var exp of data.experiencesRequises) {
            experiences.push( {title: exp.titre,
                experience: ' ' + exp.titre,
                period: exp.duree,
                domaine: exp.domaine.intitule} );
        }
      }

      return {
      'title': data.titre,
      'categorie': data.categorie.intitule,
      'typeOfJob': data.typeContrat,
      'dateDebut': data.dateDebut,
      'dateFin': data.dateFin,
      'city': data.city,
      'shortDescription': data.description,
      'skills': skills_str,
      'tableSkills': skills,
      'qualities': qualities_str,
      'tableQualities': qualities,
      'formations': formations,
      'experiences': experiences,
    };
  }

  /* parse JSON demande to demande */
  parseDemande(data)
  {
      //Skills string
      var skills = []
      var skills_str = "";

      if ( data.competencePossede !== undefined) {
        for (var _i = 0; _i < data.competencePossede.length; _i++) {

            skills.push( ' ' + data.competencePossede[_i].contenu );

            skills_str += data.competencePossede[_i].contenu;
            if (_i != data.competencePossede.length - 1) {
                skills_str += ',';
            }
        }
      }

      //Qualities string
      var qualities = [];
      var qualities_str = "";

      if ( data.qualitePossede !== undefined) {
        for (var _i = 0; _i < data.qualitePossede.length; _i++) {

            qualities.push( ' ' + data.qualitePossede[_i].contenu );

            qualities_str += data.qualitePossede[_i].contenu;
            if (_i != data.qualitePossede.length - 1) {
                qualities_str += ',';
            }
        }
      }

      //Formations
      var formations = [];

      if ( data.demandeur.formation !== undefined) {
        for (var formation of data.demandeur.formation) {
            formations.push( {title: formation.titre,
              experience: ' ' + formation.titre,
              period: formation.duree,
              domaine: formation.domaine.intitule} );
        }
      }

      //Experiences
      var experiences = [];

      if ( data.experiencePossede !== undefined) {
        for (var exp of data.experiencePossede) {
            experiences.push( {title: exp.titre,
                experience: ' ' + exp.titre,
                period: exp.duree,
                domaine: exp.domaine.intitule} );
        }
      }

      return {
      'categorie': data.categorie.intitule,
      'typeOfJob': data.typeContrat,
      'dateDebut': data.dateDebut,
      'dateFin': data.dateFin,
      'city': data.city,
      'shortDescription': data.description,
      'skills': skills_str,
      'tableSkills': skills,
      'qualities': qualities_str,
      'tableQualities': qualities,
      'formations': formations,
      'experiences': experiences,
    };
  }

  loadDemandes() {
      this.http.get(this.serverAddress + this.offre + this.getDemandes_path)
    .subscribe(
      (data : any) => {
          for (var demande of data) {
            this.provider.addDemande( this.parseDemande(demande) );
          }
          console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }


  loadOffres() {
      this.http.get(this.serverAddress + this.offre + this.getOffres_path)
    .subscribe(
      (data : any) => {
          for (var offre of data) {
            this.provider.addOffre( this.parseOffre(offre) );
            console.log(offre);
          }
          console.log(data);
     },
     (error : any) => {
        console.log(error);
     });
  }


  //Retrival of offers and demands that match with current profile
  loadMatches() {
      this.http.get(this.serverAddress + this.offre + this.getMatches_path)
    .subscribe(
      (data : any) => {
          for (var offre of data.offres) {
            this.provider.addMatchOffre( this.parseOffre(offre) );
          }
          for (var demande of data.demandes) {
            this.provider.addMatchDemande( this.parseDemande(demande) );
            this.provider.addMatchDemander(demande.demandeur);

            console.log("demande.demandeur = ");
            console.log(demande.demandeur);
          }

          console.log("data loaded ? ")
          console.log(data);





     },
     (error : any) => {
        console.log(error);
     });
  }


  sendOffre(objet) {
    this.http.post(this.serverAddress + this.offre + this.ajoutOffre, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        for (var demande of data.matchingDemandes) {
          this.provider.addSpecificMatchDemande( this.parseDemande(demande) );
          this.provider.addSpecificDemander(demande.demandeur);
        }
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
        for (var offre of data.matchingOffres) {
          this.provider.addSpecificMatchOffre( this.parseOffre(offre) );
        }
     },
     (error : any) => {
        console.log(error);
     });
  }

  getLocalisation(objet) {
    var localisation;
    this.http.post(this.serverAddress + this.offre + this.getlocalisation, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        localisation = data.localisation;
     },
     (error : any) => {
        console.log(error);
     });
     return localisation;
  }

  getCompetences(objet) {
    var competences;
    this.http.post(this.serverAddress + this.offre + this.getcompetences, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        competences = data.competences;
     },
     (error : any) => {
        console.log(error);
     });
     return competences;
  }

  getExperiences(objet) {
    var experiences;
    this.http.post(this.serverAddress + this.offre + this.getexperiences, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        experiences = data.experiences;
     },
     (error : any) => {
        console.log(error);
     });
     return experiences;
  }

  getEcoleDescription(objet) {
    var ecoleDescription;
    this.http.post(this.serverAddress + this.offre + this.getecoledescription, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        ecoleDescription = data.ecoleDescription;
     },
     (error : any) => {
        console.log(error);
     });
     return ecoleDescription;
  }

  getEcole(objet) {
    var ecole;
    this.http.post(this.serverAddress + this.offre + this.getecole, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        ecole = data.ecole;
     },
     (error : any) => {
        console.log(error);
     });
     return ecole;
  }

  getQualite(objet) {
    var qualite;
    this.http.post(this.serverAddress + this.offre + this.getqualite, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        qualite = data.qualite;
     },
     (error : any) => {
        console.log(error);
     });
     return qualite;
  }

  getTitre(objet) {
    var titre;
    this.http.post(this.serverAddress + this.offre + this.gettitre, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        titre = data.titre;
     },
     (error : any) => {
        console.log(error);
     });
     return titre;
  }

  getTypeEmploi(objet) {
    var typeEmploi;
    this.http.post(this.serverAddress + this.offre + this.gettypeemploi, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        typeEmploi = data.typeEmploi;
     },
     (error : any) => {
        console.log(error);
     });
     return typeEmploi;
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
     var nom_prenom;
     console.log("dans api.ts 1");
     this.http.post(this.serverAddress + this.utilisateur + this.getname, objet)
     .map(
       (data : any) => {
         console.log(data);
         nom_prenom = data.nom_prenom;
         console.log("dans api.ts 2");
         console.log(nom_prenom);
         return nom_prenom;
       },
       (error : any) => {
          console.log(error);
       });
    }


  getAge(objet) {
    var age;
    this.http.post(this.serverAddress + this.utilisateur + this.getage, objet)
    .subscribe(
      (data : any) => {
        console.log(data);
        console.log(data.status);
        age = data.age;
      },
      (error : any) => {
         console.log(error);
      });
      return age;
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

  // CHAT
  allDialogUser(objet): Promise<any> {
    return this.http.post(this.serverAddress + this.chat + this.alldialoguser, objet)
    .toPromise()
    //.then(data => data.dialogs);
   }

   addMessage(objet) {
     return this.http.post(this.serverAddress + this.chat + this.addmessage, objet)
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
          //RÉCUPÉRATION PROFIL
        donneeUtilisateur=data.userData
        console.log(donneeUtilisateur)
        profile = this.provider.get_profile();
        profile.id = donneeUtilisateur.id_user
        profile.firstname=donneeUtilisateur.prenom
        profile.familyname=donneeUtilisateur.nom
        profile.sexe=donneeUtilisateur.sexe
        profile.dateNaissance=donneeUtilisateur.dateDeNaissance
        profile.email=donneeUtilisateur.email
        // Necessaire car number enleve le 0 devant
        if (donneeUtilisateur.telephone.charAt(0)=='0'){
          profile.phone='0' + Number(donneeUtilisateur.telephone)
          }else{
          profile.phone=Number(donneeUtilisateur.telephone)
        }
        profile.shortDescription=donneeUtilisateur.description
        profile.skills=donneeUtilisateur.competence
        profile.qualities=donneeUtilisateur.qualite
        var j=0
        for (var i =0 ;i<donneeUtilisateur.formation.length;i=i+3){
          profile.formations.push({title: "newFormation"+String(j), formation:donneeUtilisateur.formation[i], period: donneeUtilisateur.formation[i+2],domaine:donneeUtilisateur.formation[i+1]})
          j++
        }
        j=0
        for (i =0 ;i<donneeUtilisateur.experience.length;i=i+3){
          profile.experiences.push({title: "newFormation"+String(j), experience:donneeUtilisateur.experience[i], period: donneeUtilisateur.experience[i+2],domaine:donneeUtilisateur.experience[i+1]})
          j++
        }
        if (donneeUtilisateur.avatar!='null') {
          profile.photo=donneeUtilisateur.avatar;
        }
        this.loadDemandes();
        this.loadOffres();

        nav.push(ProfilePage);
      } else {

      }
      console.log(data)
   },
   (error : any) => {
      console.log(error);
   });


  }
  register(objet,nav) {
    this.http.post(this.serverAddress + this.utilisateur + this.register_path, objet)
    .subscribe(
      (data : any) => {
        nav.push(ProfilePage);
        console.log(data);
        console.log(data.status);
     },
     (error : any) => {
        console.log(error);
     });
  }
  sendPicture(objet) {
    this.http.post(this.serverAddress + this.utilisateur + this.changeAvatar, objet)
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
