import React from "react";

function Statistics({ good, bad, all, neutral }) {
  return (
    <>
      <h2>Statistics</h2>
      <div className="statistics-container">
        <table>
          <thead>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{(good - bad) / all}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{(good * 100) / all}%</td>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default Statistics;
