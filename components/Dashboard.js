import dayjs from "dayjs";
import Output from "components/Output";
import Calendar from "components/Calendar";
import { TextLayout } from "components/TextLayout";
import { Container } from "components/Container";
import { useDataStore } from "providers/dataStore";
import { observer } from "mobx-react-lite";

const SectionScheleton = ({ Component, title }) => (
  <Container.Section className="mt-12 md:mt-0 md:pl-14 h-full">
    <TextLayout.Title as="h3" title={title} />
    <Component />
  </Container.Section>
);

const Dashboard = () => {
  const { selectedDate } = useDataStore();

  return (
    <Container
      className={{
        position: "md:grid md:grid-cols-2 items-center",
        border: " md:divide-x md:divide-gray-200",
      }}
    >
      <SectionScheleton
        title="Select a date (limited to January 2021 for now)"
        Component={Calendar}
      />
      <SectionScheleton
        title={`Results for production date ${dayjs(selectedDate).format(
          "MMMM D, YYYY"
        )}`}
        Component={Output}
      />
    </Container>
  );
};

export default observer(Dashboard);
