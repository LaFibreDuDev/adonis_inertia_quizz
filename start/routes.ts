/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const CorePageController = () => import('#core/controllers/page_controller')
const AuthController = () => import('#auth/controllers/auth_controller')

const StudentPageController = () => import('#student/page/controllers/page_controller')
const QuizController = () => import('#teacher/quiz/controllers/quiz_controller')
const QuestionController = () => import('#teacher/question/controllers/question_controller')

router
  .group(() => {
    router.get('/signin', [AuthController, 'signin']).as('signin')
    router.post('/store', [AuthController, 'store']).as('store')
    router.get('/login', [AuthController, 'login']).as('login')
    router.post('/login', [AuthController, 'processLogin']).as('login.process')
    router.get('/logout', [AuthController, 'logout']).as('logout').use(middleware.auth())
  })
  .as('auth')
  .prefix('auth')

router
  .group(() => {
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
  })
  .as('teacher')
  .prefix('teacher')
  .use([middleware.auth(), middleware.teacher()])

router
  .group(() => {
    router.get('/', [StudentPageController, 'home']).as('home')
    router.get('/quiz', [StudentPageController, 'exampleQuiz']).as('quiz.example')
    router.get('/about', [StudentPageController, 'about']).as('about')
  })
  .as('student')
  .prefix('student')
  .use(middleware.auth())

router.get('/', [CorePageController, 'home']).as('home')
