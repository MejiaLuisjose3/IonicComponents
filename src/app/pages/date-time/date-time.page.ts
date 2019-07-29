import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: any = new Date().toISOString();
  costumPickerOptions;
  customDate;
  constructor() { }

  ngOnInit() {
    this.costumPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!');
          console.log(event);
          this.customDate = event.year.value;

        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return true;
        }
      }]
    }
  }
  cambioFecha(event: any) {
    console.log(event.detail.value);
    console.log(event);

  }
}
