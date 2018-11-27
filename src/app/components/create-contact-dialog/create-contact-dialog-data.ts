import { Address } from '../../interfaces/address';

export interface CreateContactDialogData {
  firstName: string;
  lastName: string;
  birthday: Date;
  address: Address;
}
