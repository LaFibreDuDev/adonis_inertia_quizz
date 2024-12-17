import GameUser from '#core/models/game_user'
import { ResultOf } from '../../../../types/common.js'

interface GameUserDTO {
  gameId: number
  userId: number
}

export type GameCreateQueryResult = ResultOf<GameUserRepository, 'create'>

export class GameUserRepository {
  async create(payload: GameUserDTO) {
    const gameUser = await this.findByGameIdAndUserId(payload.gameId, payload.userId)
    if (!gameUser) {
      console.log('No game user found')
      const newGameUser = await GameUser.create(payload)
      await newGameUser.load('user')
      return newGameUser
    }
  }

  async findByGameIdAndUserId(gameId: number, userId: number) {
    return GameUser.query().where('gameId', gameId).andWhere('userId', userId).first()
  }
}
