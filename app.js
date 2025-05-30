const express = require("express");
const env = require("./config/config.js");
const productDisplayRouter = require("./src/routes/productDisplayRoute");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200", // <- allow Angular dev server
  })
);

app.get("/health", (req, res) => {
  console.log("Health check");

  res.send("Healthy");
});

app.use("/api/v1/", productDisplayRouter);

//export default app;

app.listen(env.PORT, () =>
  console.log(`Server connection successful on port ${env.PORT}`)
);

module.exports = app;
