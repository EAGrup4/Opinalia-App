import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {


  rankings: any = [];
   allbest: any=[{}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.rankings="all"
    this.charge();

  }

  /**
   * Perform a service for the proper items.
   *//*
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  charge(){
    let seq=this.items.query();

    seq.subscribe((res: any) => {
      this.allbest=res;
      console.log(this.allbest)
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
