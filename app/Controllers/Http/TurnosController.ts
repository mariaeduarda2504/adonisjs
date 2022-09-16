import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Response from '@ioc:Adonis/Core/Response'
import Turno from 'App/Models/Turno'
import TurnoValidator from 'App/Validators/CursoValidator'
import { isTypeOnlyImportOrExportDeclaration } from 'node_modules/typescript/lib/typescript'

export default class TurnosController {
    public async index({ }: HttpContextContract){
        const turno = await Turno.all()
        return turno
    }

    public async store({ request }: HttpContextContract) {
        const data = await request.validate(TurnoValidator)
        const turno = await Turno.create({...data})
        return turno
    }
    public async show({ params, reponse }: HttpContextContract) {
        try {
            const turno = await Turno.findOrFail(params.id)
            return turno
        } catch (error) {
            Response.stauts(400).send("Turno não encontrado!!!")
        }
    }

    public async update({ request, params, response }: HttpContextContract){
        const {name} = await request.validate(TurnoValidator)
        try{
            const turno = await Turno.findOrFail(params.id)
            turno.name = name
            await turno.save()
            return turno
        } catch (error) {
            response.status(400).send("Turno não encontrado!!!")
        }
    }
    public async destroy({ request, params, response }: HttpContextContract){
        const {name} = await request.validate(TurnoValidator)
        try{
            const turno = await Turno.findOrFail(params.id)
            turno.name = name
            await turno.save()
            return turno
        } catch (error) {
            response.status(400).send("Turno não encontrado!!!")
        }
    }
}

