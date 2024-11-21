import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, beforeUpdate, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { HttpContext } from '@adonisjs/core/http'

export default class Quiz extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

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
    quiz.createdBy = await Quiz.getCurrentUserId()
    quiz.updatedBy = quiz.createdBy
  }

  @beforeUpdate()
  public static async setUpdatedBy(quiz: Quiz) {
    quiz.updatedBy = await Quiz.getCurrentUserId()
  }

  private static async getCurrentUserId(): Promise<number> {
    const ctx = HttpContext.getOrFail()
    if (ctx?.auth.user) {
      return ctx.auth.user.id
    }
    throw new Error("Impossible de déterminer l'utilisateur connecté")
  }
}
