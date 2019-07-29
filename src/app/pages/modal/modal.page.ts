import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModel() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        MC: 'lil supa',
        album: 'hambre'
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }

}
