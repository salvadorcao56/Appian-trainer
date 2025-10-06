import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question as QuestionModel, Answer } from '../../models/question.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class QuestionComponent implements OnInit {
  preguntaActual: QuestionModel | undefined;
  respuestasAleatorias: Answer[] = [];
  respuestaSeleccionada: number[] = [];
  haRespondido: boolean = false;
  esCorrecta: boolean = false;
  totalPreguntas: number = 0;
  aciertos: number = 0;
  errores: number = 0;
  preguntasRestantes: number[] = [];
  preguntasRespondidas: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.inicializarSesion();
  }

  inicializarSesion() {
    const todasLasPreguntas = this.dataService.getQuestions();
    this.totalPreguntas = todasLasPreguntas.length;
    this.preguntasRestantes = this.dataService.getQuestionIds();
    this.preguntasRestantes = this.aleatorizarArray([...this.preguntasRestantes]);
    this.aciertos = 0;
    this.errores = 0;
    this.preguntasRespondidas = 0;
    this.cargarSiguientePregunta();
  }

  cargarSiguientePregunta() {
    if (this.preguntasRestantes.length === 0) {
      // Todas las preguntas respondidas
      this.preguntaActual = undefined;
      return;
    }

    const siguienteId = this.preguntasRestantes[0];
    this.preguntaActual = this.dataService.getQuestionById(siguienteId);
    this.respuestaSeleccionada = [];
    this.haRespondido = false;
    this.esCorrecta = false;

    if (this.preguntaActual) {
      this.respuestasAleatorias = this.aleatorizarArray([...this.preguntaActual.respuestas]);
    }
  }

  // Función para aleatorizar array
  aleatorizarArray<T>(array: T[]): T[] {
    const nuevoArray = [...array];
    for (let i = nuevoArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
    }
    return nuevoArray;
  }

  toggleRespuesta(id: number) {
    if (this.haRespondido) return;

    if (!this.preguntaActual) return;

    if (this.preguntaActual.multiple) {
      const index = this.respuestaSeleccionada.indexOf(id);
      if (index > -1) {
        this.respuestaSeleccionada.splice(index, 1);
      } else {
        this.respuestaSeleccionada.push(id);
      }
    } else {
      this.respuestaSeleccionada = [id];
    }
  }

  verificarRespuesta() {
    if (!this.preguntaActual || this.respuestaSeleccionada.length === 0) return;

    // Mapear IDs aleatorizados a IDs originales para verificación
    const idsOriginales = this.respuestaSeleccionada.map(idAleatorio => {
      const respuesta = this.respuestasAleatorias.find(r => r.id === idAleatorio);
      return respuesta ? respuesta.id : idAleatorio;
    });

    const respuestasCorrectas = this.preguntaActual.respuestas
      .filter(r => r.correcta)
      .map(r => r.id);

    const todasCorrectasSeleccionadas = respuestasCorrectas.every(id =>
      idsOriginales.includes(id)
    );

    const soloCorrectasSeleccionadas = idsOriginales.every(id =>
      respuestasCorrectas.includes(id)
    );

    this.esCorrecta = todasCorrectasSeleccionadas && soloCorrectasSeleccionadas;

    if (this.esCorrecta) {
      this.aciertos++;
    } else {
      this.errores++;
    }

    this.haRespondido = true;
    this.preguntasRespondidas++;
  }

  siguientePregunta() {
    // Remover la pregunta actual de las restantes
    if (this.preguntaActual) {
      this.preguntasRestantes = this.preguntasRestantes.filter(id => id !== this.preguntaActual!.id);
    }
    this.cargarSiguientePregunta();
  }

  reiniciarSesion() {
    this.inicializarSesion();
  }

  esRespuestaCorrecta(id: number): boolean {
    if (!this.preguntaActual || !this.haRespondido) return false;
    const respuesta = this.respuestasAleatorias.find(r => r.id === id);
    return respuesta ? respuesta.correcta : false;
  }

  esRespuestaSeleccionadaIncorrecta(id: number): boolean {
    if (!this.preguntaActual || !this.haRespondido) return false;
    const respuesta = this.respuestasAleatorias.find(r => r.id === id);
    return !!respuesta && this.respuestaSeleccionada.includes(id) && !respuesta.correcta;
  }

  // Nuevo: Obtener símbolo para el checkbox
  obtenerSimboloCheckbox(id: number): string {
    if (!this.preguntaActual) return '○';

    const estaSeleccionada = this.respuestaSeleccionada.includes(id);

    if (this.preguntaActual.multiple) {
      return estaSeleccionada ? '☑' : '☐';
    } else {
      return estaSeleccionada ? '●' : '○';
    }
  }
}
