// import logo from './logo.svg';
import styles from "../styles/app.module.css";
import React, { useState } from "react";

export default function Emojis() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [showWinner, setShowWinner] = useState(false);

  const emojis = ["😃", "😊", "👍"];

  const incrementCount = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const showResults = () => {
    const maxCount = Math.max(...counts);
    const maxIndex = counts.indexOf(maxCount);
    setShowWinner(true);
    setTimeout(() => {
      setShowWinner(false);
    }, 10000);
  };

  return (
    <div>
      <div className={styles.emojis}>
        {emojis.map((emoji, index) => (
          <div
            className="emoji"
            key={index}
            onClick={() => incrementCount(index)}
          >
            {emoji} - {counts[index]}
          </div>
        ))}
      </div>
      <button onClick={showResults}>Show Results</button>
      {showWinner && (
        <div id="results">
          The winning emoji is: {emojis[counts.indexOf(Math.max(...counts))]}
        </div>
      )}
    </div>
  );
}
