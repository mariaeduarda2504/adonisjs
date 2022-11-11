import { DateTime } from 'luxon'
import { 
  BaseModel, BelongsTo, belongsTo, column,
  ManyToMany, manyToMany
} from '@ioc:Adonis/Lucid/Orm'
import Turno from './Turno'
import User from './User'

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public curso: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> User)
  public user: BelongsTo<typeof User>

  @manyToMany(() => Turno, {
    localKey: 'id',
    pivotForeignKey: 'curso_id',
    relatedKey: 'id',
    pivotTable: 'turno_id'
  })
  public cursoTurno: ManyToMany<typeof Turno>
}
