import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Footer.css";
import MythicalMunchiesFAQ from "./FAQ";
import PrivacyPolicy from "./PrivacyPolicy";

// Easy workaround from MUI's default color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: "#4A0260",
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="footer">
        <Container>
          <Toolbar className="footer-content">
{/* COLUMN 1 */}
            <div className="column">
              <h1>Customer Care</h1>
              <Typography className="link">
                <Link to="/contact">Contact Us</Link>
              </Typography>
              <Typography className="link">
                <Link to="/FAQ">FAQs</Link>
              </Typography>
              <Typography className="link">
                <Link to="/privacy">Privacy Policy</Link>
              </Typography>
            </div>
{/* COLUMN 2 */}
            <div className="column">
              <h1>My Account</h1>
              <Typography className="link">
                <Link to="/account">Login/Register</Link>
              </Typography>
              <Typography className="link">
                <Link to="#">Favorites</Link>
              </Typography>
              <Typography className="link">
                <Link to="#">Add a Recipe</Link>
              </Typography>
            </div>
{/* COLUMN 3 */}
            <div className="column">
              <h1>Top Searches</h1>
              <Typography className="link">
                <Link to="#">Potter World</Link>
              </Typography>
              <Typography className="link">
                <Link to="#">Stardew</Link>
              </Typography>
              <Typography className="link">
                <Link to="#">Zelda </Link>
              </Typography>
            </div>
          </Toolbar>
          {/* <br></br>
          <br></br> */}
          <hr className="footer-hr"></hr>
          {/* <br></br> */}

          <Typography align="center" className="footer-copyright">
            &#169; 2024 Mythical Munchies. All rights reserved.
          </Typography>
         <div className="social">
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&t=3s"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IconButton className="social-link" color="inherit">
                <FacebookIcon />
              </IconButton>
            </a>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&t=3s"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IconButton className="social-link" color="inherit">
                <TwitterIcon />
              </IconButton>
            </a>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&t=3s"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </a>
          </div>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
