import CurrentWeather from "./currentWeater/CurrentWeather";
import ForeCast from "./forecast/Forecast";
import SelectCities from "./selectCities/SelectCities";
import { useSelector } from "react-redux";
import './Weather.css'

const Weather = () => {
  const { city, lat, lon, temp, icon, fetchingCurrentWeather } = useSelector(
    (state) => state?.selectedCity
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
      <ForeCast lat={lat} lon={lon} />
    </div>
  );
};

export default Weather;
