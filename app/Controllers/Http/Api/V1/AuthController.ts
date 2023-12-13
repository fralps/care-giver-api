import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async create({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await auth.use('web').attempt(email, password)
    await user.load('facility')

    return user.serialize({
      fields: {
        pick: ['email', 'firstname', 'lastname', 'description', 'age', 'phone_number', 'id'],
      },
      relations: {
        facility: {},
      },
    })
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.use('web').logout()
  }
}
