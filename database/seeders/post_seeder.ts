import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Post from '../../app/core/models/post'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    // TODO: revoir cette partie
    await Post.truncate()
    await Post.createMany(
      Array.from({ length: 10 }).map(() => ({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(2),
      }))
    )
  }
}
