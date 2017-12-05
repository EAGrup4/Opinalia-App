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

/*
    seq.subscribe((res: any) => {
      this.items=res;
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  console.log("return")
    return this.items;*/
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
