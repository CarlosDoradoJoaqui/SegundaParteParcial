import { Component, OnDestroy, OnInit } from '@angular/core';

interface SlidePromocion {
  imagen: string;
  alt: string;
  titulo: string;
  texto: string;
}

@Component({
  imports: [],
  selector: 'app-carrusel',
  styleUrl: './carrusel.css',
  templateUrl: './carrusel.html',
})
export class Carrusel implements OnInit, OnDestroy {
  indice = 0;
  private temporizador: ReturnType<typeof setInterval> | undefined;

  readonly slides: SlidePromocion[] = [
    {
      imagen: 'imagenes/promociones/chequeo.jpg',
      alt: 'Chequeo preventivo',
      titulo: 'Chequeo preventivo 20% off',
      texto: 'Valora tu salud con laboratorio y consulta de medicina general.',
    },
    {
      imagen: 'imagenes/promociones/fisioterapia.jpg',
      alt: 'Rehabilitación física',
      titulo: 'Paquete de fisioterapia',
      texto: 'Cinco sesiones de rehabilitación con evaluación incluida.',
    },
    {
      imagen: 'imagenes/promociones/nutricion.jpg',
      alt: 'Nutrición clínica',
      titulo: 'Plan nutricional familiar',
      texto: 'Acompañamiento de 30 días para hábitos sostenibles en casa.',
    },
  ];

  ngOnInit(): void {
    this.temporizador = setInterval(() => this.siguiente(), 5000);
  }

  ngOnDestroy(): void {
    if (this.temporizador) {
      clearInterval(this.temporizador);
    }
  }

  irA(indice: number): void {
    this.indice = indice;
  }

  siguiente(): void {
    this.indice = (this.indice + 1) % this.slides.length;
  }

  anterior(): void {
    this.indice = (this.indice - 1 + this.slides.length) % this.slides.length;
  }
}
