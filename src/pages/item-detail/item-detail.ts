import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') //|| items.defaultItem;
    console.log(this.item.ratings)
  }

  addRating() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
      }
    })
    addModal.present();
  }

}
