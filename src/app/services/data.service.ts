import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { QUESTIONS } from '../data/questions.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getQuestions(): Question[] {
    return QUESTIONS;
  }

  getQuestionById(id: number): Question | undefined {
    return QUESTIONS.find((q: Question) => q.id === id);
  }

  getRandomQuestion(): Question {
    const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
    return QUESTIONS[randomIndex];
  }

  getQuestionIds(): number[] {
    return QUESTIONS.map((q: Question) => q.id);
  }
}
