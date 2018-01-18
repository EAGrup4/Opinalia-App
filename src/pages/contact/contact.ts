import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import {IonicPage, NavController, ViewController, NavParams, AlertController} from 'ionic-angular';
import { Items } from '../../providers/providers';
import {Item} from "../../models/item";
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contact:FormGroup;
  private user;


  constructor(public navCtrl: NavController, navParams: NavParams, public viewCtrl: ViewController,
              private fb:FormBuilder, private alertCtrl: AlertController, private storage:Storage  ) {

    this.contact=this.fb.group({
      email:'',
      name:'',
      message:''

    })

    this.storage.get('user').then((resp) => {
        this.user=resp;

        if(this.user){
          this.contact=this.fb.group({
            email:this.user.email,
            name:this.user.name,
            message:''

          })
        }
    });

  }

  send(contact){
    console.log(contact)
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
