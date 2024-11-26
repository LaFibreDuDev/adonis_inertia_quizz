import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Post from '#models/post'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Post.truncate()
    await Post.createMany(
      Array.from({ length: 10 }).map(() => ({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(2),
      }))
    )
  }
}
