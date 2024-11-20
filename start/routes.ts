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

const PostController = () => import('#controllers/post_controller')
const AboutController = () => import('#controllers/about_controller')
const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    router.get('/signin', [AuthController, 'signin']).as('signin')
    router.post('/store', [AuthController, 'store']).as('store')
    router.get('/login', [AuthController, 'login']).as('login').use(middleware.guest())
    router.post('/login', [AuthController, 'processLogin']).as('login.process')
    router.get('/logout', [AuthController, 'logout']).as('logout').use(middleware.auth())
  })
  .as('auth')
  .prefix('auth')

router
  .group(() => {
    router.get('/', [PostController, 'list']).as('list')
    router.get('/add', [PostController, 'add']).as('add')
    router.post('/store', [PostController, 'store']).as('store')
    router
      .get('/edit/:id', [PostController, 'edit'])
      .as('edit')
      .where('id', {
        match: /^[0-9]+$/,
      })
    router
      .put('/update/:id', [PostController, 'update'])
      .as('update')
      .where('id', {
        match: /^[0-9]+$/,
      })
    router
      .delete('/destroy/:id', [PostController, 'destroy'])
      .as('destroy')
      .where('id', {
        match: /^[0-9]+$/,
      })
  })
  .as('blog')
  .prefix('blog')
  .use(middleware.auth())

router.get('/about', [AboutController, 'index']).as('about')
