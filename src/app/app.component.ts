import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


//Pages

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
import { Keyboard } from "@ionic-native/keyboard";
import { MainProvider } from "../providers/main/main";





@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootMenuPage:any = RecherchePage;

  rootPage:any = FirstPage;

  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private fire: AngularFireAuth, public keyboard: Keyboard, private provider:MainProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.hideKeyboardAccessoryBar(false);
    });

    this.pages = [
      { title: 'mes-offres', component: MesOffresPage },
      { title: 'mes-demandes', component: MesDemandesPage },
      { title: 'sauvegarde', component: SauvegardePage },
      { title: 'messagerie', component: ListeConversationsPage },
      { title: 'profil', component: ProfilePage },
      { title: 'parametres', component: ParametresPage },

    ];
  }

  openPage(title) {
	if (title == 'recherche' && this.provider.currentView != 'RecherchePage') {
		this.nav.push(RecherchePage);
	} else if (title == 'mes-offres' && this.provider.currentView != 'MesOffresPage'){
      this.nav.push(MesOffresPage);
    }else if (title == 'mes-demandes' && this.provider.currentView != 'MesDemandesPage'){
      this.nav.push(MesDemandesPage);
    }else if (title == 'sauvegarde' && this.provider.currentView != 'SauvegardePage'){
      this.nav.push(SauvegardePage);
    }else if (title == 'messagerie' && this.provider.currentView != 'ListeConversationsPage'){
      this.nav.push(ListeConversationsPage);
    }else if (title == 'profil' && this.provider.currentView != 'ProfilePage'){
      this.nav.push(ProfilePage);
    }else if (title == 'parametres' && this.provider.currentView != 'ParametresPage'){
      this.nav.push(ParametresPage);
    }else if (title == 'mes-matchs' && this.provider.currentView != 'HomePage'){
      this.nav.push(HomePage);
    }

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  }

  // Log out from Facebook
  logoutOfFacebook() {
    this.fire.auth.signOut();
    console.log("this.fire.auth.signOut() OK.")

    this.nav.push(LoginPage);
  }
}
