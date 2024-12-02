import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '../../app/core/models/user'
import { UserRole } from '../../app/core/enums/user_role.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    // TODO: revoir cette partie
    await User.truncate()
    await User.create({
      username: 'JohnDoe',
      lastname: 'DOE',
      firstname: 'John',
      email: 'john@doe.fr',
      password: 'secret',
    })
    await User.create({
      username: 'LaFibreDuDev',
      lastname: 'KUHN',
      firstname: 'Yannick',
      email: 'admin@demo.fr',
      password: 'secret',
      role: UserRole.Teacher,
    })
  }
}
