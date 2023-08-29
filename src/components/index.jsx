import CurrentWeather from "./currentWeater/CurrentWeather";
import ForeCast from "./forecast/Forecast";
import SelectCities from "./selectCities/SelectCities";
import { useSelector } from 'react-redux';

const Weather = () => {
    const { city } = useSelector((state)=> state?.selectedCity)
	return (
		<div>
			<SelectCities currentCity={city}/>
            <CurrentWeather currentCity={city}/>
            <ForeCast/>
		</div>
	);
};

export default Weather;
