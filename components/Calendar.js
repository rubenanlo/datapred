import dayjs from "dayjs";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { Container } from "components/Container";
import { turnDaysIntoISODate } from "helpers/formatDates";
import { useDataStore } from "providers/dataStore";
import { days } from "library/days";

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useDataStore();
  const daysWithISODate = turnDaysIntoISODate(days);

  return (
    <Container className="md:pr-14 mt-10 max-w-md mx-auto">
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
        {daysWithISODate.map((day, dayIdx) => (
          <div
            key={day.date}
            className={clsx(dayIdx > 6 && "border-t border-gray-200", "py-2")}
          >
            <button
              type="button"
              className={clsx(
                day === selectedDate && "text-white",
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
              onClick={() => setSelectedDate(day.date)}
            >
              <time dateTime={day.date}>{dayjs(day.date).format("D")}</time>
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default observer(Calendar);
