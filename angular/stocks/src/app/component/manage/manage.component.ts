import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit,OnDestroy  {

  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

  remove(symbol: string) {
    console.log('Removing :'+ symbol);
    this.symbols = this.service.remove(symbol);
    console.log('Afterssdsd sd :'+ this.symbols);
  }

}
