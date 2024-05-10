import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonLabel,
  IonButtons,
  IonButton,
  IonModal
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonLabel,
  IonButtons,
  IonButton,
  IonModal
  ]
})
export class CalendarPage implements OnInit {
  

  constructor() { }

  ngOnInit() {}
}



