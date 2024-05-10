import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardContent, IonContent,IonList,IonListHeader, IonItem, IonRadio,IonLabel,IonButton, IonHeader,IonRadioGroup,IonInput, IonTitle, IonToolbar, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonContent, IonList,IonListHeader, IonItem,IonRadio, IonCheckbox,IonButton, IonLabel,IonHeader, IonRadioGroup, IonInput, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
