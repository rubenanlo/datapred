import dayjs from "dayjs";
import clsx from "clsx";
import { Container } from "components/Container";
import { TextLayout } from "components/TextLayout";
import { turnDaysIntoISODate } from "helpers/formatDates";
import { useDataStore } from "providers/dataStore";
import { days } from "library/days";

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useDataStore();
  const daysWithISODate = turnDaysIntoISODate(days);

  return (
    <Container className={{ dimension: "md:pr-14 mt-10 max-w-md mx-auto" }}>
      <Container.Flex className={{ flex: "items-center" }}>
        <TextLayout.Title
          as="h4"
          className="flex-auto text-center"
          title="January 2021"
        />
      </Container.Flex>
      <Container.Columns
        className={{
          position: "mt-10",
          grid: " grid grid-cols-7 ",
          typography: "text-center text-xs leading-6 text-gray-500",
        }}
      >
        <TextLayout.Paragraph paragraph="M" />
        <TextLayout.Paragraph paragraph="T" />
        <TextLayout.Paragraph paragraph="W" />
        <TextLayout.Paragraph paragraph="T" />
        <TextLayout.Paragraph paragraph="F" />
        <TextLayout.Paragraph paragraph="S" />
        <TextLayout.Paragraph paragraph="S" />
      </Container.Columns>
      <Container.Columns
        className={{
          position: "mt-2",
          grid: "grid grid-cols-7",
          typography: "text-sm",
        }}
      >
        {daysWithISODate.map((day, dayIdx) => (
          <Container
            key={day.date}
            className={clsx(dayIdx > 6 && "border-t border-gray-200", "py-2")}
          >
            <button
              type="button"
              className={clsx(
                day.date === selectedDate && "text-white bg-red-600/20",
                !day.isCurrentMonth && "text-gray-400",
                day.isSelected && !day.isToday && "bg-gray-900",
                !day.isSelected && "hover:bg-gray-200 hover:text-gray-700",
                (day.isSelected || day.isToday) && "font-semibold",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
              )}
              onClick={() => setSelectedDate(day.date)}
            >
              <time dateTime={day.date}>{dayjs(day.date).format("D")}</time>
            </button>
          </Container>
        ))}
      </Container.Columns>
    </Container>
  );
};

export default Calendar;
