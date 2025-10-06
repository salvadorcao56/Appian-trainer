import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ← AÑADIR
import { Question as QuestionModel } from '../../models/question.model'; // ← Cambiar nombre
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  standalone: true, // ← AÑADIR
  imports: [CommonModule], // ← AÑADIR
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class QuestionComponent implements OnInit { // ← Cambiar nombre
  preguntaActual: QuestionModel | undefined;
  respuestaSeleccionada: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.cargarPreguntaAleatoria();
  }

  cargarPreguntaAleatoria() {
    this.preguntaActual = this.dataService.getRandomQuestion();
    this.respuestaSeleccionada = [];
  }

  toggleRespuesta(id: number) {
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
}
