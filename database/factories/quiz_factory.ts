import factory from '@adonisjs/lucid/factories'
import Quiz from '#core/models/quiz'

export const QuizFactory = factory
  .define(Quiz, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
    }
  })
  .build()
