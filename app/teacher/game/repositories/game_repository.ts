import Game from '#core/models/game'
import { ResultOf } from '../../../../types/common.js'

interface GameDTO {
  quizId: number
}

export type GameListQueryResult = ResultOf<GameRepository, 'findAll'>
export type GameFindQueryResult = ResultOf<GameRepository, 'findById'>

export class GameRepository {
  async findAll() {
    let query = Game.query().preload('users')
    return query
  }

  async findById(id: number) {
    let query = Game.query()
      .where('id', id)
      .preload('users', (gameUserQuery) => {
        gameUserQuery.preload('user')
      })
    return query.firstOrFail()
  }

  async create(payload: GameDTO) {
    return await Game.create(payload)
  }
}
