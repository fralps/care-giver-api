import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async create({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.use('web').attempt(email, password)

    const user = auth.user!
    return user.serialize({
      fields: {
        pick: ['email', 'firstname', 'lastname', 'description', 'age', 'id'],
      },
    })
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.use('web').logout()
  }
}
