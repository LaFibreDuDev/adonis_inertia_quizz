import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const StudentPageController = () => import('#student/page/controllers/page_controller')
const GameUserController = () => import('#student/game/controllers/game_user_controller')

export default function studentRoutes() {
  router
    .group(() => {
      router.get('/', [StudentPageController, 'home']).as('home')
      router.get('/quiz', [StudentPageController, 'exampleQuiz']).as('quiz.example')
      router.get('/about', [StudentPageController, 'about']).as('about')
      router
        .get('/game/pending/:id', [GameUserController, 'pending'])
        .as('game.pending')
        .where('id', {
          match: /^[0-9]+$/,
        })
      router.post('/game/join', [GameUserController, 'join']).as('game.join')
    })
    .as('student')
    .prefix('student')
    .use(middleware.auth())
}
