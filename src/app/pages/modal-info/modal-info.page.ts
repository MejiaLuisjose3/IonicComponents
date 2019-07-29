import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() MC;
  @Input() album;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  SalirSinArgumentos() {
    this.modalCtrl.dismiss();
  }
  SalirConsArgumentos() {
    this.modalCtrl.dismiss({
      MC: 'Nach',
      album: 'Manifiesto'
    });
  }

}
