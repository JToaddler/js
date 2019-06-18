import { OnInit, Component } from '@angular/core';

@Component({
  selector : 'app-care-taker',
  templateUrl : '../views/app.home.html'
})
export class CareTakerComponent implements OnInit {

  ngOnInit() {
    console.log('CareTakerComponent Initialized');
  }

}
