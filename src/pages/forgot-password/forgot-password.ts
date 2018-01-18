import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import {IonicPage, NavController, ViewController, NavParams, AlertController} from 'ionic-angular';
import { Items } from '../../providers/providers';
import {Item} from "../../models/item";

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
  update:FormGroup;


  constructor(public navCtrl: NavController, navParams: NavParams, public viewCtrl: ViewController,
              private fb:FormBuilder, private alertCtrl: AlertController,  ) {

    this.update=this.fb.group({
      email:'',
      name:'',
      password:''

    })

  }

  save(update){
    
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
