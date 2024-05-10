import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonButton, IonToolbar,IonRow, IonCol, IonGrid,IonLabel  } from '@ionic/angular/standalone';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,IonButton, IonToolbar,IonRow, IonCol, IonGrid,IonLabel, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  features: any[] = [
    {id: 1,  src: 'assets/sun 1.png', page: '' },
    {id: 2,  src: 'assets/moon1.png', page: '' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToMorningPage() {
    this.router.navigateByUrl('/morning');
  }
  navigateToEveningPage() {
    this.router.navigateByUrl('/evening');
  }
}
