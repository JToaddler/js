import { Component, OnInit, Input } from '@angular/core';
import {StockInterface} from '../../services/stocks.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }
  @Input() stock: StockInterface;


  isNegative(): boolean {
    return (this.stock && this.stock.change < 0);
  }

  isPositive(): boolean {
    return (this.stock && this.stock.change > 0);
  }

  ngOnInit() {
  }

}
