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
import {
  TrianguloEquilatero,
  TrianguloEscaleno,
} from '../figuras-geometricas.service';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
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
export class TrianguloComponent implements OnInit {
  formTriangulo: FormGroup;
  mensaje: string = '';
  constructor(
    private formbuilder: FormBuilder,
    private alertcontroller: AlertController
  ) {
    addIcons({ add, reload, alertCircleOutline });

    this.formTriangulo = new FormGroup({
      iLadoA: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.min(0)])
      ),
      iLadoB: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.min(0)])
      ),
      iLadoC: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.min(0)])
      ),
    });
  }

  ngOnInit() {}

  async fnSubmit(iLadoA: IonInput, iLadoB: IonInput, iLadoC: IonInput) {
    var msg = '';
    this.mensaje = 'Calculando...';
    if (iLadoA.value == iLadoB.value && iLadoA.value == iLadoC.value) {
      // Triángulo equilatero
      const triangulo = new TrianguloEquilatero(
        'equilatero',
        Number(iLadoA.value)
      );
      msg =
        'El perimetro del triangulo equilatero es ' +
        triangulo.calcularPerimetroE();
    } else {
      const triangulo = new TrianguloEscaleno(
        'equilatero',
        Number(iLadoA.value),
        Number(iLadoB.value),
        Number(iLadoC.value)
      );
      msg =
        'El perimetro del triangulo escaleno es ' +
        triangulo.calcularPerimetro();
    }
    const alertElement = await this.alertcontroller.create({
      header: 'Resultado',
      message: msg,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            this.mensaje = '';
            iLadoA.value = '';
            iLadoB.value = '';
            iLadoC.value = '';
          },
        },
      ],
    });
    await alertElement.present();
  }
}
