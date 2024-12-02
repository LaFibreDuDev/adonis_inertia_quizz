import Response from '#core/models/response'

interface CreateResponseDTO {
  questionId: number
  title: string
  correct: boolean
}

interface UpdateResponseDTO {
  title: string
  correct: boolean
}

export class ResponseRepository {
  async create(payload: CreateResponseDTO) {
    return await Response.create(payload)
  }

  async findById(id: number) {
    return await Response.findOrFail(id)
  }

  async edit(id: number, payload: UpdateResponseDTO) {
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
