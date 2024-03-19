import { useEffect, useState } from "react";
import { TextLayout } from "components/TextLayout";
import { Container } from "components/Container";
import TableResults from "components/TableResults";
import { fetchData } from "helpers/apiCalls";
import { useDataStore } from "providers/dataStore";

const Output = () => {
  const { selectedDate, data, setData } = useDataStore();
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(null);

  const paragraph = isLoading ? "Loading ..." : message;

  useEffect(() => {
    const fetchResults = async () =>
      await fetchData(selectedDate, setMessage, setData, setIsLoading);
    fetchResults();
    //eslint-disable-next-line
  }, [selectedDate]);

  return isLoading || message ? (
    <Container.Flex
      className={{
        dimension: "h-full",
        flex: "justify-center items-center",
      }}
    >
      <TextLayout.Paragraph paragraph={paragraph} />
    </Container.Flex>
  ) : (
    <TableResults data={data} />
  );
};

export default Output;
