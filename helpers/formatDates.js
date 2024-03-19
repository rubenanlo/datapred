export const turnDaysIntoISODate = (days) =>
  days.map((day) => ({
    ...day,
    date: day.date + "T00:00:00Z",
  }));
