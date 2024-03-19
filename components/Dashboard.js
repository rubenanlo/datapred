import TableResults from "components/TableResults";
import Calendar from "components/Calendar";
import { TextLayout } from "components/TextLayout";
import { Container } from "components/Container";
import { useEffect, useState } from "react";
import { fetchData } from "../helpers/apiCalls";
import dayjs from "dayjs";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("2021-01-15T00:00:00Z");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(
    () => async () =>
      await fetchData(selectedDate, setMessage, setData, setIsLoading),
    [selectedDate]
  );

  return (
    (isLoading && <TextLayout.Paragraph text="Loading ..." />) || (
      <Container className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 items-center">
        <Container.Section className="mt-12 md:mt-0 md:pl-14 h-full">
          <TextLayout.Title
            as="h3"
            title="Select a date (limited to January 2021 for now)"
          />
          <Calendar setSelectedDate={setSelectedDate} />
        </Container.Section>

        <Container.Section className="mt-12 md:mt-0 md:pl-14 h-full">
          <TextLayout.Title
            as="h3"
            title={`Results for production date ${dayjs(selectedDate).format(
              "MMMM D, YYYY"
            )}`}
          />
          {message ? (
            <TextLayout.Paragraph paragraph={message} className="text-white" />
          ) : (
            <TableResults data={data} />
          )}
        </Container.Section>
      </Container>
    )
  );
};

export default Dashboard;
