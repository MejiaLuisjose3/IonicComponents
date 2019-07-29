import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
 valores = Array(40);
  constructor(private popCtrl: PopoverController) { }

  ngOnInit() {}

  onClick( data: number) {
    console.log(data);

    this.popCtrl.dismiss({
    item: data
    });

  }
}
