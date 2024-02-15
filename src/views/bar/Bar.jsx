import React from "react";
import { Box } from "@mui/material";
import { Header, BarChart } from "../../components";
const Bar = () => {
  return (
    <Box m="25px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
