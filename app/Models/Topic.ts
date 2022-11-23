import { DateTime } from 'luxon'
import { 
  BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany 
} from '@ioc:Adonis/Lucid/Orm'
import Message from './Message'

export default class Topic extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=> Message, {
    localKey: 'id',
    pivotForeignKey: 'curso_id'
  })
  public topicMessage: ManyToMany<typeof Message>
}
