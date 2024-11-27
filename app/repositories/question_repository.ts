import Question from '#models/question'
import { ResultOf } from '../../types/common.js'

interface QuestionDTO {
  title: string
  quizId: number
}

export type QuestionFindQueryResult = ResultOf<QuestionRepository, 'findById'>

export class QuestionRepository {
  async create(payload: QuestionDTO): Promise<Question> {
    return await Question.create(payload)
  }

  async findById(
    id: number,
    withQuiz: boolean = false,
    withResponses: boolean = false
  ): Promise<Question> {
    const query = Question.query().where('id', id)
    if (withQuiz) {
      query.preload('quiz')
    }
    if (withResponses) {
      query.preload('responses')
    }
    return await query.firstOrFail()
  }

  async edit(id: number, payload: QuestionDTO) {
    const question = await this.findById(id)
    if (question) {
      return await question.merge(payload).save()
    }
    throw new Error("La question n'a pas été trouvée !")
  }

  async delete(id: number) {
    const question = await this.findById(id)
    if (question) {
      return await question.delete()
    }
    throw new Error("La question n'a pas été trouvée !")
  }
}
