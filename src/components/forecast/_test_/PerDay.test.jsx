import { render} from "weather-app/tests/jest/test-utils.js";
import PerDay from "../PerDay.jsx";

describe("PerDay Component", () => {
  it("renders the component with loading spinner", async () => {
    render(<PerDay forecastList={[]} />);
  });
});
