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
import { getCurrentUserId } from '#models/utils/get_current_user'
import Question from '#models/question'
import { HttpContext } from '@adonisjs/core/http'

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
    quiz.createdBy = await getCurrentUserId()
    quiz.updatedBy = quiz.createdBy
  }

  @beforeUpdate()
  public static async setUpdatedBy(quiz: Quiz) {
    quiz.updatedBy = await getCurrentUserId()
  }
}
