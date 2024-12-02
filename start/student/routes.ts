import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const StudentPageController = () => import('#student/page/controllers/page_controller')

export default function studentRoutes() {
  router
    .group(() => {
      router.get('/', [StudentPageController, 'home']).as('home')
      router.get('/quiz', [StudentPageController, 'exampleQuiz']).as('quiz.example')
      router.get('/about', [StudentPageController, 'about']).as('about')
    })
    .as('student')
    .prefix('student')
    .use(middleware.auth())
}
