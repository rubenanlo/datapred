import React from "react";
import { Container } from "components/Container";

const AppLayout = ({ children }) => {
  return (
    <Container.Flex
      className={{
        flex: "flex-col justify-center items-center",
        dimension: "max-w-none px-10 lg:max-w-7xl mx-auto h-screen",
        typography: "font-raleway text-xl",
      }}
    >
      <Container
        className={{
          flex: "flex gap-x-5 justify-center",
          dimension: "w-full",
        }}
      >
        {children}
      </Container>
    </Container.Flex>
  );
};

export default AppLayout;
