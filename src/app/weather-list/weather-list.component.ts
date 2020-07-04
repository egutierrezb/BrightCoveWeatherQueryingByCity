import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weatherCity: Object;
  woeid: string;
  woeidQuery: string;
  public weatherSearchForm: FormGroup;
  subscription: Subscription;
  constructor(private router: Router, private weatherService: WeatherService, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any){
    this.subscription = this.weatherService.getHeadersCity(formValues.location).subscribe(
        dataCity => {
        console.log("Data: "+dataCity);
        this.weatherService.queryCity(formValues.location).subscribe(
          data => {
            //Retrieving Info from city
            this.weatherCity = data;
            //Retrieving woeid from city 
            //so we can retrieve in weather-city component
            //stats.
            this.woeid = this.weatherCity[0].woeid;
            console.log(this.woeid);
            this.setWoeid(this.woeid);
            this.router.navigate(['/weather', this.woeid]);
          }   
      );}
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  setWoeid(woeid: string){
    this.woeidQuery = woeid;
  }
}