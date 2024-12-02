import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import quizRoutes from '#start/teacher/quiz_routes'
import questionRoutes from '#start/teacher/question_routes'

export default function teacherRoutes() {
  router
    .group(() => {
      quizRoutes()
      questionRoutes()
    })
    .as('teacher')
    .prefix('teacher')
    .use([middleware.auth(), middleware.teacher()])
}
