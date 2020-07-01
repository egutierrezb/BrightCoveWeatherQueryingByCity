import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { 

  }
  //Public method responsible for fetching
  //data from metaweather.com/api/location/2367105
  //(Boston, USA)
  public findAll():Observable<any>{
    return this.http.get('/api/location/2367105/');
  }
}
