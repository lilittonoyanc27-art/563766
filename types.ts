export type GameTab = 'dialogue' | 'part1' | 'millionaire';

export interface DialogueLine {
  id: number;
  speaker: 'Laura' | 'Diego';
  textEs: string;
  textAm: string;
  connectors?: string[];
}

export interface ConectorItem {
  id: string;
  categoryEs: string;
  categoryAm: string;
  questionEs?: string;
  questionAm?: string;
  answerEs: string;
  answerAm: string;
  distractors?: string[];
}

export interface QuienDijoItem {
  id: number;
  questionEs: string;
  questionAm: string;
  options: {
    key: string;
    textEs: string;
    textAm: string;
  }[];
  correct: string;
}

export interface ContinuaFraseItem {
  id: number;
  phraseEs: string;
  phraseAm: string;
  connector: string;
}

export interface CambiaConectorItem {
  id: number;
  originalEs: string;
  originalAm: string;
  targetConnectorEs: string;
  targetConnectorAm: string;
  replacementConnectorEs: string;
  fullRevisedEs: string;
  fullRevisedAm: string;
  options?: string[];
}

export interface GramaticaItem {
  id: number;
  sentenceEs: string;
  sentenceAm: string;
  options: {
    key: string;
    textEs: string;
    textAm?: string;
  }[];
  correct: string;
  ruleExplanationEs: string;
  ruleExplanationAm: string;
}

export interface VerdaderoFalsoItem {
  id: number;
  statementEs: string;
  statementAm: string;
  isTrue: boolean;
  explanationEs: string;
  explanationAm: string;
}

export interface ProfesorProvocaItem {
  id: number;
  teacherEs: string;
  teacherAm: string;
  studentEs: string;
  studentAm: string;
  connectorUsed: string;
}

export interface DebateItem {
  id: number;
  connector: string;
  questionEs: string;
  questionAm: string;
  responseEs: string;
  responseAm: string;
}

export interface CompletaItem {
  id: number;
  leadEs: string;
  leadAm: string;
  completionEs: string;
  completionAm: string;
  connector: string;
}

export interface RetoC1Data {
  promptEs: string;
  promptAm: string;
  requiredConnectors: string[];
  modelResponseEs: string;
  modelResponseAm: string;
}

export interface MillionaireOption {
  key: 'a' | 'b' | 'c' | 'd';
  textEs: string;
  textAm: string;
}

export interface MillionaireQuestion {
  id: number;
  originalNumber: number;
  questionEs: string;
  questionAm: string;
  options: MillionaireOption[];
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanationEs?: string;
  explanationAm?: string;
  prizeAmount: number;
}
