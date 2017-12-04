import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Settings, User} from '../../providers/providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };
  // Our local settings object
  options: any;

  settingsReady = false;

  //form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
    public user: User,
    public settings: Settings,
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    private storage:Storage) {
  }

  doUpdate(){
    let user:any;
    this.storage.get('user').then((resp) => {
      user=resp;
      console.log(user)
      this.user.update(this.account,user).subscribe((resp) => {
        let usr:any;
        usr=resp;
        this.storage.set('user', usr);
        let toast = this.toastCtrl.create({
          message: "Usuario actualizado",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }, (err) => {
        // Unable to log in
        let toast = this.toastCtrl.create({
          message: "Error al actualizar",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    });
  }
}
