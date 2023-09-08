import { useEffect } from "react";
import { forecast } from "../../store/actions/forcast";
import { useDispatch, useSelector } from "react-redux";
import "./ForeCast.css";
import "../common/WeatherIcons.css"
import Spinner from "../common/Spinner";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const forcast3Days = (date, list = []) => {
  const finalRes = [];
  let currDate = date;
  list.forEach((item) => {
    const itemDate = new Date(item.dt_txt);
    if (itemDate - currDate >= 86400000) {
      finalRes.push(item);
      currDate.setDate(currDate.getDate() + 1);
    }
  });
  return finalRes.slice(0, 3);
};

const ForeCast = ({ lat, lon }) => {
  const dispatch = useDispatch();
  const { forecastList = [], fetchingForecast } = useSelector(
    (state) => state?.forecast
  );

  useEffect(() => {
    dispatch(forecast(lat, lon));
  }, [dispatch, lat, lon]);

  return (
    <div className="forecasts">
      {fetchingForecast ? (
        <Spinner />
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
