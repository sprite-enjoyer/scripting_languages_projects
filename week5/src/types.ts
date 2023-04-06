export type Answer = "a" | "b" | "c" | "d" | null;

export interface Question {
  question: string,
  answers: [string, string, string, string],
  correct: Answer,
}