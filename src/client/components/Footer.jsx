import React from "react";
import { Link } from "react-router-dom";
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
        <Toolbar className="footer-content">
          <div className="column">
            <Typography className="heading">Customer Care</Typography>
            <Typography className="link">
              <Link to="/contact">Contact Us</Link>
            </Typography>
            <Typography className="link">
              <Link to="#">FAQs</Link>
            </Typography>
            <Typography className="link">
              <Link to="#">Privacy Policy</Link>
            </Typography>
          </div>
          <div className="column">
            <Typography className="heading">My Account</Typography>
            <Typography className="link">
              <Link to="#">Login/Register</Link>
            </Typography>
            <Typography className="link">
              <Link to="#">Favorites</Link>
            </Typography>
            <Typography className="link">
              <Link to="#">Contribute</Link>
            </Typography>
          </div>
          <div className="column">
            <Typography className="heading">Top Searches</Typography>
            <Typography className="link">
              <Link to="#">Potter World</Link>
            </Typography>
            <Typography className="link">
              <Link to="#">Stardew</Link>
            </Typography>
            <Typography className="link">
              <Link to="#">Zelda </Link>
            </Typography>
            <Typography className="link">
              <Link to="#">Dune</Link>
            </Typography>
          </div>
        </Toolbar>

        <Typography
          variant="body2"
          color="inherit"
          align="center"
          className="company-link"
        >
          <Link to="/">Mythical Munchies</Link>
        </Typography>
        <div className="social">
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
        <hr></hr>
        <Typography align="center" className="footer-copyright">
          &#169; 2024 Mythical Munchies. All rights reserved.
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
