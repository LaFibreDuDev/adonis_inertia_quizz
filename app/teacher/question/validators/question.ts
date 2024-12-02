import vine from '@vinejs/vine'
import { defineValidator } from '#core/validators/main'

const properties = {
  quizId: vine.number(),
  title: vine.string().trim().minLength(4).maxLength(256),
  responses: vine.array(
    vine.object({
      id: vine.number().optional(),
      title: vine.string().trim().minLength(4).maxLength(256),
      correct: vine.boolean(),
    })
  ),
}

export const createQuestionValidator = defineValidator(properties)
export const editQuestionValidator = defineValidator(properties)
