import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question, Answer } from '../../models/question.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class QuestionComponent implements OnInit {
  preguntaActual: Question | undefined;
  respuestasAleatorias: Answer[] = [];
  respuestaSeleccionada: number[] = [];
  haRespondido: boolean = false;
  esCorrecta: boolean = false;
  totalPreguntas: number = 0;
  aciertos: number = 0;
  errores: number = 0;
  preguntasRestantes: number[] = [];
  preguntasRespondidas: number = 0;
  preguntasFalladas: number[] = [];

  // Temporizador y Modos
  tiempoTotal: number = 60 * 60;
  tiempoRestante: number = this.tiempoTotal;
  temporizador: any;
  modo: 'examen-curso' | 'examen-completo' | 'estudio' = 'examen-curso';

  // Propiedades para modo estudio
  mostrarExplicaciones: boolean = false;
  preguntaSaltada: boolean = false;

  // Getter para tiempo formateado
  get tiempoFormateado(): string {
    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
    return `${minutos}:${segundos.toString().padStart(2, '0')}`;
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.inicializarSesion();
    if (this.modo !== 'estudio') {
      this.iniciarTemporizador();
    }
  }

  inicializarSesion() {
    let preguntasSeleccionadas: Question[];

    // SELECCIÓN DE PREGUNTAS SEGÚN MODO
    if (this.modo === 'examen-curso') {
      // Examen Curso: 60 preguntas del curso oficial
      preguntasSeleccionadas = this.dataService.getQuestions();
    } else if (this.modo === 'examen-completo') {
      // Examen Completo: 60 preguntas aleatorias de todas las fuentes
      const todasLasFuentes = this.dataService.getAllQuestions(); // 85 preguntas
      preguntasSeleccionadas = this.aleatorizarArray([...todasLasFuentes]).slice(0, 60); // 60 aleatorias
    } else {
      // Modo Estudio: todas las preguntas (85)
      preguntasSeleccionadas = this.dataService.getAllQuestions();
    }

    this.totalPreguntas = preguntasSeleccionadas.length;
    this.preguntasRestantes = preguntasSeleccionadas.map(q => q.id);
    this.preguntasRestantes = this.aleatorizarArray([...this.preguntasRestantes]);
    this.aciertos = 0;
    this.errores = 0;
    this.preguntasRespondidas = 0;
    this.preguntasFalladas = [];
    this.tiempoRestante = this.tiempoTotal;
    this.mostrarExplicaciones = false;
    this.preguntaSaltada = false;
    this.cargarSiguientePregunta();
  }

  cambiarModo(nuevoModo: 'examen-curso' | 'examen-completo' | 'estudio') {
    if (this.temporizador) {
      clearInterval(this.temporizador);
    }
    this.modo = nuevoModo;
    this.inicializarSesion();

    // Iniciar timer solo en modos examen
    if (this.modo !== 'estudio') {
      this.iniciarTemporizador();
    }
  }

  cargarSiguientePregunta() {
    if (this.preguntasRestantes.length === 0) {
      if (this.modo === 'estudio' && this.preguntasFalladas.length > 0) {
        this.preguntasRestantes = [...this.preguntasFalladas];
        this.preguntasFalladas = [];
        this.preguntasRestantes = this.aleatorizarArray(this.preguntasRestantes);
      } else {
        this.preguntaActual = undefined;
        if (this.temporizador) {
          clearInterval(this.temporizador);
        }
        return;
      }
    }

    const siguienteId = this.preguntasRestantes[0];
    this.preguntaActual = this.dataService.getQuestionById(siguienteId);
    this.respuestaSeleccionada = [];
    this.haRespondido = false;
    this.esCorrecta = false;
    this.mostrarExplicaciones = false;
    this.preguntaSaltada = false;

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
    if (this.haRespondido && this.modo !== 'estudio') return;
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

    // Auto-verificar en modo estudio para preguntas simples
    if (this.modo === 'estudio' && !this.preguntaActual.multiple && this.respuestaSeleccionada.length === 1) {
      setTimeout(() => this.verificarRespuesta(), 300);
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
      // En modo estudio, añadir a preguntas falladas para repetir
      if (this.modo === 'estudio' && this.preguntaActual) {
        this.preguntasFalladas.push(this.preguntaActual.id);
      }
    }

    this.haRespondido = true;
    this.preguntasRespondidas++;

    // En modo estudio, mostrar explicaciones inmediatamente
    if (this.modo === 'estudio') {
      this.mostrarExplicaciones = true;
    }
  }

  saltarPregunta() {
    if (!this.preguntaActual) return;

    this.preguntaSaltada = true;
    this.haRespondido = true;
    this.mostrarExplicaciones = true;

    // Contar como error y añadir a preguntas para repasar
    this.errores++;
    if (this.modo === 'estudio') {
      this.preguntasFalladas.push(this.preguntaActual.id);
    }

    this.preguntasRespondidas++;
  }

  // ELIMINADO: método verExplicacion() - YA NO ES NECESARIO

  // Método: Finalizar sesión de estudio
  finalizarSesionEstudio() {
    // Forzar la finalización mostrando estadísticas
    this.preguntasRestantes = [];
    this.preguntaActual = undefined;
    this.mostrarExplicaciones = true;
  }

  siguientePregunta() {
    // Remover la pregunta actual de las restantes
    if (this.preguntaActual) {
      this.preguntasRestantes = this.preguntasRestantes.filter(id => id !== this.preguntaActual!.id);
    }
    this.cargarSiguientePregunta();
  }

  reiniciarSesion() {
    if (this.temporizador) {
      clearInterval(this.temporizador);
    }
    this.inicializarSesion();
    if (this.modo !== 'estudio') {
      this.iniciarTemporizador();
    }
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

  obtenerSimboloCheckbox(id: number): string {
    if (!this.preguntaActual) return '○';

    const estaSeleccionada = this.respuestaSeleccionada.includes(id);

    if (this.preguntaActual.multiple) {
      return estaSeleccionada ? '☑' : '☐';
    } else {
      return estaSeleccionada ? '●' : '○';
    }
  }

  iniciarTemporizador() {
    this.temporizador = setInterval(() => {
      this.tiempoRestante--;

      // Alerta últimos 5 minutos
      if (this.tiempoRestante === 5 * 60) {
        alert('⏰ ¡Solo 5 minutos restantes!');
      }

      // Tiempo agotado - auto-enviar
      if (this.tiempoRestante <= 0) {
        this.finalizarExamenPorTiempo();
      }
    }, 1000);
  }

  finalizarExamenPorTiempo() {
    clearInterval(this.temporizador);
    this.preguntasRestantes = [];
    this.preguntaActual = undefined;
    alert('⌛ Tiempo agotado. Mostrando resultados...');
  }

  ngOnDestroy() {
    if (this.temporizador) {
      clearInterval(this.temporizador);
    }
  }
}
