import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import {IonicPage, NavController, ViewController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { Items } from '../../providers/providers';
@IonicPage()
@Component({
  selector: 'page-report-rating',
  templateUrl: 'report-rating.html'
})
export class ReportRatingPage {
  item: any;
  report: {reason: string, comment: string}={
    reason: '',
    comment: ''
};



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public items: Items) {

  }

  reportcomment(){

  }



  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */

}
