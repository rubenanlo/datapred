// helper function used mainly to turn an object into a string. Useful for
// combining tailwind object classes
export const turnObjectIntoString = (className) => {
  if (className === undefined) return;
  if (typeof className === "string") return className;
  return Object.values(className).join(" ");
};

export const generateDatesForYears = (startYear, endYear) => {
  const dates = [];
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= 31; day++) {
        const date = new Date(year, month, day);
        if (date.getMonth() === month) {
          dates.push({
            year: date.getFullYear(),
            month: date.getMonth() + 1, // +1 to make month more human-readable (1-12 instead of 0-11)
            day: date.getDate(),
          });
        }
      }
    }
  }
  return dates;
};
