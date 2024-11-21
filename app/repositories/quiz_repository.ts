import Quiz from '#models/quiz'
import { ResultOf } from '../../types/common.js'

interface QuizDTO {
  title: string
}

export type QuizListQueryResult = ResultOf<QuizRepository, 'findAll'>

export class QuizRepository {
  async findAll() {
    return Quiz.query().preload('creator')
  }

  async create(payload: QuizDTO) {
    return await Quiz.create(payload)
  }

  async findById(id: number) {
    return await Quiz.find(id)
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
