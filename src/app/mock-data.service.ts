import { UserDashboard } from './interfaces/user-dashboard';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const testUser = {
      id: 'test-user',
      email: 'test@test.com',
      firstName: 'John',
      lastName: 'Smith',
      token: '345jkl34534h534h5123==',
      role: 'advisor',
      dashboardId: 'test-dashboard'
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
    const contacts = [

    ];
    const dashboards: UserDashboard[] = [
      {
        id: 'test-dashboard',
        assets: 535265,
        donations: 25122,
        households: 120,
        opportunities: 5
      }
    ];
    return { users, dashboards, contacts };
  }
}
