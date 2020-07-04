import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from './service/weather.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  constructor(){
    this.title = 'Weather application';
  }
}

