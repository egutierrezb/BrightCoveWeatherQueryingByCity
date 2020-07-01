import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weatherList: Object;
  climates: any[];
  city: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(){
    this.weatherService.findAll().subscribe(
      data => {
        //weathelist is an object of objects
        this.weatherList = data;
        //Retrieving title property from JSON Object
        this.city = this.weatherList["title"];
        //Retrieving consolidated_weather from JSON Object
        this.climates = this.weatherList["consolidated_weather"];
        //Debugging purposes
        console.log(this.weatherList);
      }
    )
  }

  //Routine to check if we have a temperature
  //value with decimal value less or greater than .5 
  checkTemperature(temp: string){
    //If temperatures decimal value is greater than .5,
    //then temperature value will be rounded to the next
    //upper value, and this value is going to be
    //greater than original

    //Rounded value greater than original?  
    if(parseFloat(temp)<Math.round(parseFloat(temp)))
    {
      return true;
    }
    return false;
  }

  //If we have a returning value of TRUE in checkTemperature
  //we have to round it to an upper value
  roundTemperature(temp: string){
      return Math.round(parseFloat(temp));   
  }

  //If we have a returning value of TRUE in checkTemperature
  //we have to round it to an lower value
  floorTemperature(temp: string){
    return Math.floor(parseFloat(temp));   
  }

  //Method that formats the date
  //input: date in numeric format [YY/MM/DAY] 
  //output: date with YY and DAY in numeric format and MM in string format
  formatDate(date: string){
    let splittedString = date.split("-");
    let aux = splittedString[0];
    splittedString[0] = splittedString[2];
    splittedString[2] = aux;

    let MapDates = new Map();
    let month;
    let monthsNames = ["Months:","January","February","March","April","May","June","July","August","September","October","November","December"];
    for(var i=1; i<=12; i++)
    {
      if(i<10)
          month = "0".concat(i.toString());
      else
          month = i;
      MapDates.set(month,monthsNames[i]);
    }
    let monthFullName = MapDates.get(splittedString[1]);
    let newDate = splittedString[0].concat("/").concat(monthFullName).concat("/").concat(splittedString[2]);
    return newDate;
  }
}