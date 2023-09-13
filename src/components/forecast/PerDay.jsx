import "./ForeCast.css";
import "../common/WeatherIcons.css";
import { forcast3Days, weekDays } from "../common/helper";

const PerDay = ({ forecastList }) => {
  forcast3Days(new Date(), forecastList).map((day) => {
    const { temp_max = 0, temp_min = 0 } = day?.main;
    return (
      <div className="forecasrPerDay" key={day.dt}>
        <div className="weekDay">{weekDays[new Date(day.dt_txt).getDay()]}</div>
        <div className={`wi wi-icon-${day.weather[0].id} icons`}></div>
        <div className="WeekTemps">{temp_max.toFixed(1)}&deg;</div>{" "}
        <div className="WeekTemps">{temp_min.toFixed(1)}&deg;</div>
      </div>
    );
  });
};

export default PerDay;
