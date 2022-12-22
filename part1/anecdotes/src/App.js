import { useState } from "react";

let likes = [0, 0, 0, 0, 0, 0, 0];

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(likes[selected]);

  console.log(likes);

  let handleVote = () => {
    likes[selected] += 1;
    setVotes(likes[selected]);
  };

  let handleNext = () => {
    let random = Math.floor(Math.random() * 7);
    setSelected(random);
    setVotes(likes[random]);
  };

  let mostVoted = () => {
    let h_index = 0;
    let high = 0;
    for (let i = 0; i < likes.length; i++) {
      if (likes[i] > high) {
        high = likes[i];
        h_index = i;
      }
    }
    return (
      <div>
        <p>{anecdotes[h_index]}</p>
        <p>has {likes[h_index]} votes</p>
      </div>
    );
  };

  return (
    <>
      <h2>Anecdote of the Day</h2>
      <div>{anecdotes[selected]}</div>
      <p>has {votes} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next Anecdote</button>
      <br />
      <h2>Anecdote with most votes</h2>
      {mostVoted()}
    </>
  );
};

export default App;
