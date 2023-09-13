import CurrentWeather from "./currentWeater/CurrentWeather.jsx";
import ForeCast from "./forecast/Forecast.jsx";
import SelectCities from "./selectCities/SelectCities.jsx";
import { useSelector } from "react-redux";
import "./Weather.css";

const Weather = () => {
  const { city , lat, lon, temp, icon, fetchingCurrentWeather } = useSelector(
    (state) => state?.selectedCity || {}
  );
  const { forecastList = [], fetchingForecast } = useSelector(
    (state) => state?.forecast || {}
  );

  return (
    <div className="weather">
      <SelectCities currentCity={city} />
      <CurrentWeather
        currentCity={city}
        lat={lat}
        lon={lon}
        temp={temp}
        icon={icon}
        fetchingCurrentWeather={fetchingCurrentWeather}
      />
      <ForeCast
        lat={lat}
        lon={lon}
        forecastList={forecastList}
        fetchingForecast={fetchingForecast}
      />
    </div>
  );
};

export default Weather;
