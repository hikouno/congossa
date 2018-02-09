import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


//Pages

import { AjoutOffrePage } from '../pages/AjoutOffrePage/AjoutOffrePage';
import { ListEmploi } from '../pages/ListEmploi/ListEmploi';
import { LoginPage } from '../pages/login/login';

import { ListeConversationsPage } from '../pages/listeConversations/listeConversations';
import { ConversationPage } from '../pages/conversation/conversation';

import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { SubPage } from '../pages/sub/sub';
import { RecherchePage } from '../pages/recherche/recherche';
import { ParametresPage } from '../pages/parametres/parametres';
import { MesOffresPage } from "../pages/mes-offres/mes-offres";
import { MesDemandesPage } from "../pages/mes-demandes/mes-demandes";
import { SauvegardePage } from "../pages/sauvegarde/sauvegarde";
import { ProfilePage } from "../pages/profile/profile";
import { StatistiquesPage } from "../pages/statistiques/statistiques";
import { AboutPage } from "../pages/about/about";


// Adresse du serveur
export const serveurAdress = 'http://localhost/congossa-server/' //A changer apres c est juste pour que je puisse tester
// definition de toutes les fonctions
export const addProfile = 'addProfile';
export const getProfile = 'getProfile';
export const sendProfile = 'sendProfile';
export const test = 'hello.php'





@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootMenuPage:any = RecherchePage;

  rootPage:any = FirstPage;

  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private fire: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'mes-offres', component: MesOffresPage },
      { title: 'mes-demandes', component: MesDemandesPage },
      { title: 'sauvegarde', component: SauvegardePage },
      { title: 'messagerie', component: ListeConversationsPage },
      { title: 'profil', component: ProfilePage },
      { title: 'parametres', component: ParametresPage },
      { title: 'statistiques', component: StatistiquesPage },
      { title: 'about', component: AboutPage }

    ];
  }

  openPage(title) {
	if (title == 'recherche') {
		this.nav.push(RecherchePage);
	} else if (title == 'mes-offres'){
      this.nav.push(MesOffresPage);
    }else if (title == 'mes-demandes'){
      this.nav.push(MesDemandesPage);
    }else if (title == 'sauvegarde'){
      this.nav.push(SauvegardePage);
    }else if (title == 'messagerie'){
      this.nav.push(ListeConversationsPage);
    }else if (title == 'profil'){
      this.nav.push(ProfilePage);
    }else if (title == 'parametres'){
      this.nav.push(ParametresPage);
    }else if (title == 'statistiques'){
      this.nav.push(StatistiquesPage);
    }else if (title == 'about'){
      this.nav.push(AboutPage);
    }

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  }

  // Log out from Facebook
  logoutOfFacebook() {
    this.fire.auth.signOut();
    console.log("this.fire.auth.signOut() OK.")
    //FirebaseAuth.getInstance().signOut();
    console.log("FirebaseAuth.getInstance().signOut() OK");
    //LoginManager.getInstance().logOut();
    console.log("LoginManager.getInstance().logOut()");
  }
}
