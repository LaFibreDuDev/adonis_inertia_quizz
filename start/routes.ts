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
import studentRoutes from '#start/student/routes'
import teacherRoutes from '#start/teacher/routes'
import transmit from '@adonisjs/transmit/services/main'

transmit.registerRoutes()

const CorePageController = () => import('#core/controllers/page_controller')
const AuthController = () => import('#auth/controllers/auth_controller')
const SocialController = () => import('#auth/controllers/social_controller')

router.get('/github/redirect', [SocialController, 'githubRedirect']).as('github.redirect')
router.get('/github/callback', [SocialController, 'githubCallback']).as('github.callback')
router.get('/google/redirect', [SocialController, 'googleRedirect']).as('google.redirect')
router.get('/google/callback', [SocialController, 'googleCallback']).as('google.callback')

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

studentRoutes()
teacherRoutes()

router.get('/', [CorePageController, 'home']).as('home')
