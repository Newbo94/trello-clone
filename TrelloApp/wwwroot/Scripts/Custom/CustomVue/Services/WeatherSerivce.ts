import axios from "axios";

class WeatherService {
  public API: string =
    "https://api.openweathermap.org/data/2.5/weather?id=2615876&units=metric&APPID=30d8d1b2d5007c61e6619a0f5b21afa7";

  public weather: [] = [];

  public getWeather() {
    axios
      .get(this.API)
      .then(res => {
        console.log(res.data);
        this.weather = res.data;
      })
      .catch(err => console.error(err));
  }
}

const weatherService = new WeatherService();

export default weatherService;
