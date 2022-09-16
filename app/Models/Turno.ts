import { DateTime } from 'luxon'
import { 
  BaseModel, BaseModel, BelongsTo, belongsTo, column, HasMany,
  hasMany, ManyToMany, manyToMany 
} from '@ioc:Adonis/Lucid/Orm'
import { createUnparsedSourceFile } from 'typescript'

export default class Turno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=> curso, {
    localKey: 'id',
    pivotForeignKey: 'curso_id'
  })
  public topicCurso: ManyToMany<typeof Curso>
}
