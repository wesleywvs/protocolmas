
export enum AppState {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  DISQUALIFIED = 'DISQUALIFIED',
  LOADING = 'LOADING',
  RESULT = 'RESULT',
  SALES = 'SALES'
}

export enum ProfileType {
  COELHO = 'COELHO',
  MEIA_BOMBA = 'MEIA-BOMBA',
  ANSIOSO = 'ANSIOSO',
  PERFORMANCE = 'PERFORMANCE',
  NONE = 'NONE'
}

export interface Question {
  id: number;
  fase: string;
  text: string;
  options: string[];
  type?: 'single' | 'cta' | 'scale';
}
