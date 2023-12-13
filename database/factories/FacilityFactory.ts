import Facility from 'App/Models/Facility'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { UserFactory } from 'Database/factories/UserFactory'

export const FacilityFactory = Factory.define(Facility, ({ faker }) => {
  return {
    name: faker.company.name(),
    phoneNumber: faker.phone.number(),
    description: faker.lorem.paragraph(),
  }
})
  .relation('users', () => UserFactory)
  .build()
