import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const stocks: Array<string> = ['AAPL', 'FB', 'AMZN', 'TWTR', 'GOOG'];
const service = 'https://angular2-in-action-api.herokuapp.com';


export interface NewsInterface {
  url: string;
  title: string;
}

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  get(): Array<string> {
    return stocks.slice();
  }

  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string): Array<string> {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: Array<string>) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>((service + '/stocks/snapshot?symbols=' + symbols.join()));
    }
  }

  getNewsSnapshot(source = 'the-wall-street-journal') {
    return this.http.get<NewsInterface>(service + '/stocks/news/snapshot?source=' + source);
  }

}
