import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories/UserFactory'
import User from 'App/Models/User'

test.group('#POST /api/v1/login', (group): void => {
  let user: User

  group.each.setup(async (): Promise<void> => {
    user = await UserFactory.create()
  })

  test('returns 200 status', async ({ client }): Promise<void> => {
    const response = await client.post('/api/v1/login').json({
      email: user.email,
      password: 'password',
    })

    response.assertStatus(200)
  })

  test('returns correct json response', async ({ client }): Promise<void> => {
    const response = await client.post('/api/v1/login').json({
      email: user.email,
      password: 'password',
    })

    response.assertBodyContains({
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age,
      phone_number: user.phoneNumber,
      description: user.description,
    })
  })
})

test.group('#DELETE /api/v1/logout', (): void => {
  test('returns 401 status when use is not logged in', async ({ client }): Promise<void> => {
    const response = await client.delete('/api/v1/logout')

    response.assertStatus(401)
  })
})
