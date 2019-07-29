import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
personajes = ['One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Black Clover'];
  constructor() { }

  ngOnInit() {
  }

  reorder(event: any) {
    // console.log(event);
    event.detail.complete();

    const mover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, mover);
  }

  onClick() {
    console.log(this.personajes);
  }

}
