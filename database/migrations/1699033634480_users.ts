import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { DateTime } from 'luxon';
export default class extends BaseSchema {
  protected tableName = 'UserMaster1'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username', 50).notNullable().unique() // ++
      table.string('email', 255).notNullable().unique()   // add unique
      table.string('password', 180).notNullable()
      table.date('date')
      // table.dateTime('createdDate')
      // table.dateTime('lastModificationdate')
      table.dateTime('createdDate', { useTz: true }).defaultTo(DateTime.fromJSDate(new Date()).toFormat('yyyy-LL-dd'))
      table.dateTime('lastModificationdate', { useTz: true }).defaultTo(DateTime.fromJSDate(new Date()).toFormat('yyyy-LL-dd'))
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
