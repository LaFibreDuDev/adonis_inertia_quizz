import router from '@adonisjs/core/services/router'

const GameController = () => import('#teacher/game/controllers/game_controller')

export default function gameRoutes() {
  router
    .group(() => {
      router.get('/', [GameController, 'list']).as('list')
      router.post('/store', [GameController, 'store']).as('store')
    })
    .as('game')
    .prefix('game')
}
