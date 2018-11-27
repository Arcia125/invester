import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Activity } from './interfaces/activity';
import { Contact } from './interfaces/contact';
import { UserDashboard } from './interfaces/user-dashboard';
import { Opportunity } from './interfaces/opportunity';
import { User } from './interfaces/user';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const testUser: User = {
      id: 'test-user',
      dashboardId: 'test-dashboard',
      accountId: 'test-account',
      email: 'test@test.com',
      firstName: 'Sigmund',
      lastName: 'Barton',
      birthday: new Date(),
      token: '345jkl34534h534h5123==',
      role: 'advisor',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/S0ufi4n3/128.jpg',
      address: {
        street: '123 Main St',
        city: 'Port Stephanfurt',
        state: 'New Mexico',
        postalCode: '54471'
      }
    };
    const users: User[] = [
      testUser,
      {
        id: 'test-client',
        dashboardId: 'test-client-dashboard',
        accountId: 'test-client-account',
        email: 'test2@test.com',
        firstName: 'test',
        lastName: 'test',
        birthday: new Date(),
        role: 'client',
        token: '34g9843jt6jsf8h324WEF==',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/joki4/128.jpg',
        address: {
          street: '5462 Jonas St',
          city: 'Port Leif',
          state: 'West Virginia',
          postalCode: '26308'
        }
      }
    ];
    const testOpportunityActivity: Activity = {
      id: 'test-opportunity-activity',
      sourceId: 'test-opportunity',
      dateCreated: new Date(),
      type: 'call'
    };
    const activities: Activity[] = [
      testOpportunityActivity
    ];
    const testOpportunity: Opportunity = {
      id: 'test-opportunity',
      contactId: '588b9214-6ec9-4519-8c30-62467ae95354',
      advisor: 'Liza Runolfsdottir',
      dateCreated: new Date(),
      amount: 525000,
      lastActivity: testOpportunityActivity
    };
    const opportunities: Opportunity[] = [
      testOpportunity
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
        contacts: contacts.length,
        opportunities: opportunities.length
      }
    ];
    return { users, dashboards, contacts, opportunities, activities };
  }
}
