import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../model/applicant';

import { AccountStatus } from '../model/account.status';
import { Account } from '../model/account';


@Injectable({ providedIn: 'root' })
export class AccountService {

  account: Account;

  constructor(@Inject(HttpClient) private httpClient: HttpClient) {
    console.log('AccountService');
  }

  public createAccount(applicant: Applicant) {
    const httpHeader = { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } };
    return this.httpClient.post('http://localhost:8080/member-api/create-account', JSON.stringify(applicant), httpHeader);
  }

  public isGuest(): boolean {
    if (this.account && this.account.accountStatus && (this.account.accountStatus === AccountStatus.APPLICANT
      || this.account.accountStatus === AccountStatus.MEMBER)) {
      return false;
    } else {
      return true;
    }
  }
  setAccStatus(accountStatus: AccountStatus) {
    if (!this.account) {
      this.account = new Account();
    }
    this.account.accountStatus = accountStatus;
  }
}
