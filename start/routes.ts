/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const PostController = () => import('#controllers/post_controller')
const AboutController = () => import('#controllers/about_controller')

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

router.get('/about', [AboutController, 'index']).as('about')
