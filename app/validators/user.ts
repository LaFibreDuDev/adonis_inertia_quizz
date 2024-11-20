import vine from '@vinejs/vine'

const properties = {
  username: vine.string().trim().minLength(4).maxLength(256),
  lastname: vine.string().trim().minLength(4).maxLength(256),
  firstname: vine.string().trim().minLength(4).maxLength(256),
  email: vine.string().trim().minLength(4).maxLength(256),
  password: vine.string().trim().minLength(4).maxLength(256),
}

export const signinValidator = vine.compile(vine.object(properties))
