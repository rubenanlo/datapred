import { DataStoreProvider } from "providers/dataStore";

const RootProviders = ({ children }) => (
  <DataStoreProvider>{children}</DataStoreProvider>
);

export default RootProviders;
