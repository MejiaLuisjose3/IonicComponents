import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

    imagen: string;
  constructor() { }

  ngOnInit() {
    this.imagen = 'https://media.metrolatam.com/2017/11/15/mia-4bdace1e6ab3bf2934edde3c1e6b29d9-1200x600.jpg';
  }

}
