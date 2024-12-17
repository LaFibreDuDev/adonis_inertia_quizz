import GameUser from '#core/models/game_user'

interface GameUserDTO {
  gameId: number
  userId: number
}

export class GameUserRepository {
  async create(payload: GameUserDTO) {
    const gameUser = await this.findByGameIdAndUserId(payload.gameId, payload.userId)
    if (!gameUser) {
      console.log('No game user found')
      return await GameUser.create(payload)
    }
  }

  async findByGameIdAndUserId(gameId: number, userId: number) {
    return GameUser.query().where('gameId', gameId).andWhere('userId', userId).first()
  }
}
