import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton, IonBackButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-morning',
  templateUrl: './morning.page.html',
  styleUrls: ['./morning.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButton, IonBackButton, CommonModule, FormsModule]
})
export class MorningPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
