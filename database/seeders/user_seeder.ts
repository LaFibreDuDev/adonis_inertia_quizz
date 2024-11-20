import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.truncate()
    await User.create({
      username: 'LaFibreDuDev',
      lastname: 'KUHN',
      firstname: 'Yannick',
      email: 'admin@demo.fr',
      password: 'secret',
    })
  }
}
