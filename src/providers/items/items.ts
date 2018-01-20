import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {
  items: Item[] = [];

  constructor(public api: Api) { }

  query() {
    let seq =this.api.get('products/all')
    return seq;
  }
  itemdetail(itemid: any) {
    let seq =this.api.get(`products/id/`+itemid)
    return seq;
  }
  allbest(){
    let seq =this.api.get('products/best7')
    return seq;
  }
  desktopbest(){
    let seq =this.api.get('products/category/best7/desktop')
    return seq;
  }
  laptopbest(){
    let seq =this.api.get('products/category/best7/laptop')
    return seq;
  }
  tabletbest(){
    let seq =this.api.get('products/category/best7/tablet')
    return seq;
  }
  phonebest(){
    let seq =this.api.get('products/category/best7/phone')
    return seq;
  }
  accessoriesbest(){
    let seq =this.api.get('products/category/best7/accessories')
    return seq;
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
