import { render} from "weather-app/tests/jest/test-utils.js";
import Weather from "..";

describe("Weather Component", () => {
  test("If renders", async () => {
    render(<Weather />);
  });
});
