import vine from '@vinejs/vine'
import { defineValidator } from '#core/validators/main'

const properties = {
  gameId: vine.number(),
  userId: vine.number(),
}

export const createGameUserValidator = defineValidator(properties)
