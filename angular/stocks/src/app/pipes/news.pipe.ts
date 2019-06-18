import { Pipe, PipeTransform } from '@angular/core';
import { StocksService } from '../services/stocks.service';
@Pipe({
  name: 'news',
  pure: false
})
export class NewsPipe implements PipeTransform {
  cachedSource = '';
  news = 'loading...';
  constructor(private service: StocksService) { }
  transform(source: string, args?: any): any {
    if (source !== this.cachedSource) {
      this.cachedSource = source;
      console.log(` NewsPipe executed`);
      this.service.getNewsSnapshot(source).subscribe(news => {
        this.news = `<a href="${news.url}" target="_blank">${news.title}</a>`;
      });
    }
    return this.news;
  }
}
