# Instructions:

## Run this application locally:

Install all dependencies through the command `npm i` or `npm install` and run the application in development through the command `npm run dev`

## Deployment:

For deployment, please add the following environment variables:
`NEXT_PUBLIC_URL='https://test-backend.i.datapred.com/without-auth/flows/1'`

When creating the application, please note that I relied on the endpoints without authentication. While working on it, I noticed the following:

- The data is limited to January 2021, so I only created the front end logic for that month. Further steps will be to create a dynamic calendar that allows the user to change the month and year as well.
- I found certain inconsistencies with the backend and I have accounted for it in this application, in addition to the request in the guidelines. The table below tries to summarize my findings for each of the entries:

| Production Date | run id (from flows/1/runs) | output id (from flows/1/runs/run_id/outputs) | Complete (from flows/1/runs) | trend data (from flows/1/runs/run_id/outputs/output_id/trends) | Comments |
| --------------- | -------------------------- | -------------------------------------------- | ---------------------------- | -------------------------------------------------------------- | -------- |
| jan 04          | 10                         | 101                                          | true                         | yes                                                            |          |
| jan 05          | 12                         | 102                                          | true                         | Not found in backend                                           | (2)      |
| jan 06          | 13                         | 1118                                         | true                         | yes                                                            |          |
| jan 07          | 18                         | 124                                          | true                         | yes                                                            |          |
| jan 08          | 21                         | Not found in backend                         | false                        |                                                                | (3)      |
| jan 11          | 36                         | 135                                          | true                         | yes                                                            |          |
| jan 12          | 37                         | Not found in backend                         | true                         |                                                                | (1)      |
| jan 13          | 39                         | Not found in backend                         | false                        |                                                                | (3)      |
| jan 14          | 68                         | 136                                          | true                         | yes                                                            |          |
| jan 15          | 70                         | 147                                          | true                         | yes                                                            |          |

(1) When running the query in the backend, the complete property shows up as false. However, when running the endpoint /flows/1/runs, and you look for january 13th, the complete property shows up as true.
(2) The backend threw a 404 error when trying to fetch the trends. Thus I set a message saying that 'no trends where found for this output id'.
(3) Even though the backend threw a 404 error when trying to fetch the outputs, I still render a message saying 'no complete run for this date', since the complete property for this date was false.

You may run into differences when testing this application due to the edge cases I found above.
