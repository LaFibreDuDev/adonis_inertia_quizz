import Response from '#models/response'

interface ResponseDTO {
  questionId: number
  title: string
  correct: boolean
}

export class ResponseRepository {
  async create(payload: ResponseDTO) {
    return await Response.create(payload)
  }

  async findById(id: number) {
    return await Response.find(id)
  }

  async edit(id: number, payload: ResponseDTO) {
    const response = await this.findById(id)
    if (response) {
      return await response.merge(payload).save()
    }
    throw new Error("La réponse n'a pas été trouvée !")
  }

  async delete(id: number) {
    const response = await this.findById(id)
    if (response) {
      return await response.delete()
    }
    throw new Error("La réponse n'a pas été trouvée !")
  }
}
