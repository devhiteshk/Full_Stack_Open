import Content from "./Components/content";
import Header from "./Components/header";
import Total from "./Components/total";

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  console.log(course.parts);

  return (
    <div className="App">
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total Total={course.parts} />
    </div>
  );
}

export default App;
