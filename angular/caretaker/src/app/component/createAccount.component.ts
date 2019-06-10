import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/model/applicant';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from 'src/model/address';


@Component({
  selector: 'app-create-acc',
  templateUrl: '../views/createAccount.component.html'
})
export class CreateAccComponent implements OnInit {

  applicant: Applicant;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  save(): void {
    console.log('saving applicant form :' + this.applicant);
  }

  cancel(): void {
    console.log('cancel applicant form :' + this.applicant);
  }

  ngOnInit() {
    console.log('Oninit CreateAccComponent');

    if (!this.applicant) {
      this.applicant = new Applicant();
      this.applicant.address = new Address();
    }

  }
}
