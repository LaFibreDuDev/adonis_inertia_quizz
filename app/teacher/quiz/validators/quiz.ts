import vine from '@vinejs/vine'
import { defineValidator } from '#core/validators/main'

const properties = {
  title: vine.string().trim().minLength(4).maxLength(256),
}

const propertiesFromPrompt = {
  title: properties.title,
  content: vine.string().trim().minLength(50),
}

export const createQuizValidator = defineValidator(properties)
export const editQuizValidator = defineValidator(properties)
export const createQuizFromPromptValidator = defineValidator(propertiesFromPrompt)
