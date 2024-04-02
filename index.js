const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
// const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

app.use(cors());

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
