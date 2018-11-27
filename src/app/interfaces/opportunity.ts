import { Activity } from './activity';

export interface Opportunity {
  id?: string;
  contactId: string;
  advisor: string;
  amount: number;
  dateCreated: Date;
  lastActivity?: Activity;
}
