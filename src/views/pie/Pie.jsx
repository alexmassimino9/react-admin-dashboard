import React from "react";
import { Box, useTheme } from "@mui/material";
import { Header, PieChart } from "../../components";
const Pie = () => {
  return (
    <Box m="25px">
      <Header title="Pie Chart" subtitle="A simple pie chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
