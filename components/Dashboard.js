import dayjs from "dayjs";
import TableResults from "components/TableResults";
import Calendar from "components/Calendar";
import { TextLayout } from "components/TextLayout";
import { Container } from "components/Container";
import { useDataStore } from "providers/dataStore";
import { observer } from "mobx-react-lite";

const Dashboard = () => {
  const { selectedDate } = useDataStore();

  return (
    <Container className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 items-center">
      <Container.Section className="mt-12 md:mt-0 md:pl-14 h-full">
        <TextLayout.Title
          as="h3"
          title="Select a date (limited to January 2021 for now)"
        />
        <Calendar />
      </Container.Section>

      <Container.Section className="mt-12 md:mt-0 md:pl-14 h-full">
        <TextLayout.Title
          as="h3"
          title={`Results for production date ${dayjs(selectedDate).format(
            "MMMM D, YYYY"
          )}`}
        />
        <TableResults />
      </Container.Section>
    </Container>
  );
};

export default observer(Dashboard);
