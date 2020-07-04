import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherCityComponent } from './weather-city/weather-city.component';


const routes: Routes = [{path:'weather',component:WeatherListComponent},{path:'weather/:woeid',component:WeatherCityComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
