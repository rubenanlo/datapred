import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { TextLayout } from "components/TextLayout";
import { Container } from "components/Container";
import { fetchData } from "helpers/apiCalls";
import { useDataStore } from "../providers/dataStore";
import { observer } from "mobx-react-lite";

const TableResults = () => {
  const { selectedDate } = useDataStore();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchResults = async () =>
      await fetchData(selectedDate, setMessage, setData, setIsLoading);
    fetchResults();
  }, [selectedDate]);

  return isLoading ? (
    <TextLayout.Paragraph paragraph="Loading ..." />
  ) : message ? (
    <Container>
      <TextLayout.Paragraph paragraph={message} className="text-white" />
    </Container>
  ) : (
    <table className="mt-32 w-[25vw] font-extralight text-gray-300 mx-auto">
      <colgroup>
        <col className="w-2/3" />
        <col className="w-2/3" />
        <col className="w-1/3" />
      </colgroup>
      <thead className="border-b">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0 w-20"
          >
            Horizon Date
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-sm font-semibold w-20 text-center"
          >
            Horizon Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-center text-sm font-semibold w-20"
          >
            Trend
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200/20">
        {data?.map((dataPoint) => (
          <tr key={dataPoint.id}>
            <td className="py-4 text-sm ">
              {dayjs(dataPoint?.horizon_date).format("MMMM D, YYYY")}
            </td>
            <td className="px-3 py-4 text-sm text-center">
              {dataPoint?.horizon_name}
            </td>
            <td className="px-3 py-4 text-sm text-center">
              {dataPoint?.trend}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default observer(TableResults);
