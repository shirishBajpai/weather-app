import { weekDays, forcast3Days } from '../helper.js';

describe('weekDays', () => {
  it('should contain the correct days of the week', () => {
    const expectedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    expect(weekDays).toEqual(expectedDays);
  });
});

describe('forcast3Days', () => {
  it('should return an array with 3 days of forecast data', () => {
    const date = new Date('2023-09-07');
    const forecastList = [
      {
        dt_txt: '2023-09-07 12:00:00', 
      },
      {
        dt_txt: '2023-09-08 12:00:00', 
      },
      {
        dt_txt: '2023-09-09 12:00:00', 
      },
      {
        dt_txt: '2023-09-10 12:00:00',
      },
    ];
    const result = forcast3Days(date, forecastList);

    expect(result).toHaveLength(3);
    expect(result[0].dt_txt).toBe('2023-09-08 12:00:00');
    expect(result[1].dt_txt).toBe('2023-09-09 12:00:00');
    expect(result[2].dt_txt).toBe('2023-09-10 12:00:00');
  });

  it('should handle an empty forecast list', () => {
    const date = new Date('2023-09-07');
    const forecastList = [];
    const result = forcast3Days(date, forecastList);
    expect(result).toEqual([]);
  });
});
