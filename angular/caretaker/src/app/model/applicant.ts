import { Address } from './address';

export class Applicant {
  firstName: string;
  lastName: string;
  dob: Date;
  maritalStatus: 'SINGLE' | 'MARRIED';
  email: string;
  phoneNumber: number;
  occupation: 'STUDENT' | 'WORKER';
  stayReason: string;
  address: Address;
}
