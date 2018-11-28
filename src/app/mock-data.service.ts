import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker';

import { Activity } from './interfaces/activity';
import { Contact } from './interfaces/contact';
import { UserDashboard } from './interfaces/user-dashboard';
import { Opportunity } from './interfaces/opportunity';
import { User, UserRole } from './interfaces/user';
import { Address } from './interfaces/address';

export class MockDataService implements InMemoryDbService {

  chooseRandom = <T>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  createMockList = <T>(count: number, callback: () => T): T[] => {
    const arr: T[] = [];
    for (let i = count; i > 0; i--) {
      arr.push(callback());
    }
    return arr;
  }

  mockAddress = (overrides: Partial<Address> = {}): Address => {
    return {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      postalCode: faker.address.zipCode(),
      ...overrides
    };
  }

  mockUser = (overrides: Partial<User> = {}): User => {
    return {
      id: faker.random.uuid(),
      accountId: faker.random.uuid(),
      dashboardId: faker.random.uuid(),
      email: faker.internet.email(),
      birthday: faker.date.past(20),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      image: faker.internet.avatar(),
      role: this.chooseRandom<UserRole>(['advisor', 'client']),
      token: faker.random.uuid(),
      address: this.mockAddress(overrides.address),
      ...overrides
    };
  }

  mockContact = (overrides: Partial<Contact> = {}): Contact => {
    return {
      id: faker.random.uuid(),
      birthday: faker.date.past(20),
      advisor: faker.name.findName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: this.mockAddress(overrides.address),
      ...overrides
    };
  }

  mockOpportunity = (overrides: Partial<Opportunity> = {}): Opportunity => {
    return {
      id: faker.random.uuid(),
      contactId: faker.random.uuid(),
      advisor: faker.name.findName(),
      amount: faker.random.number({ min: -5000, max: 1000000 }),
      dateCreated: faker.date.recent(),
      lastActivity: this.mockActivity(overrides.lastActivity),
      ...overrides
    };
  }

  mockActivity = (overrides: Partial<Activity> = {}): Activity => {
    return {
      id: faker.random.uuid(),
      sourceId: faker.random.uuid(),
      type: this.chooseRandom(['call', 'notes']),
      dateCreated: faker.date.recent(),
      ...overrides
    };
  }

  mockDashboard = (overrides: Partial<UserDashboard> = {}): UserDashboard => {
    return {
      id: faker.random.uuid(),
      assets: faker.random.number({ min: -5000, max: 1000000 }),
      donations: faker.random.number({ min: -5000, max: 1000000 }),
      contacts: faker.random.number(15),
      opportunities: faker.random.number(25),
      ...overrides
    };
  }

  createDb() {
    const testUser: User = this.mockUser({
      id: 'test-user',
      dashboardId: 'test-dashboard',
      accountId: 'test-account',
      email: 'test@test.com',
      role: 'advisor',
    });
    // tslint:disable:no-console
    console.time('Create Mock Database');
    const users: User[] = [
      testUser,
      this.mockUser({
        id: 'test-client',
        dashboardId: 'test-client-dashboard',
        accountId: 'test-client-account',
        role: 'client',
      }),
      ...this.createMockList<User>(faker.random.number(20), this.mockUser)
    ];
    const testOpportunityActivity: Activity = this.mockActivity({
      id: 'test-opportunity-activity',
      sourceId: 'test-opportunity',
      type: 'call'
    });
    const activities: Activity[] = [
      testOpportunityActivity,
      ...this.createMockList<Activity>(faker.random.number(50), this.mockActivity)
    ];
    const testOpportunity: Opportunity = this.mockOpportunity({
      id: 'test-opportunity',
      contactId: '588b9214-6ec9-4519-8c30-62467ae95354',
      lastActivity: testOpportunityActivity
    });
    const opportunities: Opportunity[] = [
      testOpportunity,
      ...this.createMockList<Opportunity>(faker.random.number(15), this.mockOpportunity)
    ];
    const contacts: Contact[] = [
      this.mockContact({
        id: '588b9214-6ec9-4519-8c30-62467ae95354',
      }),
      this.mockContact({
        id: '38d2d7a0-fce9-4942-99e0-7819eda1bc9c',
      }),
      ...this.createMockList<Contact>(faker.random.number(50), this.mockContact)
    ];
    const dashboards: UserDashboard[] = [
      this.mockDashboard({
        id: 'test-dashboard',
        contacts: contacts.length,
        opportunities: opportunities.length
      }),
      ...this.createMockList<UserDashboard>(faker.random.number(20), this.mockDashboard)
    ];
    const data = { users, dashboards, contacts, opportunities, activities };
    console.timeEnd('Create Mock Database');
    console.log('Mock Databse created with data: ', data);
    return data;
  }
}
