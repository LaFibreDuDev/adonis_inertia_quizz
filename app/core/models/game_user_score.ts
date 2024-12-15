import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import GameUser from '#core/models/game_user'
import Question from '#core/models/question'

export default class GameUserScore extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare score: number

  @column()
  declare gameUserId: number

  @belongsTo(() => GameUser, {
    foreignKey: 'gameUserId',
  })
  declare gameUser: BelongsTo<typeof GameUser>

  @column()
  declare questionId: number

  @belongsTo(() => Question, {
    foreignKey: 'questionId',
  })
  declare question: BelongsTo<typeof Question>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
