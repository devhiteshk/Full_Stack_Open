const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

let phDB = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (req, res) => res.send("Phone Book API"));

app.get("/api/persons", (req, res) => {
  res.json(phDB);
});

app.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/api/persons/:id", (req, res) => {
  let resObject = phDB.filter((i) => i.id == req.params.id);
  if (resObject.length === 0) {
    res.json({ error: "user not found with given id: " + req.params.id });
  } else {
    res.json(resObject);
  }
});

app.delete("/api/persons/:id", (req, res) => {
  console.log(req.body);
  let newdb = phDB.filter((i) => i.id != req.params.id);
  if (newdb.length === phDB.length) {
    res.json({ error: "user dont exist with id " + req.params.id });
  } else {
    phDB = newdb;
    res.json(phDB);
  }
});

app.post("/api", (req, res) => {
  let newId = Math.floor(Math.random(100000) * 100000);

  let newObj = {};
  newObj["id"] = newId;
  newObj["name"] = req.body.name;
  newObj["number"] = req.body.number;
  let x = phDB.filter((i) => i.name === newObj.name);

  if (newObj.name === "" || x.length === 1) {
    res.json({ error: "name must be unique and not already existing" });
  } else {
    phDB.push(newObj);
    res.json(phDB);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
