import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Filter from "./Components/filter";
import PersonForm from "./Components/personForm";
import Persons from "./Components/Persons";
let db = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const App = () => {
  const alert = useAlert();
  const [persons, setPersons] = useState(db);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filter_, setFilter] = useState("");

  useEffect(() => {
    let newPersons = db.filter(
      (e) =>
        e.name.toUpperCase().startsWith(filter_) ||
        e.name.toLowerCase().startsWith(filter_)
    );

    if (newPersons !== []) {
      setPersons(newPersons);
    } else {
      setPersons(db);
    }
  }, [filter_]);

  let handleFilchange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  let handleChange = (e) => {
    setNewName(e.target.value);
  };
  let handleChangeN = (e) => {
    setNumber(e.target.value);
  };

  let handleClick = (e) => {
    e.preventDefault();

    let x = persons;
    let found = persons.find((e) => e.name === newName);

    if (found?.name !== undefined) {
      alert.show(newName + " already added to phonebook");
    } else {
      x.push({ name: newName, number: number });
      db = x;
      setPersons(x);
      setNewName("");
      setNumber("");
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilchange={handleFilchange} />
      <h2>Add a new</h2>
      <form>
        <PersonForm
          handleChangeN={handleChangeN}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
