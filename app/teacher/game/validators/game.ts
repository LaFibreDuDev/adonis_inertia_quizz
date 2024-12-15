import vine from '@vinejs/vine'
import { defineValidator } from '#core/validators/main'

const properties = {
  quizId: vine.number(),
}

export const createGameValidator = defineValidator(properties)
