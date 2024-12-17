import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { GameUserRepository } from '#student/game/repositories/game_user_repository'
import { createGameUserValidator } from '#student/game/validators/game_user'
import transmit from '@adonisjs/transmit/services/main'

@inject()
export default class GameUserController {
  constructor(private gameUserRepository: GameUserRepository) {}

  pending({ inertia, params }: HttpContext) {
    return inertia.render('student/game/pending', { gameId: params.id })
  }

  async join({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createGameUserValidator)
    const gameUser = await this.gameUserRepository.create(payload)
    if (gameUser) {
      transmit.broadcast(`game/${payload.gameId}`, {
        message: `user ${payload.userId} joined this game !`,
        userId: payload.userId,
        gameUser: JSON.stringify(gameUser),
      })
    }
    return response.redirect().toRoute('student.game.pending', { id: payload.gameId })
  }
}
