import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.component.html',
  styleUrls: ['./salir.component.scss'],
})
export class SalirComponent implements OnInit {

  constructor(private popCtrl: PopoverController) { }

  ngOnInit() {}
  Salir() {
    this.popCtrl.dismiss();
    console.log('Salir');
  }
}
