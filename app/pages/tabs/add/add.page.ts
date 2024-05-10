import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonLabel, IonButton, IonRow, IonCol, IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonLabel, IonButton, IonRow, IonCol, IonGrid, CommonModule, FormsModule]
})
export class AddPage implements OnInit {
  features: any[] = [
    {id: 1, name: 'Dua', src: 'assets/images1.png', page: '' },
    {id: 2, name: 'Ginan', src: 'assets/images2.jpg', page: '' },
    {id: 3, name: 'Farman', src: 'assets/images3.png', page: '' },
    {id: 4, name: 'Vinanati', src: 'assets/images4.jpg', page: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
