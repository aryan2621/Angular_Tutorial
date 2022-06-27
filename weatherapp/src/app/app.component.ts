import { Component, OnInit } from '@angular/core';
import { WeatherData } from './Modal/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  cityName: string = 'Allahabad';
  weatherData?: WeatherData

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
   }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      }
    })
  }

}
