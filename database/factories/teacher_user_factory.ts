import factory from '@adonisjs/lucid/factories'
import User from '#core/models/user'
import { UserRole } from '#auth/enums/user_role'

export const TeacherUserFactory = factory
  .define(User, async () => {
    return {
      username: 'LaFibreDuDev',
      lastname: 'KUHN',
      firstname: 'Yannick',
      email: 'admin@demo.fr',
      password: 'secret',
      role: UserRole.Teacher,
    }
  })
  .build()
