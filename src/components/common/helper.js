export const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const forcast3Days = (date, list = []) => {
  const finalRes = [];
  let currDate = date;
  list?.forEach((item) => {
    const itemDate = new Date(item.dt_txt);
    if (itemDate - currDate >= 86400000) {
      finalRes.push(item);
      currDate.setDate(currDate.getDate() + 1);
    }
  });
  return finalRes.slice(0, 3);
};