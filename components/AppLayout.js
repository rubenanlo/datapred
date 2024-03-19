import React from "react";
import { Container } from "components/Container";
import { DATAPRED_LOGO as datapredLogo } from "helpers/exportImages";
const AppLayout = ({ children }) => {
  return (
    <Container className="bg-gray-800 text-white">
      <Container.Flex
        className={{
          flex: "flex-col justify-center items-center",
          dimension: "max-w-none px-10 lg:max-w-7xl mx-auto h-screen",
          typography: "font-raleway text-xl",
        }}
      >
        <Container.Image
          src={datapredLogo}
          alt="logo"
          className="h-32 w-auto mb-10"
        />
        <Container
          className={{
            flex: "flex gap-x-5 justify-center",
            dimension: "w-full h-2/4",
          }}
        >
          {children}
        </Container>
      </Container.Flex>
    </Container>
  );
};

export default AppLayout;
