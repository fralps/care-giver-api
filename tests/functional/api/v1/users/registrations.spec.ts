import { test } from '@japa/runner'
import User from 'App/Models/User'
import { UserFactory } from 'Database/factories/UserFactory'

test.group('#POST /api/v1/registrations', (): void => {
  let payload = {
    email: `freeda.ritchie${Math.random()}@gmail.com`,
    password: 'password',
    password_confirmation: 'password',
    firstname: 'Angelica',
    lastname: 'Gutmann',
    age: 24,
    phone_number: '0988776633',
    description:
      'Supellex accusantium somnus ab admiratio cimentarius nemo. Artificiose atqui adficio conicio bardus totam. Asper corrumpo combibo.',
  }

  test('returns 200 status', async ({ client }): Promise<void> => {
    const response = await client.post('/api/v1/registrations').json(payload)

    response.assertStatus(200)
  })
})

test.group('#DELETE /api/v1/registrations', (): void => {
  test('returns 401 status when no user is logged in', async ({ client }): Promise<void> => {
    const response = await client.delete('/api/v1/registrations')

    response.assertStatus(401)
  })
})
