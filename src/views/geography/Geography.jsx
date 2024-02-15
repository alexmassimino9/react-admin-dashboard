import React from "react";
import { Header, GeographyChart } from "../../components";
import { Box } from "@mui/material";

const Geography = () => {
  return (
    <Box m="25px">
      <Header title="Geography" subtitle="A simple geography map" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
