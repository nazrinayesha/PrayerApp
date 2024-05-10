import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton, IonBackButton, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-evening',
  templateUrl: './evening.page.html',
  styleUrls: ['./evening.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonBackButton, CommonModule, FormsModule]
})
export class EveningPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
