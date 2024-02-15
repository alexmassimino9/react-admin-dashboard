import React from "react";
import { Box } from "@mui/material";
import { Header, LineChart } from "../../components";
const Line = () => {
  return (
    <Box m="25px">
      <Header title="Line Chart" subttle="A simple line chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
