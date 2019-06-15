import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../model/applicant';
import { BaseResponse } from '../model/BaseResponse';



@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  public createAccount(applicant: Applicant) {

    const httpHeader = { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } };
    return this.httpClient.post('http://localhost:8080/member-api/create-account', JSON.stringify(applicant), httpHeader);
  }
}
