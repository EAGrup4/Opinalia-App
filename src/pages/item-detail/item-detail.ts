import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
import {Item} from "../../models/item";

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, navParams: NavParams, public items: Items) {
    this.item = navParams.get('item') //|| items.defaultItem;
    console.log(this.item.name)
  }

  /*addRating(item: Item) {
    let addModal = this.modalCtrl.create('ItemCreatePage', {item: item});
    addModal.onDidDismiss(item => {
      if (item) {
      }
    })
    addModal.present();
  }*/
  addRating() {
    console.log(this.item.name)
    this.navCtrl.push('ItemCreatePage', {
      item: this.item
    });
  }

}
