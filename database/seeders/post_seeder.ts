import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { PostFactory } from '#database/factories/post_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await PostFactory.createMany(10)
  }
}
