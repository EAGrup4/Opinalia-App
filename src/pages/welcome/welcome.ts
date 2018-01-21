import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, ToastController} from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/

@IonicPage()

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {



  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public modalCtrl: ModalController,private fb: Facebook) {

  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  openContact(){
    let addModal = this.modalCtrl.create('ContactPage');
    addModal.onDidDismiss(message => {
      if (message) {
        console.log("Ok")
      }
    })
    addModal.present();
  }

  fbLogin(){
    this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',
        []).then(profile => {
          console.log("Hola")
          console.log("profile", profile)
        let toast = this.toastCtrl.create({
          message: "Ya has valorado este producto",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    });

    /*this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));*/
  }
}
