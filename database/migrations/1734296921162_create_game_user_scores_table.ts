import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'game_user_scores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('question_id').unsigned().notNullable()
      table.integer('game_user_id').unsigned().notNullable()
      table.integer('score').unsigned().notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.foreign('question_id').references('id').inTable('questions').onDelete('CASCADE')
      table.foreign('game_user_id').references('id').inTable('game_users').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
