import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZipCodeDetail } from '../model/zipcode.detail';


@Injectable({ providedIn: 'root' })
export class UtilityService {


  constructor(private httpClient: HttpClient) {

  }

  public getZipCodeDetail(zipcode: number): Observable<ZipCodeDetail> {
    return this.httpClient.get<ZipCodeDetail>('http://localhost:8081/utility-api/getZipCodeDetail/' + zipcode);
  }

}
