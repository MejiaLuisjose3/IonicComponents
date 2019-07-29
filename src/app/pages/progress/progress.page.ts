import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
 porsentaje = 0.05;
  constructor() { }

  ngOnInit() {
  }

  cambioRango( event ) {
    console.log(event);

    this.porsentaje = event.detail.value / 100;
  }
}
