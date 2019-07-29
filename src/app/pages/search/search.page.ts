import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  TextoBuscar: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe(album => {
      // console.log(album);
      this.albumes = album;
    });

    this.TextoBuscar = '';
    console.log(this.TextoBuscar);
  }

  buscar( event ) {
    console.log(event);
    this.TextoBuscar = event.detail.value;
  }

}
