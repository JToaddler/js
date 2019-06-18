
export class ZipCodeDetail {

  Message: string;
  Status: string;
  PostOffice: PostOffice[];
}


export class PostOffice {
  Name: string;
  Description: string;
  BranchType: string;
  DeliveryStatus: string;
  Taluk: string;
  Circle: string;
  District: string;
  Division: string;
  Region: string;
  State: string;
  Country = 'india';
}
