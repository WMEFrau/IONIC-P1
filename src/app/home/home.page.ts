import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonText,
  IonButton,
  IonInput,
  IonIcon,
  IonButtons,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { reload } from 'ionicons/icons';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonInput,
    IonIcon,
    NgIf,
    IonButtons,
    CirculoComponent,
    TrianguloComponent,
  ],
})
export class HomePage {
  card_id: number = 0;

  constructor() {
    addIcons({ reload });
  }

  fnseleccion(select: IonSelect) {
    this.card_id = select.value;
  }

  fnreload() {
    window.location.reload();
  }
}
