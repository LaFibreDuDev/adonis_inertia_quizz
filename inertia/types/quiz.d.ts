export interface Quiz {
  title: string
  minimum_score: number
  success_message: string
  failure_message: string
  questions: Question[]
}

export interface Question {
  question: string
  choices: string[]
  correct_answer: string
}
