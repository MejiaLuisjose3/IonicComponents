import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users: Observable<any>;
  @ViewChild('Lista') lista: IonList;

  constructor(private data: DataService,
              private toastCrtl: ToastController) { }

  ngOnInit() {
    this.users = this.data.getUsers();
  }

  favorite(item: any) {
 console.log('favorite', item);
 this.lista.closeSlidingItems();
 this.MostrarToast(item.name);
}

share(item: any) {
 console.log('share', item);
 this.lista.closeSlidingItems();
 this.MostrarToast(item.name);
}

delete(item: any) {
   console.log('delete', item);
 this.lista.closeSlidingItems();
 this.MostrarToast(item.name);
}
async MostrarToast(Mensaje: string) {
  const toast = await this.toastCrtl.create({
    message: Mensaje,
    duration: 1500,
    position: 'bottom',
    color: 'danger'
  });
  return await toast.present();
}
}
