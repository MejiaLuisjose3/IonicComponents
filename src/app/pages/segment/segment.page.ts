import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;
  superHero: Observable<any>;
  texto = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHero = this.dataService.gethero();
  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;
    if (valorSegmento === 'todos') {
      this.texto = '';
      return;
    }
    this.texto = valorSegmento;
  }

}
