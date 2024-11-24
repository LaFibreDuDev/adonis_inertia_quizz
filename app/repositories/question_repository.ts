import Question from '#models/question'

interface QuestionDTO {
  title: string
  quizId: number
}

export class QuestionRepository {
  async create(payload: QuestionDTO): Promise<Question> {
    return await Question.create(payload)
  }

  async findById(id: number, withQuiz: boolean = false) {
    if (withQuiz) {
      return Question.query().preload('quiz').where('id', id).firstOrFail()
    }
    return await Question.find(id)
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
