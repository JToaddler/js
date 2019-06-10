import { OnInit, Component } from '@angular/core';

@Component({
  selector : 'app-care-taker',
  templateUrl : '../views/careTaker.home.html'
})
export class CareTakerComponent implements OnInit {

  ngOnInit() {
    console.log('CareTakerComponent Initialized');
  }

}
