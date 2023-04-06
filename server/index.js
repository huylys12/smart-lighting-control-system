const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in non product environments
  require("dotenv").config();
}
const mongoDb = require("./database/mongoDb");
const passport = require("passport");
require("./strategies/JwtStrategy");
require("./strategies/LocalStrategy");
require("./utils/authenticate");
// Connecting to the database.
const db = mongoDb.getInstance();
db.connect();

const UsersRouter = require("./routes/UsersRouter");
const NetworksRouter = require("./routes/NetworksRouter");
const RoomsRouter = require("./routes/RoomsRouter");
const LightsRouter = require("./routes/LightsRouter");

const app = express();

// A middleware that parses the body of the request.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

//Add the client URL to the CORS policy
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};
app.use(cors(corsOptions));
app.use(passport.initialize());

app.get("/", function (req, res) {
  res.send({ status: "success" });
});

const usersRouter = new UsersRouter();
// const networksRouter = new NetworksRouter();
// const roomsRouter = new RoomsRouter();
// const lightsRouter = new LightsRouter();
app.use("/api/accounts", usersRouter.router);
// app.use("/api/networks", networksRouter.router);
// app.use("/api/rooms", roomsRouter.router);
// app.use("/api/lights", lightsRouter.router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
