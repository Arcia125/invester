import { Address } from '../../interfaces/address';

export interface CreateContactDialogData {
  firstName: string;
  lastName: string;
  birthday: Date;
  advisor: string;
  address: Address;
}
