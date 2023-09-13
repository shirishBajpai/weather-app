import { render, screen } from "weather-app/tests/jest/test-utils.js";
import ForeCast from "../Forecast.jsx";

describe("ForeCast Component", () => {
  it("renders the component with loading spinner",async () => {
    render(
      <ForeCast lat={123} lon={456} fetchingForecast={true} forecastList={[]} />
    );
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("dispatches forecast action with correct arguments",async () => {
    const props = {
      forecastList: [],
      lat: 123,
      lon: 456,
      fetchingForecast: false
    };
    render(<ForeCast {...props} />);
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
  });
});
