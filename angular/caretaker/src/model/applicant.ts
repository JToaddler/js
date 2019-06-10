import { Address } from './address';

export class Applicant {
  firstName: string;
  lastName: string;
  dob: Date;
  maritalStatus: 'single' | 'married';
  email: string;
  phoneNumber: number;
  occupation: 'student' | 'worker';
  stayReason: string;
  address: Address;
}
