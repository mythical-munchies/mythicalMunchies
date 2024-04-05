import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <AppBar position="static" className="footer">
      <Container maxWidth="md">
        <Toolbar>
          <div className="links">
            <Typography variant="body1" color="inherit" className="footer-link">
              <a href="#">Login/Register</a>
            </Typography>
            <Typography variant="body1" color="inherit" className="footer-link">
              <a href="#">Worlds</a>
            </Typography>
            <Typography variant="body1" color="inherit" className="footer-link">
              <a href="#">Contact</a>
            </Typography>
          </div>
          <div className="social-icons">
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
