import { DateTime } from 'luxon'
import { 
  BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany 
} from '@ioc:Adonis/Lucid/Orm'
import Curso from './Curso'

export default class Turno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=> Curso, {
    localKey: 'id',
    pivotForeignKey: 'curso_id'
  })
  public topicCurso: ManyToMany<typeof Curso>
}
