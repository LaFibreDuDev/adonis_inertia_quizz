import Game from '#core/models/game'
import { ResultOf } from '../../../../types/common.js'

interface GameDTO {
  quizId: number
}

export type GameListQueryResult = ResultOf<GameRepository, 'findAll'>

export class GameRepository {
  async findAll() {
    let query = Game.query().preload('users')
    return query
  }

  async create(payload: GameDTO) {
    return await Game.create(payload)
  }
}
