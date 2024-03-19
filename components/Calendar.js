import clsx from "clsx";

const days = [
  { date: "2020-12-27" },
  { date: "2020-12-28" },
  { date: "2020-12-29" },
  { date: "2020-12-30" },
  { date: "2020-12-31" },
  { date: "2021-01-01", isCurrentMonth: true },
  { date: "2021-01-02", isCurrentMonth: true },
  { date: "2021-01-03", isCurrentMonth: true },
  { date: "2021-01-04", isCurrentMonth: true },
  { date: "2021-01-05", isCurrentMonth: true },
  { date: "2021-01-06", isCurrentMonth: true },
  { date: "2021-01-07", isCurrentMonth: true },
  { date: "2021-01-08", isCurrentMonth: true },
  { date: "2021-01-09", isCurrentMonth: true },
  { date: "2021-01-10", isCurrentMonth: true },
  { date: "2021-01-11", isCurrentMonth: true },
  { date: "2021-01-12", isCurrentMonth: true, isToday: true },
  { date: "2021-01-13", isCurrentMonth: true },
  { date: "2021-01-14", isCurrentMonth: true },
  { date: "2021-01-15", isCurrentMonth: true },
  { date: "2021-01-16", isCurrentMonth: true },
  { date: "2021-01-17", isCurrentMonth: true },
  { date: "2021-01-18", isCurrentMonth: true },
  { date: "2021-01-19", isCurrentMonth: true },
  { date: "2021-01-20", isCurrentMonth: true },
  { date: "2021-01-21", isCurrentMonth: true, isSelected: true },
  { date: "2021-01-22", isCurrentMonth: true },
  { date: "2021-01-23", isCurrentMonth: true },
  { date: "2021-01-24", isCurrentMonth: true },
  { date: "2021-01-25", isCurrentMonth: true },
  { date: "2021-01-26", isCurrentMonth: true },
  { date: "2021-01-27", isCurrentMonth: true },
  { date: "2021-01-28", isCurrentMonth: true },
  { date: "2021-01-29", isCurrentMonth: true },
  { date: "2021-01-30", isCurrentMonth: true },
  { date: "2021-01-31", isCurrentMonth: true },
  { date: "2021-02-01" },
  { date: "2021-02-02" },
  { date: "2021-02-03" },
  { date: "2021-02-04" },
  { date: "2021-02-05" },
  { date: "2021-02-06" },
];

const Calendar = () => {
  return (
    <div className="md:pr-14 mt-10 max-w-md mx-auto">
      <div className="flex items-center">
        <h2 className="flex-auto text-sm font-semibold text-center">
          January 2021
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.date}
            className={clsx(dayIdx > 6 && "border-t border-gray-200", "py-2")}
          >
            <button
              type="button"
              className={clsx(
                day.isSelected && "text-white",
                !day.isSelected && day.isToday && "",
                !day.isSelected && !day.isToday && day.isCurrentMonth && "",
                !day.isSelected &&
                  !day.isToday &&
                  !day.isCurrentMonth &&
                  "text-gray-400",
                day.isSelected && day.isToday && "",
                day.isSelected && !day.isToday && "bg-gray-900",
                !day.isSelected && "hover:bg-gray-200",
                (day.isSelected || day.isToday) && "font-semibold",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
              )}
            >
              <time dateTime={day.date}>
                {day.date.split("-").pop().replace(/^0/, "")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
