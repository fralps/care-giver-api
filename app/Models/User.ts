import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Facility from 'App/Models/Facility'
import { column, beforeSave, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @belongsTo(() => Facility)
  public facility: BelongsTo<typeof Facility>

  @column()
  public facilityId: number

  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column()
  public firstname: string

  @column()
  public lastname: string

  @column()
  public age: number

  @column()
  public phoneNumber: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
