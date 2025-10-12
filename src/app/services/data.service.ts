import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { QUESTIONS } from '../data/questions.data';
import { QUESTIONS_EXTRA } from '../data/questions-extra.data';
import { QUESTIONS_AI } from '../data/questions-ai.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Método original - solo preguntas del curso
  getQuestions(): Question[] {
    return QUESTIONS;
  }

  // NUEVO MÉTODO - todas las preguntas combinadas
  getAllQuestions(): Question[] {
    return [
      ...QUESTIONS,          // 60 preguntas curso (1-60)
      ...QUESTIONS_EXTRA,    // 5 preguntas extra (61-65)
      ...QUESTIONS_AI        // 20 preguntas AI (501-520)
    ];
  }

  getQuestionById(id: number): Question | undefined {
    // Buscar en TODAS las preguntas
    return this.getAllQuestions().find((q: Question) => q.id === id);
  }

  getRandomQuestion(): Question {
    const todasLasPreguntas = this.getAllQuestions();
    const randomIndex = Math.floor(Math.random() * todasLasPreguntas.length);
    return todasLasPreguntas[randomIndex];
  }

  getQuestionIds(): number[] {
    return this.getAllQuestions().map((q: Question) => q.id);
  }
}
