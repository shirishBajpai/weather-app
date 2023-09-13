import cities from "../../data/French-cities.json";
import "./SelectCities.css";
import { setCity } from "../../store/actions/selectedCity";
import { useDispatch } from "react-redux";

const SelectCities = ({ currentCity }) => {
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    const { lat, lon } = cities.find((city) => city.nm === event.target.value);
    const payload = { city: event.target.value, lat: lat, lon: lon };

    dispatch(setCity(payload));
  };

  return (
    <select
      data-testid="select"
      className="select"
      onChange={handleSelectChange}
      value={currentCity}>
      {cities.map((option) => (
        <option key={option.id} value={option.nm}>
          {option.nm}
        </option>
      ))}
    </select>
  );
};

export default SelectCities;
