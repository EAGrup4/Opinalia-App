import { Component } from '@angular/core';
import {IonicPage, NavController, ModalController, NavParams, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, private storage:Storage,public modalCtrl: ModalController,
              navParams: NavParams, public items: Items, public toastCtrl: ToastController) {
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
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(newrating=>{
      if (newrating){
        let user:any;
        this.storage.get('user').then((resp) => {
          user=resp;
          let token: any={}
          token=user.token;
          let idproduct=this.item._id;
          this.items.addrating(idproduct, newrating, token).subscribe((resp)=>{
            this.currentItem=resp;

          }, (err)=>{
            let toast = this.toastCtrl.create({
              message: "Ya has valorado este producto",
              duration: 3000,
              position: 'top'
            });
            toast.present();
          })

        })

      }
    })
    addModal.present();

  }

}
