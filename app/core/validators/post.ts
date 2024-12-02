import vine from '@vinejs/vine'
import { defineValidator } from './main.js'

const properties = {
  title: vine.string().trim().minLength(4).maxLength(256),
  content: vine.string().trim().minLength(4),
}

export const createPostValidator = defineValidator(properties)
export const editPostValidator = defineValidator(properties)
