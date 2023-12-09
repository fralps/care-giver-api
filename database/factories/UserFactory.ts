import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    email: faker.internet.email().toLocaleLowerCase(),
    password: 'password',
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    age: faker.helpers.rangeToNumber({ min: 18, max: 65 }),
    phoneNumber: faker.phone.number(),
    description: faker.lorem.paragraph(),
  }
}).build()
