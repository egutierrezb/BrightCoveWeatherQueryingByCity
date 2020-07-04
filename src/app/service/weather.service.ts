import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable()
export class WeatherService {
  cityToQuery: any;
  API_URL: string = "/api/";
  constructor(private http: HttpClient) { 
  }

  getHeadersApiLocation(woeid: string): Observable<any> {
    const headers= new HttpHeaders()
    .set('content-type', 'text/plain')
    .set('Access-Control-Allow-Origin', '*');
    console.log("Headers for api "+headers); 
    return this.http.get('/api/location/'+woeid, {responseType: 'text', headers}); 
  }

  getHeadersCity(location: any): Observable<any> {
    const headers= new HttpHeaders()
    .set('content-type', 'text/plain')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.get('/api/location/search/?query='+location, {responseType: 'text', headers}); 
  }

  //Public method responsible for fetching
  //data from metaweather.com/api/location/{woeid}
  public findAll(woeid: string){
    console.log("Woeid city queried! "+woeid);
    return this.http.get(`${this.API_URL + 'location'}/${woeid}/`);
  }

  public queryCity(location: any): Observable<any>{
    return this.http.get('/api/location/search/?query='+ location);
  }

}
