import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { GameUserRepository } from '#teacher/game/repositories/game_user_repository'
import { createGameUserValidator } from '#teacher/game/validators/game_user'

@inject()
export default class GameUserController {
  constructor(private gameUserRepository: GameUserRepository) {}

  async join({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createGameUserValidator)
    await this.gameUserRepository.create(payload)
    return response.redirect().toRoute('teacher.game.pending', { id: payload.gameId })
  }
}
