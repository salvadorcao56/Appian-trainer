import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question'; // ← Nombre corregido

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuestionComponent], // ← Nombre corregido
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '¡Entrenador Appian!';
}
