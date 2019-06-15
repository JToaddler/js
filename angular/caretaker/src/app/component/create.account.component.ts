import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/model/applicant';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/model/address';
import { AccountService } from '../service/account.service';


@Component({
  selector: 'app-create-acc',
  templateUrl: '../views/createAccount.component.html'
})
export class CreateAccComponent implements OnInit {

  applicant: Applicant;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accountService: AccountService) { }

  save(): void {
    console.log('Save applicant form :' + JSON.stringify(this.applicant));
    this.accountService.createAccount(this.applicant).subscribe((response) => {
      if (response) {
        this.router.navigateByUrl('account-confirmation');
      }
    }, (error => {
      console.log('Error Response received from :' + error);
    }));
  }

  cancel(): void {
    console.log('cancel applicant form :' + JSON.stringify(this.applicant));
  }

  ngOnInit() {
    console.log('Oninit CreateAccComponent');

    if (!this.applicant) {
      this.applicant = new Applicant();
      this.applicant.address = new Address();
    }

  }
}
