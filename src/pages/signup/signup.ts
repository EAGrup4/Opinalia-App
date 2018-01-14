import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string, password2: string } = {
    name: '',
    email: '',
    password: '',
    password2:''
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private storage:Storage) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    if (this.account.password==this.account.password2){
    // Attempt to login in through our User service
      this.user.signup(this.account).subscribe((resp) => {
        let user:any;
        user=resp;
        this.storage.set('user', user);
        this.navCtrl.push(MainPage);
      }, (err) => {


        // Unable to sign up
        let toast = this.toastCtrl.create({
          message: "Lo sentimos, registro inválido",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    }
    else{
      let toast = this.toastCtrl.create({
        message: "Las contraseñas no coinciden",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

  }
}
