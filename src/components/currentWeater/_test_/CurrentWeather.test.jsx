import { render, screen } from "weather-app/tests/jest/test-utils.js";
import CurrentWeather from "../CurrentWeather.jsx";

describe("ForeCast Component", () => {
  test("dispatches forecast action with correct arguments",async () => {
    const props = {
        currentCity: "Abbeville",
        lat: 50.099998,
        lon: 1.83333,
        temp: 294.46,
        icon: 804,
        fetchingCurrentWeather: false
    };
    render(<CurrentWeather {...props} />);
  });
  test("renders the component with loading spinner", async () => {
    const props = {
        fetchingCurrentWeather: true
    };
    render(<CurrentWeather {...props} />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
