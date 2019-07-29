import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public AlertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'cancelado',
          role: 'cancel',
          cssClass: 'secundary',
          handler: (blah) => {
            console.log( 'Cancelado' );
          }
        },
        {
          text: 'ok',
          cssClass: 'primary',
          handler: (blah) => {
            console.log( 'OK' );
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.AlertCtrl.create({
      header: 'Prompt!',
      subHeader: 'Aprendiendo Ionic',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingrese Su Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            // console.log(JSON.stringify(data));
            this.titulo = data.nombre;
                   console.log(this.titulo);
          }
        }
      ]
    });

    await alert.present();
  }

  }



