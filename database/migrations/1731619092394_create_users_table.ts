import { BaseSchema } from '@adonisjs/lucid/schema'
import { UserRole } from '../../app/enums/user_role.js'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('username').notNullable().unique()
      table.string('lastname').notNullable()
      table.string('firstname').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.integer('role').unsigned().defaultTo(UserRole.Student)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
