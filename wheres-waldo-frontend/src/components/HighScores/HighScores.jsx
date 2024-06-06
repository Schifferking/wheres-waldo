function HighScores({ bestScores }) {
  return (
    <div className="high-scores-container">
      <table className="high-scores">
        <caption>Game's high scores</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {bestScores.map((bestScore) => {
            return (
              <tr key={bestScore["time_elapsed"]}>
                <td>{bestScore.name}</td>
                <td>{bestScore["time_elapsed"].toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HighScores;

// to-do
// add proptypes
