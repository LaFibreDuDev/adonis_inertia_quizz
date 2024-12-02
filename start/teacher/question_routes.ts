import router from '@adonisjs/core/services/router'

const QuestionController = () => import('#teacher/question/controllers/question_controller')

export default function questionRoutes() {
  router
    .group(() => {
      router.get('/quiz/:id/add', [QuestionController, 'add']).as('add')
      router.post('/store', [QuestionController, 'store']).as('store')
      router.get('/quiz/:id/edit', [QuestionController, 'edit']).as('edit')
      router
        .put('/update/:id', [QuestionController, 'update'])
        .as('update')
        .where('id', {
          match: /^[0-9]+$/,
        })
      router
        .delete('/quiz/:quizid/destroy/:id', [QuestionController, 'destroy'])
        .as('destroy')
        .where('quizid', {
          match: /^[0-9]+$/,
        })
        .where('id', {
          match: /^[0-9]+$/,
        })
    })
    .as('question')
    .prefix('question')
}
