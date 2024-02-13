import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components";
const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent={"space-betwen"} alignItems={"center"}>
        <Header title="DASHBOARD" subtitle="Welcome to the dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
