import React from "react";
import { useState } from "react";
import Statistics from "./Components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  let handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  let handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  let handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  let handleInitial = () => {
    if (good > 0 || bad > 0 || neutral > 0) {
      return <Statistics all={all} neutral={neutral} bad={bad} good={good} />;
    } else {
      return <h4>No Feedbacks Given</h4>;
    }
  };

  return (
    <div className="app-container">
      <h1>Give Feedback</h1>
      <div className="button-container">
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      {handleInitial()}
    </div>
  );
};

export default App;
