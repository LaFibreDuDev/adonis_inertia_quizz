import factory from '@adonisjs/lucid/factories'
import User from '#core/models/user'

export const StudentUserFactory = factory
  .define(User, async () => {
    return {
      username: 'JohnDoe',
      lastname: 'DOE',
      firstname: 'John',
      email: 'john@doe.fr',
      password: 'secret',
    }
  })
  .build()
