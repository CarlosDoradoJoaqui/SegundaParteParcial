import { Injectable } from '@angular/core';
import { Especialidad } from '../modelos/especialidad';
import { Medico } from '../modelos/medico';

@Injectable({ providedIn: 'root' })
export class MedicoService {
  private siguienteId = 1;
  private readonly medicos: Medico[] = [];

  readonly especialidades: Especialidad[] = [
    {
      nombre: 'Terapia neural',
      descripcion:
        'Tratamiento regulador que usa anestésicos locales en baja dosis para aliviar dolor crónico y restaurar el equilibrio del sistema nervioso.',
    },
    {
      nombre: 'Quiropraxia',
      descripcion:
        'Especialidad enfocada en el diagnóstico y corrección de disfunciones de la columna y el sistema musculoesquelético mediante ajustes manuales.',
    },
    {
      nombre: 'Fisioterapia',
      descripcion:
        'Rehabilitación del movimiento con ejercicio terapéutico, agentes físicos y educación para recuperar función y prevenir recaídas.',
    },
    {
      nombre: 'Nutrición y Dietética Terapéutica',
      descripcion:
        'Planes de alimentación personalizados para prevenir y tratar enfermedades, mejorar el rendimiento y acompañar procesos clínicos.',
    },
    {
      nombre: 'Medicina general',
      descripcion:
        'Atención integral de primer nivel: valoración, diagnóstico inicial, seguimiento y remisión oportuna a otras especialidades.',
    },
    {
      nombre: 'Psicología',
      descripcion:
        'Acompañamiento en salud mental para ansiedad, duelo, hábitos y relaciones, con un enfoque clínico y humanizado.',
    },
  ];

  constructor() {
    this.cargarMedicosIniciales();
  }

  listarMedicos(): Medico[] {
    return [...this.medicos];
  }

  listarPorEspecialidad(especialidad: string): Medico[] {
    return this.medicos.filter((medico) => medico.especialidad === especialidad);
  }

  buscarPorId(id: number): Medico | undefined {
    return this.medicos.find((medico) => medico.id === id);
  }

  private registrar(
    nombres: string,
    apellidos: string,
    especialidad: string,
    horarioAtencion: string,
    aniosExperiencia: number,
    bibliografia: string,
    imagen: string,
    subespecialidades: string,
    motivacion: string
  ): void {
    this.medicos.push({
      id: this.siguienteId++,
      nombres,
      apellidos,
      especialidad,
      horarioAtencion,
      aniosExperiencia,
      bibliografia,
      imagen,
      subespecialidades,
      motivacion,
    });
  }

  private cargarMedicosIniciales(): void {
    const iniciales: Omit<Medico, 'id'>[] = [
      {
        nombres: 'Laura',
        apellidos: 'Gómez Ruiz',
        especialidad: 'Terapia neural',
        horarioAtencion: 'Lunes a viernes 8:00-16:00',
        aniosExperiencia: 8,
        bibliografia: 'Especialista en dolor crónico y medicina reguladora.',
        imagen: 'imagenes/medicos/laura.jpg',
        subespecialidades: 'Dolor crónico, cefalea',
        motivacion: 'Quiero que cada paciente recupere su calidad de vida sin procedimientos invasivos.',
      },
      {
        nombres: 'Andrés',
        apellidos: 'Pérez Castro',
        especialidad: 'Quiropraxia',
        horarioAtencion: 'Martes a sábado 9:00-17:00',
        aniosExperiencia: 10,
        bibliografia: 'Quiropráctico con énfasis en columna lumbar y postura.',
        imagen: 'imagenes/medicos/andres.jpg',
        subespecialidades: 'Columna, postura laboral',
        motivacion: 'Un ajuste a tiempo evita años de dolor y limita las recaídas.',
      },
      {
        nombres: 'Camila',
        apellidos: 'Ortiz Díaz',
        especialidad: 'Fisioterapia',
        horarioAtencion: 'Lunes a viernes 7:00-15:00',
        aniosExperiencia: 6,
        bibliografia: 'Fisioterapeuta deportiva y de rehabilitación postoperatoria.',
        imagen: 'imagenes/medicos/camila.jpg',
        subespecialidades: 'Deporte, rodilla y hombro',
        motivacion: 'El movimiento es el mejor medicamento cuando se prescribe bien.',
      },
      {
        nombres: 'Julián',
        apellidos: 'Vargas Melo',
        especialidad: 'Nutrición y Dietética Terapéutica',
        horarioAtencion: 'Lunes, miércoles y viernes 10:00-18:00',
        aniosExperiencia: 7,
        bibliografia: 'Nutricionista clínico en enfermedades metabólicas.',
        imagen: 'imagenes/medicos/julian.jpg',
        subespecialidades: 'Diabetes, control de peso',
        motivacion: 'Comer bien no es privarse: es aprender a nutrir el cuerpo.',
      },
      {
        nombres: 'Sofía',
        apellidos: 'Herrera León',
        especialidad: 'Medicina general',
        horarioAtencion: 'Lunes a viernes 8:00-12:00 y 14:00-18:00',
        aniosExperiencia: 12,
        bibliografia: 'Médica general con enfoque en atención primaria familiar.',
        imagen: 'imagenes/medicos/sofia.jpg',
        subespecialidades: 'Atención primaria, control adulto',
        motivacion: 'Escuchar con calma es el primer paso de un buen diagnóstico.',
      },
      {
        nombres: 'Diego',
        apellidos: 'Ramírez Soto',
        especialidad: 'Psicología',
        horarioAtencion: 'Martes a jueves 8:00-17:00',
        aniosExperiencia: 9,
        bibliografia: 'Psicólogo clínico en ansiedad, duelo y hábitos de salud.',
        imagen: 'imagenes/medicos/diego.jpg',
        subespecialidades: 'Ansiedad, hábitos de salud',
        motivacion: 'Cuidar la mente es tan urgente como cuidar el cuerpo.',
      },
      {
        nombres: 'Elena',
        apellidos: 'Suárez Niño',
        especialidad: 'Fisioterapia',
        horarioAtencion: 'Lunes a sábado 8:00-13:00',
        aniosExperiencia: 5,
        bibliografia: 'Especialista en piso pélvico y rehabilitación de adulto mayor.',
        imagen: 'imagenes/medicos/elena.jpg',
        subespecialidades: 'Adulto mayor, piso pélvico',
        motivacion: 'Cada sesión busca devolver independencia y confianza.',
      },
      {
        nombres: 'Martín',
        apellidos: 'Cobo Aguilar',
        especialidad: 'Nutrición y Dietética Terapéutica',
        horarioAtencion: 'Jueves y viernes 9:00-16:00',
        aniosExperiencia: 4,
        bibliografia: 'Nutricionista deportivo y de trastornos gastrointestinales.',
        imagen: 'imagenes/medicos/martin.jpg',
        subespecialidades: 'Deporte, nutrición digestiva',
        motivacion: 'Un plan realista es el que el paciente sí puede sostener.',
      },
    ];

    iniciales.forEach((medico) =>
      this.registrar(
        medico.nombres,
        medico.apellidos,
        medico.especialidad,
        medico.horarioAtencion,
        medico.aniosExperiencia,
        medico.bibliografia,
        medico.imagen,
        medico.subespecialidades,
        medico.motivacion
      )
    );
  }
}
