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
  isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  constructor() {
    const saved = localStorage.getItem('appian-theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.isDark = true;
    } else if (saved === 'light') {
      document.documentElement.removeAttribute('data-theme');
      this.isDark = false;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        this.isDark = true;
      }
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('appian-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('appian-theme', 'light');
    }
  }
}
