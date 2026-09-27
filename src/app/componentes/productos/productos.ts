import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  readonly productos = [
    {
      imagen: 'imagenes/productos/multivitaminico.jpg',
      alt: 'Suplemento vitamínico',
      titulo: 'Multivitamínico diario',
      texto: 'Apoyo nutricional recomendado por el área de dietética.',
    },
    {
      imagen: 'imagenes/productos/bandas.jpg',
      alt: 'Banda elástica de ejercicio',
      titulo: 'Bandas de resistencia',
      texto: 'Para continuar la fisioterapia con ejercicios guiados.',
    },
    {
      imagen: 'imagenes/productos/aceite.jpg',
      alt: 'Aceite de masaje',
      titulo: 'Aceite de masaje terapéutico',
      texto: 'Uso externo para relajación muscular y terapia neural de apoyo.',
    },
    {
      imagen: 'imagenes/productos/cojin.jpg',
      alt: 'Cojín lumbar',
      titulo: 'Cojín lumbar ergonómico',
      texto: 'Recomendado en quiropraxia para el trabajo sentado.',
    },
    {
      imagen: 'imagenes/productos/colchoneta.jpg',
      alt: 'Colchoneta de ejercicio',
      titulo: 'Colchoneta antideslizante',
      texto: 'Para ejercicios de piso pélvico, estiramiento y rehabilitación en casa.',
    },
    {
      imagen: 'imagenes/productos/alimentacion.jpg',
      alt: 'Alimentos para plan nutricional',
      titulo: 'Kit de alimentación saludable',
      texto: 'Selección de alimentos recomendados por nutrición y dietética terapéutica.',
    },
  ];
}
