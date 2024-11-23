import Question from '#models/post'

interface QuestionDTO {
  title: string
}

export class QuestionRepository {
  async create(payload: QuestionDTO) {
    return await Question.create(payload)
  }

  async findById(id: number) {
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
