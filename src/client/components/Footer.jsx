import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";


const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            Your footer content goes here.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
