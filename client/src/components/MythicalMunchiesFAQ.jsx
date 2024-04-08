import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MythicalMunchiesFAQ = () => {
  return (
    <div>
      <h2>Mythical Munchies FAQ </h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">Absolutely! Here is the answer!</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">Question B</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">Of course! Here is the answer!</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default MythicalMunchiesFAQ;
