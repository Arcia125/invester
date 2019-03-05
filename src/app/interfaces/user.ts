import { Address } from './address';

export type UserRole = 'admin' | 'advisor' | 'client';

export interface User {
  id?: string;
  accountId: string;
  dashboardId: string;
  firstName: string;
  lastName: string;
  token: string;
  role: UserRole;
  email: string;
  image: string;
  birthday: Date;
  address: Address;
}

export interface Admin extends User {
  role: 'admin';
}

export interface Advisor extends User {
  role: 'advisor';
}

export interface Client extends User {
  role: 'client';
  advisorId: string;
}
