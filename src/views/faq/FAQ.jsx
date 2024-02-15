import React from "react";
import { tokens } from "../../theme";
import {
  useTheme,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { Header } from "../../components";
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Accordion Summary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          This is where the accordion details are contained. Here, you can find
          more insights and overviews of what this specific accordions purpose
          is.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
