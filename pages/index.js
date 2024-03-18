import AppLayout from "components/AppLayout";
import Calendar from "../components/Calendar";
// import { generateDatesForYears } from "helpers/manipulateText";

const Index = () => {
  // const datesArray = generateDatesForYears(2023, 2025);

  return (
    <AppLayout>
      <Calendar />
    </AppLayout>
  );
};

export default Index;
