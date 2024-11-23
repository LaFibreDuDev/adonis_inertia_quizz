import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, beforeUpdate, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { HttpContext } from '@adonisjs/core/http'
import Question from '#models/question'
import { getCurrentUserId } from '#models/utils/get_current_user'

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
    this.createdBy = await getCurrentUserId()
    this.updatedBy = this.createdBy
  }

  @beforeUpdate()
  public static async setUpdatedBy(response: Response) {
    this.updatedBy = await getCurrentUserId()
  }
}
