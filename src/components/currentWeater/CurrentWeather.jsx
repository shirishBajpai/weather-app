import { useEffect } from "react";
import { currentCityWeather } from "../../store/actions/currentCityWeather";
import { useDispatch } from "react-redux";
import "./CurrentWeather.css";
import Spinner from "../common/Spinner";

const CurrentWeather = ({
  currentCity,
  lat,
  lon,
  temp,
  icon,
  fetchingCurrentWeather,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentCityWeather(lat, lon));
  }, [currentCity, dispatch, lat, lon]);

  return (
    <div className="current">
      <div className="city">{currentCity}</div>
      {fetchingCurrentWeather ? (
        <div data-testid="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className={`wi wi-icon-${icon} icons`}></div>
          <div className="temp">{(temp - 273.15).toFixed(1)}&deg;</div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
