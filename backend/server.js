const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api/message", (_req, res) => {
  res.json({ message: "Hello from server!" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
