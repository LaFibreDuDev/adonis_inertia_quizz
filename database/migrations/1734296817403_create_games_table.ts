import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'games'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('quiz_id').unsigned().notNullable()
      table.integer('created_by').unsigned().notNullable()
      table.integer('updated_by').unsigned().nullable()

      table.foreign('quiz_id').references('id').inTable('quizzes').onDelete('CASCADE')
      table.foreign('created_by').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('updated_by').references('id').inTable('users').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
