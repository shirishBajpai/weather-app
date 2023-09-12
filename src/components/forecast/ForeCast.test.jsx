import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import ForeCast from './Forecast';

// Mock useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('ForeCast Component', () => {
  test('renders loading spinner while fetching forecast', () => {
    useSelector.mockReturnValue({ fetchingForecast: true });
    render(<ForeCast />);
    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('renders forecast data correctly', async () => {
    useSelector.mockReturnValue({
      forecastList: [
        {
          dt: 1,
          dt_txt: '2023-09-06 12:00:00',
          main: { temp_max: 20, temp_min: 10 },
          weather: [{ id: 800 }],
        },
        // Add more forecast data as needed
      ],
      fetchingForecast: false,
    });

    render(<ForeCast lat={123} lon={456} />);

    // Wait for the component to update after fetching data
    await waitFor(() => {
      const dayElement = screen.getByText('SUN'); // Assuming the first forecast is for Sunday
      const maxTempElement = screen.getByText('20.0°C');
      const minTempElement = screen.getByText('10.0°C');
      expect(dayElement).toBeInTheDocument();
      expect(maxTempElement).toBeInTheDocument();
      expect(minTempElement).toBeInTheDocument();
    });
  });

  test('dispatches forecast action with correct arguments', () => {
    const lat = 123;
    const lon = 456;
    render(<ForeCast lat={lat} lon={lon} />);
    expect(forecast).toHaveBeenCalledWith(lat, lon);
  });
});
