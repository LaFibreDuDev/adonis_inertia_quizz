import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { GameUserRepository } from '#student/game/repositories/game_user_repository'
import { createGameUserValidator } from '#student/game/validators/game_user'

@inject()
export default class GameUserController {
  constructor(private gameUserRepository: GameUserRepository) {}

  pending({ inertia, params }: HttpContext) {
    return inertia.render('student/game/pending', { gameId: params.id })
  }

  async join({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createGameUserValidator)
    await this.gameUserRepository.create(payload)
    return response.redirect().toRoute('student.game.pending', { id: payload.gameId })
  }
}
