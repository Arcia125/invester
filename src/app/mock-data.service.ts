import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const testUser = {
      id: 'test-user',
      email: 'test@test.com',
      firstName: 'John',
      lastName: 'Smith',
      token: '345jkl34534h534h5123==',
      role: 'advisor'
    };
    const users = [
      testUser,
      {
        email: 'test2@test.com',
        firstName: 'test',
        lastName: 'test',
        role: 'client'
      }
    ];
    return { users };
  }
}
