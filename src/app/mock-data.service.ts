import { Contact } from './interfaces/contact';
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
    const contacts: Contact[] = [
      {
        id: '588b9214-6ec9-4519-8c30-62467ae95354',
        firstName: 'Ida',
        lastName: 'Schuppe',
        birthday: new Date(),
        advisor: 'Kayla Treutel',
        address: {
          street: '43107 Zola Branch',
          city: 'West Helgastad',
          state: 'Arkansas',
          postalCode: '44919'
        }
      },
      {
        id: '38d2d7a0-fce9-4942-99e0-7819eda1bc9c',
        firstName: 'Estel',
        lastName: 'Mertz',
        birthday: new Date(),
        advisor: 'Shanel Reichel',
        address: {
          street: '7756 Kassulke Forge',
          city: 'West Helgastad',
          state: 'Arkansas',
          postalCode: '44919'
        }
      }
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
