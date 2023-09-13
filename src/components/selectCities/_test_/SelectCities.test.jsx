import {
  render,
  screen,
  fireEvent,
} from "weather-app/tests/jest/test-utils.js";
import SelectedCities from "../SelectCities.jsx";

describe("SelectedCities Component", () => {
  it("renders the component", async () => {
    render(<SelectedCities forecastList={[]} />);
  });

  test("Contains cities", async () => {
    const props = {
      forecastList: {},
    };
    render(<SelectedCities {...props} />);
    await expect(screen.getByText("Abbeville")).toBeInTheDocument();
  });

  test("onChange function works properly", async () => {
    const props = {
      forecastList: {},
    };
    render(<SelectedCities {...props} />);
    const inputElement = screen.getByTestId("select");
    fireEvent.change(inputElement, { target: { value: "Ablis" } });
    expect(inputElement.value).toBe("Ablis");
  });
});
