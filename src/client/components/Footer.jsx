import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#4A0260BF" }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                color="inherit"
                style={{
                  marginBottom: "10px",
                  color: "white",
                  fontFamily: "Almendra",
                }}
              >
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Login/Register
                </a>
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{
                  marginBottom: "10px",
                  color: "white",
                  fontFamily: "Almendra",
                }}
              >
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Worlds
                </a>
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{
                  marginBottom: "10px",
                  color: "white",
                  fontFamily: "Almendra",
                }}
              >
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Contact
                </a>
              </Typography>
            </div>
          </Typography>

          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
