import { render, screen, waitFor } from "weather-app/tests/jest/test-utils.js";
import PerDay from "../PerDay.jsx";

describe("PerDay Component", () => {
  const forcastApiList = [
    {
      dt: 1694520000,
      main: {
        temp_min: 20.92,
        temp_max: 23.23,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694552400,
      main: {
        temp_min: 16.66,
        temp_max: 16.66,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694563200,
      main: {
        temp_min: 16.34,
        temp_max: 16.34,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694574000,
      main: {
        temp_min: 15.75,
        temp_max: 15.75,
      },
      weather: [
        {
          id: 800,
        },
      ],
    },
    {
      dt: 1694584800,
      main: {
        temp_min: 15.5,
        temp_max: 15.5,
      },
      weather: [
        {
          id: 800,
        },
      ],
    },
    {
      dt: 1694628000,
      main: {
        temp_min: 17.96,
        temp_max: 17.96,
      },
      weather: [
        {
          id: 803,
        },
      ],
    },
    {
      dt: 1694638800,
      main: {
        temp_min: 15.48,
        temp_max: 15.48,
      },
      weather: [
        {
          id: 802,
        },
      ],
    },
    {
      dt: 1694649600,
      main: {
        temp_min: 15.57,
        temp_max: 15.57,
      },
      weather: [
        {
          id: 803,
        },
      ],
    },
    {
      dt: 1694660400,
      main: {
        temp_min: 15.71,
        temp_max: 15.71,
      },
      weather: [
        {
          id: 803,
        },
      ],
    },
    {
      dt: 1694671200,
      main: {
        temp_min: 14.6,
        temp_max: 14.6,
      },
      weather: [
        {
          id: 803,
        },
      ],
    },
    {
      dt: 1694682000,
      main: {
        temp_min: 19.64,
        temp_max: 19.64,
      },
      weather: [
        {
          id: 801,
        },
      ],
    },
    {
      dt: 1694692800,
      main: {
        temp_min: 23.74,
        temp_max: 23.74,
      },
      weather: [
        {
          id: 802,
        },
      ],
    },
    {
      dt: 1694703600,
      main: {
        temp_min: 23.94,
        temp_max: 23.94,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694714400,
      main: {
        temp_min: 20.05,
        temp_max: 20.05,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694725200,
      main: {
        temp_min: 19.95,
        temp_max: 19.95,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694736000,
      main: {
        temp_min: 19.18,
        temp_max: 19.18,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694746800,
      main: {
        temp_min: 17.58,
        temp_max: 17.58,
      },
      weather: [
        {
          id: 803,
        },
      ],
    },
    {
      dt: 1694757600,
      main: {
        temp_min: 18.3,
        temp_max: 18.3,
      },
      weather: [
        {
          id: 803,
        },
      ],
    },
    {
      dt: 1694768400,
      main: {
        temp_min: 19.88,
        temp_max: 19.88,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694779200,
      main: {
        temp_min: 24.94,
        temp_max: 24.94,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
  ];
  const Date = "Tue Sep 12 2023 18:10:40 GMT+0530 (India Standard Time)";
  const foreCastResult = [
    {
      dt: 1694638800,
      main: {
        temp_min: 15.48,
        temp_max: 15.48,
      },
      weather: [
        {
          id: 802,
        },
      ],
    },
    {
      dt: 1694725200,
      main: {
        temp_min: 19.95,
        temp_max: 19.95,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
    {
      dt: 1694811600,
      main: {
        temp_min: 19.69,
        temp_max: 19.69,
      },
      weather: [
        {
          id: 804,
        },
      ],
    },
  ];

  it("renders the component with loading spinner",async () => {
    render(
      <PerDay forecastList={[]} />
    );
    // expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
