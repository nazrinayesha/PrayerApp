import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime,IonButton, CommonModule, FormsModule]
})
export class SparklePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
