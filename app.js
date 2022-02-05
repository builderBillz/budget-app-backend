const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(_,response) => {
response.status(200).send("Welcome to the Budget App");
});

const transactionController = require("./controllers/transactionController");
app.use("/transactions", transactionController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

module.exports = app;