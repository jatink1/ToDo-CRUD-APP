import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DoListPage } from '../pages/do-list/do-list';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  

  @ViewChild(Nav) navCtrl: NavController; //this is needed for navCtrl to work
  
   constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
//the below code is the reason that a user will need to login only once until he/she logs out
      this.storage.get('key').then((val) => { /*this once login is achieved coz while logging in 
                                              there is a 'key' whose value is set to email and stored.
                                              That 'key' is stored as 1 when user logs out. Now when the 
                                              app is opened again ,it checks if value is 1 then it 
                                              redirects to home page to login again else, opens the list page. */
        if (val === 1) {
          this.navCtrl.setRoot(HomePage);
          this.navCtrl.popToRoot();
        }
        else {
          this.navCtrl.setRoot(DoListPage);
          this.navCtrl.popToRoot();
        }
      })
    }
    )
  }
}
