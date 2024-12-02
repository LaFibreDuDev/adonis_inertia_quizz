import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, beforeUpdate, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Question from './question.js'
import { getCurrentUserId } from './utils/get_current_user.js'

export default class Response extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare correct: boolean

  @column()
  declare questionId: number

  @belongsTo(() => Question, {
    foreignKey: 'questionId',
  })
  declare question: BelongsTo<typeof Question>

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
  public static async setCreatedBy(response: Response) {
    try {
      response.createdBy = await getCurrentUserId()
      response.updatedBy = response.createdBy
    } catch (error) {}
  }

  @beforeUpdate()
  public static async setUpdatedBy(response: Response) {
    try {
      response.updatedBy = await getCurrentUserId()
    } catch (error) {}
  }
}
