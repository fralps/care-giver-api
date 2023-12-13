import { test } from '@japa/runner'
import User from 'App/Models/User'
import Facility from 'App/Models/Facility'
import { FacilityFactory } from 'Database/factories/FacilityFactory'
import { status, json, cookies } from '../../../shared-examples'

test.group('#POST /api/v1/login', (group): void => {
  let facility: Facility
  let user: User

  group.each.setup(async (): Promise<void> => {
    facility = await FacilityFactory.with('users', 1).create()
    user = (await facility).users[0]
  })

  test('returns 200 status', async ({ client }): Promise<void> => {
    const response = await client.post('/api/v1/login').json({
      email: user.email,
      password: 'password',
    })

    status(response, 200)
  })

  test('returns correct cookie name', async ({ client }): Promise<void> => {
    const response = await client.post('/api/v1/login').json({
      email: user.email,
      password: 'password',
    })

    cookies(response)
  })

  test('returns correct Content-Type response', async ({ client }): Promise<void> => {
    const response = await client.post('/api/v1/login').json({
      email: user.email,
      password: 'password',
    })

    json(response)
  })

  test('returns correct json response', async ({ client }): Promise<void> => {
    const response = await client.post('/api/v1/login').json({
      email: user.email,
      password: 'password',
    })

    response.assertBody({
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age,
      phone_number: user.phoneNumber,
      description: user.description,
      facility: {
        id: facility.id,
        name: facility.name,
        phone_number: facility.phoneNumber,
        description: facility.description,
      },
    })
  })
})

test.group('#DELETE /api/v1/logout', (): void => {
  test('returns 401 status when use is not logged in', async ({ client }): Promise<void> => {
    const response = await client.delete('/api/v1/logout')

    status(response, 401)
  })
})
