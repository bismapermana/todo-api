const express = require("express");

const app = express();

const cors = require("cors");

const router = require("./src/routes/index");

const port = 5000;

app.use(express.json());

app.use(cors());

app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
