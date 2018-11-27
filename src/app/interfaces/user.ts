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
