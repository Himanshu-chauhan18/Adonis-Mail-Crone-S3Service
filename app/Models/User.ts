import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
export default class User extends BaseModel {
  public static table = 'UserMaster1';


  @column({ isPrimary: true })
  public id: number

  @column()                
  public username: string  

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  // @column.date()
  // public date: DateTime

  @column.date({
    serialize: (value) => value.toFormat('yyyy-LL-dd'),
  })
  public date: DateTime
  
  @column.dateTime({  autoCreate: true,columnName:'createdDate',
  serialize: (value) => value.toFormat('yyyy-LL-dd'),
})
public createdDate: DateTime


  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName:'lastModificationdate',
    serialize: (value) => value.toFormat('yyyy-LL-dd'),
  })
  public lastModificationdate: DateTime

  @computed()
  public get fullName() {
    return `${this.id}-${this.username}`
  }
}
