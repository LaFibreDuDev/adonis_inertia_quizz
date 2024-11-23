import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeCreate,
  beforeUpdate,
  belongsTo,
  column,
  hasMany,
} from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Quiz from '#models/quiz'
import Response from '#models/response'
import { getCurrentUserId } from '#models/utils/get_current_user'

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @hasMany(() => Response, {
    foreignKey: 'questionId',
  })
  declare responses: HasMany<typeof Response>

  @column()
  declare quizId: number

  @belongsTo(() => Quiz, {
    foreignKey: 'quizId',
  })
  declare quiz: BelongsTo<typeof Quiz>

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
  public static async setCreatedBy(question: Question) {
    this.createdBy = await getCurrentUserId()
    this.updatedBy = this.createdBy
  }

  @beforeUpdate()
  public static async setUpdatedBy(question: Question) {
    this.updatedBy = await getCurrentUserId()
  }
}
