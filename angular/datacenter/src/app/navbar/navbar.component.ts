import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: [`.btn { background-color: #999999; }`],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent  {

  @Output("reloadMetricEvent") emitter: EventEmitter<null> = new EventEmitter<null>();

  reloadMetric() {
    console.log('Emiting event from NavBar');
    this.emitter.emit();
  }

}
