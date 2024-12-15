import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import quizRoutes from '#start/teacher/quiz_routes'
import questionRoutes from '#start/teacher/question_routes'
import gameRoutes from '#start/teacher/game_routes'

export default function teacherRoutes() {
  router
    .group(() => {
      gameRoutes()
      quizRoutes()
      questionRoutes()
    })
    .as('teacher')
    .prefix('teacher')
    .use([middleware.auth(), middleware.teacher()])
}
