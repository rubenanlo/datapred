export const fetchRuns = async (selectedDate, setMessage, setIsLoading) => {
  try {
    const responseRun = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/runs?production_date=${selectedDate}`
    );
    const data = await responseRun.json();
    const runs = data.results;

    if (!runs || runs.length === 0) {
      setMessage("No run available for this date");
      setIsLoading(false);
      return undefined; // Explicitly return undefined to indicate no runs
    }

    if (!runs[0].complete) {
      setMessage("No complete run for this date");
      setIsLoading(false);
      return undefined;
    }

    return runs;
  } catch (error) {
    console.error("Error fetching runs:", error);
    throw error;
  }
};

export const fetchOutputs = async (runId, setMessage, setIsLoading) => {
  try {
    const responseOutputs = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/runs/${runId}/outputs`
    );
    const data = await responseOutputs.json();
    const outputs = data.results;

    if (!outputs || outputs.length === 0) {
      setMessage("No outputs found");
      setIsLoading(false);
      return undefined;
    }

    return outputs;
  } catch (error) {
    console.error("Error fetching outputs:", error);
    throw error;
  }
};

export const fetchTrends = async (
  runId,
  outputId,
  setData,
  setIsLoading,
  setMessage
) => {
  try {
    const responseTrends = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/runs/${runId}/outputs/${outputId}/trends`
    );
    const data = await responseTrends.json();
    const trends = data.results;

    if (!trends || trends.length === 0) {
      setMessage("No trends were found for this output ID");
      setIsLoading(false);
      return; // Return early
    }

    const revisedTrends = trends.map(
      ({ horizon_date, horizon_name, trend, id }) => ({
        horizon_date,
        horizon_name,
        trend,
        id,
      })
    );

    setData(revisedTrends);
    setIsLoading(false);
  } catch (error) {
    setMessage("No trends available for this output ID");
    setIsLoading(false);
    console.error("Error fetching trends:", error);
    throw error;
  }
};

export const fetchData = async (
  selectedDate,
  setMessage,
  setData,
  setIsLoading
) => {
  try {
    setIsLoading(true);
    const runs = await fetchRuns(selectedDate, setMessage, setIsLoading);
    if (!runs) return; // Return early if there are no runs
    const outputs = await fetchOutputs(runs[0].id, setMessage, setIsLoading);
    if (!outputs) return; // Return early if there are no runs
    const results = await fetchTrends(
      runs[0].id,
      outputs[0].id,
      setData,
      setIsLoading,
      setMessage
    );
    if (!results) return; // Return early if there are no runs
    setData(results);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};
