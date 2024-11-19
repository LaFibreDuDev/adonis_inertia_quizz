import vine from '@vinejs/vine'

const properties = {
  title: vine.string().trim().minLength(4).maxLength(256),
  content: vine.string().trim().minLength(4),
}

export const createPostValidator = vine.compile(vine.object(properties))

export const editPostValidator = vine.compile(vine.object(properties))
