import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeCreate,
  beforeUpdate,
  belongsTo,
  column,
  hasMany,
} from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { getCurrentUserId } from './utils/get_current_user.js'
import Question from './question.js'

export default class Quiz extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @hasMany(() => Question, {
    foreignKey: 'quizId',
  })
  declare questions: HasMany<typeof Question>

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
  public static async setCreatedBy(quiz: Quiz) {
    try {
      quiz.createdBy = await getCurrentUserId()
      quiz.updatedBy = quiz.createdBy
    } catch (error) {}
  }

  @beforeUpdate()
  public static async setUpdatedBy(quiz: Quiz) {
    try {
      quiz.updatedBy = await getCurrentUserId()
    } catch (error) {}
  }
}
