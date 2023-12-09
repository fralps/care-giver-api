import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { FacilityFactory } from 'Database/factories/FacilityFactory'

export default class extends BaseSeeder {
  public async run() {
    await FacilityFactory.with('users', 4).createMany(10)
  }
}
