import { Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { homeOutline, addOutline, personOutline, calendarClearOutline, sparklesOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, CommonModule]
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', {static: false}) tabs!: IonTabs;
  selectedTab: any;

  constructor() { 
    addIcons({ homeOutline, addOutline, personOutline, calendarClearOutline, sparklesOutline  });
  }

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }

}
