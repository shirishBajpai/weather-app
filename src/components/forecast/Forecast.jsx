import { useEffect } from "react";
import { forecast } from "../../store/actions/forcast";
import { useDispatch } from "react-redux";
import "./ForeCast.css";
import "../common/WeatherIcons.css";
import Spinner from "../common/Spinner";
import { forcast3Days, weekDays } from "../common/helper";

const ForeCast = ({ lat, lon, forecastList, fetchingForecast }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(forecast(lat, lon));
  }, [dispatch, lat, lon]);

  return (
    <div className="forecasts">
      {fetchingForecast ? (
        <div data-testid="spinner">
          <Spinner />
        </div>
      ) : (
        forcast3Days(new Date(), forecastList).map((day) => {
          const { temp_max = 0, temp_min = 0 } = day?.main;
          return (
            <div className="forecasrPerDay" key={day.dt}>
              <div className="weekDay">
                {weekDays[new Date(day.dt_txt).getDay()]}
              </div>
              <div className={`wi wi-icon-${day.weather[0].id} icons`}></div>
              <div className="WeekTemps">{temp_max.toFixed(1)}&deg;</div>{" "}
              <div className="WeekTemps">{temp_min.toFixed(1)}&deg;</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ForeCast;
