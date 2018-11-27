import { Address } from './address';

export interface Contact {
  id?: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  advisor: string;
  address: Address;
}
