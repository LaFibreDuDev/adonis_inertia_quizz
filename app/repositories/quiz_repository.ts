import Quiz from '#models/quiz'
import { ResultOf } from '../../types/common.js'

interface QuizDTO {
  title: string
}

export type QuizListQueryResult = ResultOf<QuizRepository, 'findAll'>
export type QuizFindQueryResult = ResultOf<QuizRepository, 'findById'>

export class QuizRepository {
  async findAll() {
    return Quiz.query().preload('creator')
  }

  async create(payload: QuizDTO) {
    return await Quiz.create(payload)
  }

  async findById(id: number, withQuestions: boolean = false) {
    const quiz = Quiz.query().where('id', id).preload('creator')
    if (withQuestions) {
      return await quiz
        .preload('questions', (questionsQuery) => {
          questionsQuery.preload('responses')
        })
        .firstOrFail()
    }
    return await quiz.firstOrFail()
  }

  async edit(id: number, payload: QuizDTO) {
    const quiz = await this.findById(id)
    if (quiz) {
      return await quiz.merge(payload).save()
    }
    throw new Error("Le quiz n'a pas été trouvé !")
  }

  async delete(id: number) {
    const quiz = await this.findById(id)
    if (quiz) {
      return await quiz.delete()
    }
    throw new Error("Le quiz n'a pas été trouvé !")
  }
}
