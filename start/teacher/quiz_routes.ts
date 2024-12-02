import router from '@adonisjs/core/services/router'

const QuizController = () => import('#teacher/quiz/controllers/quiz_controller')

export default function quizRoutes() {
  router
    .group(() => {
      router.get('/', [QuizController, 'list']).as('list')
      router
        .get('/show/:id', [QuizController, 'show'])
        .as('show')
        .where('id', {
          match: /^[0-9]+$/,
        })
      router.get('/add', [QuizController, 'add']).as('add')
      router.post('/store', [QuizController, 'store']).as('store')
      router
        .get('/edit/:id', [QuizController, 'edit'])
        .as('edit')
        .where('id', {
          match: /^[0-9]+$/,
        })
      router
        .put('/update/:id', [QuizController, 'update'])
        .as('update')
        .where('id', {
          match: /^[0-9]+$/,
        })
      router
        .delete('/destroy/:id', [QuizController, 'destroy'])
        .as('destroy')
        .where('id', {
          match: /^[0-9]+$/,
        })
    })
    .as('quiz')
    .prefix('quiz')
}
