import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { GameRepository } from '#teacher/game/repositories/game_repository'
import { createGameValidator } from '#teacher/game/validators/game'

@inject()
export default class GameController {
  constructor(private gameRepository: GameRepository) {}

  async list({ inertia }: HttpContext) {
    const games = await this.gameRepository.findAll()
    return inertia.render('teacher/game/list', { games: games })
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createGameValidator)
    const game = await this.gameRepository.create(payload)
    return response.redirect().toRoute('teacher.game.list')
  }

  async pending({ inertia, params }: HttpContext) {
    const game = await this.gameRepository.findById(params.id)
    return inertia.render('teacher/game/pending', { game })
  }
}
