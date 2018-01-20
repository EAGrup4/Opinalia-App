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
  currentItem: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, navParams: NavParams, public items: Items) {
    this.item = navParams.get('item');
    this.cargar();
  }

  cargar(){
    let seq=this.items.itemdetail(this.item._id);
    seq.subscribe((res: any) => {
      this.currentItem=res;
      console.log(this.currentItem)
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }
  addRating() {
    console.log(this.item.name)
    this.navCtrl.push('ItemCreatePage', {
      item: this.item
    });
  }

}
