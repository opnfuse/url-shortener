const express = require("express");
require("dotenv").config();

const app = express();

const connection = require("./db.config");
connection.once("open", () => console.log("DB Connected"));
connection.on("error", () => console.log("Error"));

app.use(
  express.json({
    extended: false,
  })
);

app.use("/", require("./redirect"));
app.use("/api/url", require("./url"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server started on port " + PORT));
