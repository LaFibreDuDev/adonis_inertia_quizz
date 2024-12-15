import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeCreate,
  beforeUpdate,
  belongsTo,
  column,
  hasMany,
} from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Quiz from '#core/models/quiz'
import User from '#core/models/user'
import { getCurrentUserId } from '#core/models/utils/get_current_user'
import GameUser from '#core/models/game_user'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare quizId: number

  @belongsTo(() => Quiz, {
    foreignKey: 'quizId',
  })
  declare quiz: BelongsTo<typeof Quiz>

  @hasMany(() => GameUser, {
    foreignKey: 'gameId',
  })
  declare users: HasMany<typeof GameUser>

  @column()
  declare createdBy: number

  @belongsTo(() => User, {
    foreignKey: 'createdBy',
  })
  declare creator: BelongsTo<typeof User>

  @column()
  declare updatedBy: number

  @belongsTo(() => User, {
    foreignKey: 'updatedBy',
  })
  declare updater: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  public static async setCreatedBy(game: Game) {
    try {
      game.createdBy = await getCurrentUserId()
      game.updatedBy = game.createdBy
    } catch (error) {}
  }

  @beforeUpdate()
  public static async setUpdatedBy(game: Game) {
    try {
      game.updatedBy = await getCurrentUserId()
    } catch (error) {}
  }
}
