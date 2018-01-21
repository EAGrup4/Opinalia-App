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
  like(rating){

    this.storage.get('user').then((resp)=> {
      let user: any;
      user = resp;
      let token: any = {};
      token = user.token;
      let idproduct = this.item._id;
      let idrating = rating._id;
      this.items.likeButton(idproduct, idrating, token).subscribe((resp) => {
      }, (err) => {
        let toast = this.toastCtrl.create({
          message: "Ya has dado me gusta al comentario",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      })
    })
  }
  dislike(rating){

    this.storage.get('user').then((resp)=> {
      let user: any;
      user = resp;
      let token: any = {};
      token = user.token;
      let idproduct = this.item._id;
      let idrating = rating._id;
      this.items.dislikeButton(idproduct, idrating, token).subscribe((resp) => {
      }, (err) => {
        let toast = this.toastCtrl.create({
          message: "Ya has dado me gusta al comentario",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      })
    })
  }



  report(rating){
    let addModal = this.modalCtrl.create('ReportRatingPage');
    addModal.onDidDismiss(newreport=>{
      if(newreport){
        let user: any;
        this.storage.get('user').then((resp)=>{
          user=resp;
          let token: any={};
          token=user.token;
          let idproduct=this.item._id;
          let idrating=rating._id;
          this.items.addreport(idproduct, idrating, newreport, token).subscribe((resp)=>{
          }, (err)=>{
            let toast = this.toastCtrl.create({
              message: "Ya has reportado este comentario",
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
  addRating() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(newrating=>{
      if (newrating){
        let user:any;
        this.storage.get('user').then((resp) => {
          user=resp;
          let token: any={};
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
