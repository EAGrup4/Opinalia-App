import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/providers';
import {Item} from "../../models/item";

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  item: any;
  rating: { title: string, comment: string, rate: string} = {
    title: '',
    comment: '',
    rate:''
  };


  constructor(public navCtrl: NavController, navParams: NavParams, public viewCtrl: ViewController, public items: Items) {
    this.item = navParams.get('item')
    //console.log(this.item.name);

  }

  createitem(){
    console.log(this.item.name);
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
