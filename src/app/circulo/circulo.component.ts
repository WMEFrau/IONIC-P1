import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
  IonImg,
  IonButton,
  IonInput,
  IonIcon,
  IonButtons,
} from '@ionic/angular/standalone';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { addIcons } from 'ionicons';
import { add, reload, alertCircleOutline } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';
import { Circulo } from '../figuras-geometricas.service';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonText,
    IonImg,
    IonButton,
    IonInput,
    IonIcon,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    IonButtons,
  ],
})
export class CirculoComponent implements OnInit {
  formCirculo: FormGroup;
  mensaje: string = '';

  constructor(
    private formbuilder: FormBuilder,
    private alertcontroller: AlertController
  ) {
    addIcons({ add, reload, alertCircleOutline });
    this.formCirculo = this.formbuilder.group({
      radio: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.min(0)])
      ),
    });
  }

  ngOnInit() {}

  async fnSubmitCircle(radio: IonInput) {
    console.log(radio.value);
    this.mensaje = 'Calculando...';
    const circulo = new Circulo('neumatico', Number(radio.value));
    const msg =
      'El perimetro del circulo es ' +
      circulo.calcularPerimetro().toFixed(2) +
      '';
    const alertElement = await this.alertcontroller.create({
      header: 'Resultado',
      message: msg,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            this.mensaje = '';
            radio.value = '';
          },
        },
      ],
    });
    await alertElement.present();
  }
}
