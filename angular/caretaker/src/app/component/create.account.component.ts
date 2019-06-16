import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/model/applicant';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/model/address';
import { AccountService } from '../service/account.service';
import { Account } from '../model/account';
import { AccountStatus } from '../model/account.status';


@Component({
  selector: 'app-create-acc',
  templateUrl: '../views/create.account.component.html'
})
export class CreateAccComponent implements OnInit {

  applicant: Applicant;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accountService: AccountService) { }

  save(): void {
    console.log('Save applicant form :' + JSON.stringify(this.applicant));
    this.accountService.createAccount(this.applicant).subscribe((response) => {
      if (response) {
        this.accountService.setAccStatus(AccountStatus.APPLICANT);
        this.router.navigateByUrl('account-confirmation');
      }
    }, (error => {
      console.log('Error Response received from :' + error);
    }));
  }

  cancel(): void {
    console.log('cancel applicant form :' + JSON.stringify(this.applicant));
    this.accountService.setAccStatus(AccountStatus.GUEST);
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
    console.log('Oninit CreateAccComponent');
    if (!this.applicant) {
      this.applicant = new Applicant();
      this.applicant.address = new Address();
      this.accountService.setAccStatus(AccountStatus.GUEST);
    }
  }
}
