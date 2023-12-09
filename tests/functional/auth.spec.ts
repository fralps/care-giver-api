import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories/UserFactory'
import User from 'App/Models/User'

test.group('#POST /api/v1/login', (group): void => {
  let user: User

  group.each.setup(async (): Promise<void> => {
    user = await UserFactory.create()
  })

  test('returns status 200', async ({ client }): Promise<void> => {
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
      description: user.description,
    })
  })
})
