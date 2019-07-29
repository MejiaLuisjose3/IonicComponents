import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.page.html',
  styleUrls: ['./check-box.page.scss'],
})
export class CheckBoxPage implements OnInit {

    data = [
      {
        color: 'primary',
        name: 'One Piece',
        id: 'uno',
        selected: false
      }, {
        color: 'secondary',
        name: 'Dragon ball',
        id: 'dos',
        selected: false
      }
      // {
      //   color: 'secondary',
      //   name: 'Naruto',
      //   id: 'dos',
      //   selected: true
      // }, {
      //   color: 'tertiary',
      //   name: 'One Piece',
      //   id: 'tres',
      //   selected: false
      // }, {
      //   color: 'success',
      //   name: 'YuGi',
      //   id: 'cuatro',
      //   selected: true
      // }
    ];
    mostrar: string;

  constructor(private alertctrl: AlertController) { }

  ngOnInit() {
  }
  onClick(check) {
    if (check.id === 'dos' || check.selected === false) {
      this.mostrar = null;

    }
    console.log(check);
  }
  async alertas() {
    const mensaje = await this.alertctrl.create({
      header: 'Dragon Ball',
      subHeader: 'Te gusta Dragon Ball?',
      buttons: [
        {
          text: 'Si',
          handler: data => {
           this.mostrar = 'SI';
            console.log('Si');
          }
        }, {
          text: 'No',
          handler: data => {
           this.mostrar = 'NO';
            console.log('No');
          }
        }
      ]
  });

    await mensaje.present();
  }
}
