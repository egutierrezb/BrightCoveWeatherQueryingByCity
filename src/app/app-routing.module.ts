import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherListComponent } from './weather-list/weather-list.component';


const routes: Routes = [{path:'weather',component:WeatherListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
