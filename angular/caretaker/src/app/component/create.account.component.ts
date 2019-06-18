import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/model/applicant';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/model/address';
import { AccountService } from '../service/account.service';
import { Account } from '../model/account';
import { AccountStatus } from '../model/account.status';
import { UtilityService } from '../service/utility.service';



@Component({
  selector: 'app-create-acc',
  templateUrl: '../views/create.account.component.html'
})
export class CreateAccComponent implements OnInit {

  applicant: Applicant;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private accountService: AccountService,
              private utilityService: UtilityService) { }

  addressName = new Set();

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

  validateZIP() {

    if (this.applicant.address.pinCode && this.applicant.address.pinCode.toString().length === 6) {
      const response = this.utilityService.getZipCodeDetail(this.applicant.address.pinCode);
      response.subscribe((zipCodeResponse) => {
        this.addressName = new Set();
        console.log('Zip Code ' + JSON.stringify(zipCodeResponse));
        zipCodeResponse.PostOffice.forEach(element => {
          this.addressName.add(element.Name);
          this.applicant.address.state = element.State;
        });
      }, (error) => {
        console.log(error);
      });
    }
  }
}
