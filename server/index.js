const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const secret = "ravioliRavioliGiveMeTheFormuioli";
const {fetchUser} = require('./db/users')

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const client = require("./db/client");
client.connect();
app.use(express.static(path.join(__dirname, "public")));

app.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// For production
// app.use("/", express.static(path.join(__dirname, "../client/dist")));
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"))
// );

app.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');

  if (!auth) { // nothing to see here
      console.log("no auth token")
      next();
  } else if (auth.startsWith(prefix)) {
      console.log("woo token")
      const token = auth.slice(prefix.length);
      console.log(token)
      try {
          const parsedToken = jwt.verify(token, secret);
          console.log(parsedToken)
          const parsedUsername = parsedToken && parsedToken.user
          if (parsedUsername) {
             
              req.user = await fetchUser(parsedUsername);
              console.log(req.user)
              // console.log("this is what i got from root") 
          }
          next()
      } catch (error) {
          next(error);
      }
  }
});

//Goes to index.js in api folder
app.use("/mythicalMunchies", require("./api"));

app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .send({ error: err.message ? err.message : err });
});



//Base URL is http://localhost:8080/mythicalmunchies
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on ${port}`));
