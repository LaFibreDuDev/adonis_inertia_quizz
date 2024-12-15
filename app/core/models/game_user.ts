import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#core/models/user'
import Game from '#core/models/game'

export default class GameUser extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare gameId: number

  @belongsTo(() => Game, {
    foreignKey: 'gameId',
  })
  declare game: BelongsTo<typeof Game>

  @column()
  declare userId: number

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
