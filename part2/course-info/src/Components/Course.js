import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";

function Course({ course }) {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total Total={course.parts} />
    </div>
  );
}

export default Course;
