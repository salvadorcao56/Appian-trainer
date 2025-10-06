export interface Question {
  id: number;
  contenido: string;
  multiple: boolean;
  respuestas: Answer[];
}

export interface Answer {
  id: number;
  contenido: string;
  correcta: boolean;
  explicacion: string;
}
