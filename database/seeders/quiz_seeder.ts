import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { StudentUserFactory } from '#database/factories/student_user_factory'
import { TeacherUserFactory } from '#database/factories/teacher_user_factory'
import { QuizFactory } from '#database/factories/quiz_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await StudentUserFactory.create()
    const teacher = await TeacherUserFactory.create()
    await QuizFactory.merge({ createdBy: teacher.id, updatedBy: teacher.id }).createMany(10)
  }
}
