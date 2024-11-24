import vine from '@vinejs/vine'
import { defineValidator } from '#validators/main'

const properties = {
  quizId: vine.number(),
  title: vine.string().trim().minLength(4).maxLength(256),
  responses: vine.array(
    vine.object({
      title: vine.string().trim().minLength(4).maxLength(256),
      correct: vine.boolean(),
    })
  ),
}

export const createQuestionValidator = defineValidator(properties)
