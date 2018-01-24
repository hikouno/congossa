import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { LoginPage } from '../pages/login/login';
import { AjoutOffrePage } from '../pages/AjoutOffrePage/AjoutOffrePage';
import { ListEmploi } from '../pages/ListEmploi/ListEmploi';

<<<<<<< HEAD
=======
//Pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { SubPage } from '../pages/sub/sub';


>>>>>>> 17a29442462834d2721061cb4066fa4bedea4a25
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = AjoutOffrePage;
=======
  rootPage:any = FirstPage;
>>>>>>> 17a29442462834d2721061cb4066fa4bedea4a25

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
